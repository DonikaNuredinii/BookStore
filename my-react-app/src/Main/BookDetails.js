import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineCancel, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import "../App.css";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const BookDetails = ({ addToCart }) => {
  const { bookID } = useParams();
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/Book/${bookID}`
        );
        const data = response.data;
        setBook(data.book);
        setAuthors(data.authors);
        setCategories(data.categories);
      } catch (error) {
        setError("Failed to fetch book details. Please try again later.");
      }
    };

    fetchBookDetails();
  }, [bookID]);

  const preprocessImagePath = (path) => {
    if (!path) return "default-image.jpg";
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "default-image.jpg";
    }
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSubmit = () => {
    if (book) {
      addToCart(book);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
            <div className="img-box">
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
                <strong>Publishing House ID:</strong>{" "}
                {book.publishingHouseId || "Not available"}
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
                        onClick={() => setRating(ratingValue)}
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
                <button className="buy-now-btn" onClick={handleSubmit}>
                  <CiShoppingCart /> Add to Cart
                </button>
                <button className="favorite-btn" onClick={handleFavoriteClick}>
                  {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />} Add to
                  Wish List
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
      </div>
    </div>
  );
};

export default BookDetails;
