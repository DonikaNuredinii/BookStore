import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Books from "../Images/books.jpg";
import Slider from "../Components/Slider";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import BookBanner from "../Components/BookBaner";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";
import { useWishlist } from "../Components/Wishlist";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const HomePage = ({ addToCart }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [quote, setQuote] = useState({ text: "", authors: [] });
  const [authors, setAuthors] = useState([]);
  const [bookAuthors, setBookAuthors] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [message, setMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);
  const navigate = useNavigate();

  const { isBookInWishlist, removeFromWishlist, addToWishlist } = useWishlist();

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
    setShowCartModal(false);
    setShowWishlistModal(false);
  };

  useEffect(() => {
    fetchData();
    fetchDailyQuote();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      displayRandomBooks();
    }, 3 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [allBooks]);

  const fetchData = async () => {
    try {
      const [booksResponse, authorsResponse, bookAuthorsResponse] =
        await Promise.all([
          axios.get(`https://localhost:7061/api/Book`),
          axios.get("https://localhost:7061/api/Author"),
          axios.get("https://localhost:7061/api/BookAuthors"),
        ]);

      const fetchedBooks = booksResponse.data;
      const fetchedAuthors = authorsResponse.data;
      const fetchedBookAuthors = bookAuthorsResponse.data;

      setAuthors(fetchedAuthors);
      setBookAuthors(fetchedBookAuthors);

      // Filter out books of type 'Ebook'
      const filteredBooks = fetchedBooks.filter(
        (book) => book.type !== "Ebook"
      );

      const booksWithAuthors = filteredBooks.map((book) => ({
        ...book,
        authors: getAuthorsForBook(
          book.bookID,
          fetchedBookAuthors,
          fetchedAuthors
        ),
        isFavorite: false,
      }));

      setAllBooks(booksWithAuthors);
      displayRandomBooks(booksWithAuthors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDailyQuote = async () => {
    const today = new Date().toISOString().split("T")[0];
    const storedQuoteDate = localStorage.getItem("quoteDate");
    const storedQuote = localStorage.getItem("quote");

    if (storedQuoteDate === today && storedQuote) {
      setQuote(JSON.parse(storedQuote));
    } else {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/AuthorQuotes`
        );
        const randomQuote =
          response.data[Math.floor(Math.random() * response.data.length)];

        const newQuote = {
          text: randomQuote.quoteText,
          authors: [randomQuote.authorName],
        };

        setQuote(newQuote);
        localStorage.setItem("quote", JSON.stringify(newQuote));
        localStorage.setItem("quoteDate", today);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }
  };

  const getAuthorsForBook = (bookID, bookAuthors, authors) => {
    return (
      bookAuthors
        .filter((ba) => ba.bookID === bookID)
        .map((ba) => {
          const author = authors.find((a) => a.authorID === ba.authorID);
          return author ? author.name : "";
        }) || []
    );
  };

  const displayRandomBooks = (fetchedBooks = allBooks) => {
    if (fetchedBooks.length > 0) {
      const randomBooks = shuffleArray(fetchedBooks).slice(0, 24);
      setBooks(randomBooks);
    }
  };

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const preprocessImagePath = (path) => {
    if (!path) return null;
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const handleFavoriteClick = (e, bookID) => {
    e.stopPropagation();
    const book = books.find((b) => b.bookID === bookID);

    if (isBookInWishlist(bookID)) {
      removeFromWishlist(bookID);
      setSelectedBooks((prevSelectedBooks) =>
        prevSelectedBooks.filter((b) => b.bookID !== bookID)
      );
      setMessage("Book removed from wishlist");
      setShowWishlistModal(false);

      if (messageTimeout) {
        clearTimeout(messageTimeout);
      }
      setMessageTimeout(setTimeout(() => setMessage(""), 1000));
    } else {
      addToWishlist(book);
      setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
      setShowWishlistModal(true);
    }
  };

  const handleAddToCartClick = (e, book) => {
    e.stopPropagation();

    const itemToAdd = {
      bookId: book.bookID ?? null,
      accessoriesID: book.accessoriesID ?? null,
      giftCardId: book.giftCardId ?? null,
      quantity: 1,
      image: book.image ?? "",
      price: book.price ?? 0,
      title: book.title ?? "No Title",
    };

    console.log("Item to be added to cart:", itemToAdd);

    addToCart(itemToAdd);
    setSelectedBook(book);
    setShowModal(true);
  };

  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 500,
    config: { duration: 1000 },
  });

  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 1000,
    config: { duration: 3000 },
  });

  const handleBookClick = (bookID) => {
    navigate(`/bookdetails/${bookID}`);
  };

  const handleSubmit = (e, book) => {
    e.stopPropagation();
    addToCart(book);
    setSelectedBooks([book]);
    setShowCartModal(true);
    if (isBookInWishlist(book.bookID)) {
      removeFromWishlist(book.bookID);
    }
  };
  const handleAddAllToCart = () => {
    selectedBooks.forEach((book) => {
      addToCart(book);
      removeFromWishlist(book.bookID);
    });
    setShowWishlistModal(false);
  };

  return (
    <>
      <div className="first-section">
        <div className="left-part-s1">
          <animated.h1 style={textSpring} className="h1-s1">
            Books are a uniquely portable magic
          </animated.h1>
          <animated.h2 style={textSpring} className="h2-s1">
            Do not miss out our bestselling books
          </animated.h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using{" "}
          </p>
        </div>

        <div className="right-part-s1">
          <animated.img
            src={Books}
            alt="img1-s1"
            className="img1-s1"
            style={imageSpring}
          />
        </div>
      </div>
      <div className="second-section">
        <BookBanner />
      </div>
      <div className="third-section">
        <Slider />
      </div>
      <div className="quote-section">
        <h1 className="quote-title">Quote Of The Day</h1>
        <p className="quote-content">“{quote.text}”</p>
        <p className="quote-author">
          -{" "}
          {quote.authors &&
            quote.authors.map((author, index) => (
              <span key={index}>
                {author}
                {index < quote.authors.length - 1 && ", "}
              </span>
            ))}
        </p>
      </div>
      <div className="fourth-section">
        <div className="cards-Home">
          {books.map((book) => {
            const imagePath = preprocessImagePath(book.image);
            return (
              <div
                key={book.bookID}
                className="card-item"
                onClick={() => handleBookClick(book.bookID)}
              >
                <div className="card-image">
                  <img
                    src={imagePath || "default-image.jpg"}
                    alt={book.title || "Book Image"}
                    className="book-image"
                  />
                  <div className="icon-container">
                    {isBookInWishlist(book.bookID) ? (
                      <MdFavorite
                        className="favorite-icon"
                        onClick={(e) => handleFavoriteClick(e, book.bookID)}
                      />
                    ) : (
                      <MdFavoriteBorder
                        className="favorite-icon"
                        onClick={(e) => handleFavoriteClick(e, book.bookID)}
                      />
                    )}
                  </div>
                </div>
                <div className="dropup">
                  <div className="dropup-content">
                    <p className="card-price">Price: €{book.price}</p>
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-author">
                      Author:{" "}
                      {book.authors.length > 0
                        ? book.authors.join(", ")
                        : "Unknown"}
                    </p>
                    <button
                      className="buy-now-btn"
                      onClick={(e) => handleAddToCartClick(e, book)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{book.title}</h3>
                  <p className="card-author">
                    Author: Author:{" "}
                    {book.authors ? book.authors.join(", ") : "Unknown"}
                  </p>
                  <p className="card-price">Price: €{book.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && selectedBook && (
        <div className="modal-cart">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedBook && (
              <>
                <p>Item added to cart</p>
                <img
                  src={
                    preprocessImagePath(selectedBook.image) ||
                    "default-image.jpg"
                  }
                  alt={selectedBook.title || "Book Image"}
                  className="design-preview"
                />
                <p>Amount: €{selectedBook.price}</p>
              </>
            )}
            <div className="view-cart-container">
              <Link to="/cart" className="view-cart-button">
                View Cart
              </Link>
            </div>
            <div className="view-cart-container">
              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Wishlist Modal */}
      {showWishlistModal && (
        <div className="wishlist-modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3> Wishlist</h3>
            {selectedBooks.length > 0 && (
              <div className="wishlist-items">
                {selectedBooks.map((book) => (
                  <div key={book.bookID} className="wishlist-item">
                    <img
                      src={preprocessImagePath(book.image)}
                      alt={book.title}
                      className="wishlist-image"
                    />
                    <div className="wishlist-details">
                      <h4>{book.title}</h4>
                      <p>
                        Author:{" "}
                        {book.authors ? book.authors.join(", ") : "Unknown"}
                      </p>
                      <p>Price: €{book.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="wishlist-buttons">
              <button
                className="view-wishlist-button"
                onClick={() => {
                  setShowWishlistModal(false);
                  navigate("/WishlistPage");
                }}
              >
                View Wishlist
              </button>
              <button
                className="add-all-to-cart-button"
                onClick={handleAddAllToCart}
              >
                Add All to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {message && <div className="feedback-message">{message}</div>}
    </>
  );
};
export default HomePage;
