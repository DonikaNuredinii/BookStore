import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const AuthorDetails = ({ addToCart }) => {
  const { authorID } = useParams();
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

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
      console.error(`Image not found: ${imageName}`);
      return "/images/placeholder.jpg";
    }
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSubmit = (book) => {
    addToCart(book);
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!authorID) {
    return <div>No author ID specified.</div>;
  }

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
    <div className="author-details-container">
      <div className="author-card">
        <h2 className="author-name">{author.name}</h2>
        <p className="author-dob">Date of Birth: {author.dateOfBirth}</p>
        <p className="author-biography">{author.biography}</p>
        <p className="author-awards">Awards: {author.awards}</p>
        <p className="author-genre">Genre: {author.genre}</p>
      </div>

      <div className="author-books">
        <h1>All Books by {author.name}</h1>
        <div className="cards">
          {books.length > 0 ? (
            books.map((book) => {
              const imagePath = preprocessImagePath(book.image);
              return (
                <div key={book.bookID} className="card-item">
                  <div className="card-image">
                    <img
                      src={imagePath || "/images/placeholder.jpg"}
                      alt={book.title}
                      className="book-image"
                    />
                    <div className="icon-container">
                      {isFavorite ? (
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
                      <p className="card-author">Author: {author.name}</p>
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
  );
};

export default AuthorDetails;
