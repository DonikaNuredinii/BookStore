import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useWishlist } from "../Components/Wishlist"; // Import the useWishlist hook

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const AuthorDetails = ({ addToCart }) => {
  const { authorID } = useParams();
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const navigate = useNavigate();

  // Use the wishlist hook
  const { isBookInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/Author/${authorID}`
        );
        setAuthor(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchBooksByAuthor = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/BookAuthors/author/${authorID}`
        );
        setBooks(response.data);
      } catch (error) {
        setError(error);
      }
    };

    if (authorID) {
      fetchAuthor();
      fetchBooksByAuthor();
    }
  }, [authorID]);

  const preprocessImagePath = (path) => {
    if (!path) {
      return "/images/placeholder.jpg";
    }
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      return "/images/placeholder.jpg";
    }
  };

  const handleFavoriteClick = (e, book) => {
    e.stopPropagation();
    if (isBookInWishlist(book.bookID)) {
      removeFromWishlist(book.bookID);
      setMessage("Book removed from wishlist");
      setShowWishlistModal(false);
      setSelectedBooks((prevSelectedBooks) =>
        prevSelectedBooks.filter((b) => b.bookID !== book.bookID)
      );
    } else {
      addToWishlist(book);
      setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
      setShowWishlistModal(true);
      setMessage("Book added to wishlist");
    }

    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    setMessageTimeout(setTimeout(() => setMessage(""), 2000));
  };

  const handleBookClick = (bookID) => {
    navigate(`/bookdetails/${bookID}`);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching author data: {error.message}</div>;
  }

  if (!author) {
    return <div>No author found.</div>;
  }

  return (
    <>
      <div className="author-details-container">
        <div className="author-card">
          <h2 className="author-name">{author.name}</h2>
          <p className="author-dob">
            Date of Birth: {author.dateOfBirth || "Unknown"}
          </p>
          <p className="author-biography">{author.biography}</p>
          <p className="author-awards">Awards: {author.awards}</p>
          <p className="author-genre">Genre: {author.genre}</p>
        </div>

        <div className="author-books">
          <h1>All Books by {author.name}</h1>
          <div className="cards-Home">
            {books.length > 0 ? (
              books.map((book) => {
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
                            onClick={(e) => handleFavoriteClick(e, book)}
                          />
                        ) : (
                          <MdFavoriteBorder
                            className="favorite-icon"
                            onClick={(e) => handleFavoriteClick(e, book)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="dropup">
                      <div className="dropup-content">
                        <p className="card-price">Price: €{book.price}</p>
                        <h3 className="card-title">{book.title}</h3>
                        <p className="card-author">Author: {author.name}</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{book.title}</h3>
                      <p className="card-author">Author: {author.name}</p>
                      <p className="card-price">Price: €{book.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No books available for this author.</p>
            )}
          </div>
        </div>
      </div>

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
                      <p>Author: {author.name}</p>
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

export default AuthorDetails;
