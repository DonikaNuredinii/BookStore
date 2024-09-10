import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ebooksImage from "../Images/ebooks.jpg";
import ebooksImage2 from "../Images/ebooks2.jpg";
import ebooksImage3 from "../Images/ebooks3.jpg";
import { useWishlist } from "../Components/Wishlist";

const EbookList = ({ addToCart }) => {
  const [ebooks, setEbooks] = useState([]);
  const [bookAuthors, setBookAuthors] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [message, setMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isBookInWishlist,
  } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEbooks();
    fetchAuthors();
    fetchBookAuthors();
  }, []);

  const fetchEbooks = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Ebooks");
      setEbooks(response.data);
    } catch (error) {
      console.error("Error fetching ebooks:", error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Author");
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const fetchBookAuthors = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/BookAuthors"
      );
      setBookAuthors(response.data);
    } catch (error) {
      console.error("Error fetching book authors:", error);
    }
  };

  const preprocessImagePath = (path) => {
    const imageName = path.split("/").pop();
    try {
      return require(`../Images/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return `https://localhost:7061/${path}`;
    }
  };

  const handleFavoriteClick = (ebookID) => {
    const book = ebooks.find((b) => b.bookID === ebookID);
    if (isBookInWishlist(ebookID)) {
      removeFromWishlist(ebookID);
      setMessage("Book removed from wishlist");
    } else {
      addToWishlist(book);
      setMessage("Book added to wishlist");
      setShowWishlistModal(true);
    }
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    setMessageTimeout(setTimeout(() => setMessage(""), 1000));
  };

  const handleAddToCartClick = (e, ebook) => {
    e.stopPropagation();
    const itemToAdd = {
      bookId: ebook.bookID ?? null,
      accessoriesID: ebook.accessoriesID ?? null,
      giftCardId: ebook.giftCardId ?? null,
      quantity: 1,
      image: ebook.image ?? "",
      price: ebook.price ?? 0,
      title: ebook.title ?? "No Title",
    };

    console.log("Item to be added to cart:", itemToAdd);

    addToCart(itemToAdd);
    setSelectedEbook(ebook);
    setShowModal(true);
  };

  const handleEbookClick = (ebookID) => {
    navigate(`/BookDetails/${ebookID}`);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowWishlistModal(false);
  };

  const getAuthorsForBook = (bookID) => {
    const bookAuthorIDs = bookAuthors
      .filter((ba) => ba.bookID === bookID)
      .map((ba) => ba.authorID);

    return authors
      .filter((author) => bookAuthorIDs.includes(author.authorID))
      .map((author) => author.name)
      .join(", ");
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
      <div className="hero-section">
        <div className="image-collage">
          <img
            src={ebooksImage}
            alt="Ebook 1"
            className="collage-image small"
          />
          <img
            src={ebooksImage3}
            alt="Ebook 3"
            className="collage-image large"
          />
          <img
            src={ebooksImage2}
            alt="Ebook 2"
            className="collage-image medium"
          />
        </div>
        <div className="hero-content">
          <h1>Discover Your Next Favorite Ebook</h1>
          <p>
            Dive into our vast collection of ebooks. Whether you're into
            fiction, non-fiction, or academic reading, we've got something for
            everyone.
          </p>
        </div>
      </div>
      <div className="fourth-section">
        <div className="cards-Home">
          {ebooks.map((ebook) => (
            <div
              key={ebook.bookID}
              className="card-item"
              onClick={() => handleEbookClick(ebook.bookID)}
            >
              <div className="card-image">
                <img
                  src={preprocessImagePath(ebook.image)}
                  alt={ebook.title}
                  className="book-image"
                />
                <div className="icon-container">
                  {isBookInWishlist(ebook.bookID) ? (
                    <MdFavorite
                      className="favorite-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick(ebook.bookID);
                      }}
                    />
                  ) : (
                    <MdFavoriteBorder
                      className="favorite-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick(ebook.bookID);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="dropup">
                <div className="dropup-content">
                  <p className="card-price">Price: €{ebook.price}</p>
                  <h3 className="card-title">{ebook.title}</h3>
                  <p className="card-author">
                    Author: {getAuthorsForBook(ebook.bookID) || "Unknown"}
                  </p>
                  <button
                    className="buy-now-btn"
                    onClick={(e) => handleAddToCartClick(e, ebook)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{ebook.title}</h3>
                <p className="card-author">
                  Author: {getAuthorsForBook(ebook.bookID) || "Unknown"}
                </p>
                <p className="card-price">Price: €{ebook.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && selectedEbook && (
        <div className="modal-cart">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Item added to cart</p>
            <img
              src={preprocessImagePath(selectedEbook.image)}
              alt={selectedEbook.title}
              className="design-preview"
            />
            <p>Amount: €{selectedEbook.price}</p>
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
      {showWishlistModal && (
        <div className="wishlist-modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Wishlist</h3>
            {wishlist.length > 0 ? (
              <div className="wishlist-items">
                {wishlist.map((book) => (
                  <div key={book.bookID} className="wishlist-item">
                    <img
                      src={preprocessImagePath(book.image)}
                      alt={book.title}
                      className="wishlist-image"
                    />
                    <div className="wishlist-details">
                      <h4>{book.title}</h4>
                      <p>
                        Author: {getAuthorsForBook(book.bookID) || "Unknown"}
                      </p>
                      <p>Price: €{book.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No items in wishlist.</p>
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

export default EbookList;
