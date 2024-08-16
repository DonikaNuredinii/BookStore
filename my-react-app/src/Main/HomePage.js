import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Books from "../Images/books.jpg";
import Slider from "../Components/Slider";
import "../App.css";
import BookBanner from "../Components/BookBaner";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);
const HomePage = ({ addToCart }) => {
  const [toggle, setToggle] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      displayRandomBooks();
    }, 3 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [allBooks]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Book`);
      const fetchedBooks = response.data.map((book) => ({
        ...book,
        isFavorite: false,
      }));
      setAllBooks(fetchedBooks);
      displayRandomBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
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
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const handleFavoriteClick = (bookID) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.bookID === bookID
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      )
    );
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

  const handleSubmit = (book) => {
    addToCart(book);
    setSelectedBook(book);
    setShowModal(true);
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
      <div className="fourth-section">
        <div className="cards-Home">
          {books.map((book) => {
            const imagePath = preprocessImagePath(book.image);
            return (
              <div key={book.bookID} className="card-item">
                <div className="card-image">
                  <img
                    src={preprocessImagePath(book.image)}
                    alt={book.title}
                    className="book-image"
                  />
                  <div className="icon-container">
                    {book.isFavorite ? (
                      <MdFavorite
                        className="favorite-icon"
                        onClick={() => handleFavoriteClick(book.bookID)}
                      />
                    ) : (
                      <MdFavoriteBorder
                        className="favorite-icon"
                        onClick={() => handleFavoriteClick(book.bookID)}
                      />
                    )}
                  </div>
                </div>
                <div className="dropup">
                  <div className="dropup-content">
                    <p className="card-price">Price: €{book.price}</p>
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-author">Author: {book.author}</p>
                    <button
                      className="buy-now-btn"
                      onClick={() => handleSubmit(book)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{book.title}</h3>
                  <p className="card-author">Author: {book.author}</p>
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
            <p>Item added to cart</p>
            <img
              src={preprocessImagePath(selectedBook.image)}
              alt={selectedBook.title}
              className="design-preview"
            />
            <p>Amount: €{selectedBook.price}</p>
            <div className="view-cart-container">
              <Link to="./cart" className="view-cart-button">
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
    </>
  );
};

export default HomePage;
