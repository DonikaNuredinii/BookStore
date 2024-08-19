import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ebooksImage from "../Images/ebooks.jpg";
import ebooksImage2 from "../Images/ebooks2.jpg";
import ebooksImage3 from "../Images/ebooks3.jpg";

const EbookList = () => {
  const [ebooks, setEbooks] = useState([]);
  const [bookAuthors, setBookAuthors] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState(new Set());
  const [showModal, setShowModal] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);
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
      return "/images/placeholder.jpg";
    }
  };

  const handleFavoriteClick = (ebookID) => {
    setFavoriteBooks((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(ebookID)) {
        updatedFavorites.delete(ebookID);
      } else {
        updatedFavorites.add(ebookID);
      }
      return updatedFavorites;
    });
  };

  const handleLoan = (ebook) => {
    navigate(`/EbookDetails/${ebook.bookID}`);
    setSelectedEbook(ebook);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
            <div key={ebook.bookID} className="card-item">
              <div className="card-image">
                <img
                  src={preprocessImagePath(ebook.image)}
                  alt={ebook.title}
                  className="book-image"
                />
                <div className="icon-container">
                  {favoriteBooks.has(ebook.bookID) ? (
                    <MdFavorite
                      className="favorite-icon"
                      onClick={() => handleFavoriteClick(ebook.bookID)}
                    />
                  ) : (
                    <MdFavoriteBorder
                      className="favorite-icon"
                      onClick={() => handleFavoriteClick(ebook.bookID)}
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
                    onClick={() => handleLoan(ebook)}
                  >
                    Loan Ebook
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
            <p>Ebook loaned successfully!</p>
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
    </>
  );
};

export default EbookList;
