import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useWishlist } from "../Components/Wishlist";
import "../App.css";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const BookDetails = ({ addToCart }) => {
  const { bookID } = useParams();
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [publishingHouseName, setPublishingHouseName] = useState("");
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(1); 
  const navigate = useNavigate();

  const { wishlist, addToWishlist, removeFromWishlist, isBookInWishlist } =
    useWishlist();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/Book/${bookID}`
        );
        const data = response.data;

        if (data) {
          setBook(data);
          setAuthors(data.authors || []);
          setCategories(data.categories || []);
        }

        if (data.publishingHouseId) {
          const publishingHouseResponse = await axios.get(
            `https://localhost:7061/api/PublishingHouses/${data.publishingHouseId}`
          );
          setPublishingHouseName(publishingHouseResponse.data.houseName || "");
        }
      } catch (error) {
        setError("Failed to fetch book details. Please try again later.");
      }
    };

    fetchBookDetails();

    const userToken = localStorage.getItem("token");
    if (userToken) {
      setIsLoggedIn(true);
    }


  }, [bookID]);


  const handleRatingSubmit = async (ratingValue) => {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");

    if (!token) {
      alert("You must be logged in to rate!");
      return;
    }

    try {
      const response = await axios.post(
        `https://localhost:7061/api/Rating`,
        { bookID: bookID, ratingValue: ratingValue, userID: userID },
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", } }
      );
      setRating(ratingValue); // Update state to reflect the new rating
      alert("Rating submitted successfully!");
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      alert("Failed to submit rating: " + errorMessage);
    }
  };



  
  const preprocessImagePath = (path) => {
    if (!path) return "default-image.jpg";
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      return "default-image.jpg";
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
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
      const bookWithAuthors = {
        ...book,
        authors: authors.map((author) => author.name || "Unknown"),
      };
      addToWishlist(bookWithAuthors);
      setSelectedBooks((prevSelectedBooks) => [
        ...prevSelectedBooks,
        bookWithAuthors,
      ]);
      setShowWishlistModal(true);
    }
  };

  const handleSubmit = () => {
    if (book) {
      addToCart(book);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowWishlistModal(false);
  };

  const handleAddAllToCart = () => {
    selectedBooks.forEach((book) => {
      addToCart(book);
      removeFromWishlist(book.bookID);
    });
    setShowWishlistModal(false);
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="bookDetails-all">
      <div className="book-detail-container">
        <div className="top-Cart">
          <h1>Book Details</h1>
          <Link to="/" className="continue-shopping-cart">
            Continue Shopping
          </Link>
        </div>
        <div className="book-detail-content">
          <div className="book-detail-info">
            <div className="img-box-book">
              <img
                src={preprocessImagePath(book.image)}
                alt={book.title || "Book Image"}
                className="book-detail-image"
              />
            </div>
            <div className="book-details">
              <h4>{book.title || "No title available"}</h4>
              <h5>
                €
                {book.price !== undefined
                  ? book.price.toFixed(2)
                  : "Price not available"}
              </h5>
              <p>
                <strong>ISBN:</strong> {book.isbn || "Not available"}
              </p>
              <p>
                <strong>Type:</strong> {book.type || "Not available"}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {book.description || "No description available"}
              </p>
              <p>
                <strong>Number of Pages:</strong>{" "}
                {book.pageNumber !== undefined
                  ? book.pageNumber
                  : "Not available"}
              </p>
              <p>
                <strong>Publication Date:</strong>{" "}
                {book.publicationDate
                  ? new Date(book.publicationDate).toLocaleDateString()
                  : "Invalid Date"}
              </p>
              <p>
                <strong>Publishing House:</strong>{" "}
                {publishingHouseName || "Not available"}
              </p>

              {categories.length > 0 ? (
                <div>
                  <h5>
                    <strong>Categories:</strong>
                  </h5>
                  <ul>
                    {categories.map((category, index) => (
                      <li key={index}>
                        {category.genre || "No genre available"}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No categories available</p>
              )}

              {authors.length > 0 ? (
                <div>
                  <h5>
                    <strong>Authors:</strong>
                  </h5>
                  <ul>
                    {authors.map((author, index) => (
                      <li key={index}>{author.name || "No name available"}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No authors available</p>
              )}

              <div className="book-rating">
                <span>
                  <strong>Rating:</strong>
                </span>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => handleRatingSubmit(ratingValue)}
                      />
                      <FaStar
                        className="star"
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={20}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <div className="book-buttons">
                <button className="favorite-btn" onClick={handleSubmit}>
                  <CiShoppingCart /> Add to Cart
                </button>
                <button className="favorite-btn" onClick={handleFavoriteClick}>
                  {isBookInWishlist(bookID) ? (
                    <MdFavorite />
                  ) : (
                    <MdFavoriteBorder />
                  )}{" "}
                  Add to Wish List
                </button>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal-cart">
            <div className="modal-content">
              <span className="modal-close" onClick={closeModal}>
                &times;
              </span>
              <p>Item added to cart</p>
              <img
                src={preprocessImagePath(book.image)}
                alt={book.title}
                className="design-preview"
              />
              <p>Amount: €{book.price}</p>
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
                          <p>
                            Author:{" "}
                            {book.authors ? book.authors.join(", ") : "Unknown"}
                          </p>
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
      </div>
      {message && <div className="feedback-message">{message}</div>}
    </div>
  );
};

export default BookDetails;
