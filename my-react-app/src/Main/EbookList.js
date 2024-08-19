import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "../App.css";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const EbookList = ({ addToCart }) => {
  const [ebooks, setEbooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEbooks();
  }, []);

  const fetchEbooks = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Ebooks");
      setEbooks(response.data);
    } catch (error) {
      console.error("Error fetching ebooks:", error);
    }
  };

  const handleFavoriteClick = (ebookID) => {
    setEbooks((prevEbooks) =>
      prevEbooks.map((ebook) =>
        ebook.bookID === ebookID
          ? { ...ebook, isFavorite: !ebook.isFavorite }
          : ebook
      )
    );
  };

  const preprocessImagePath = (path) => {
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "/images/placeholder.jpg";
    }
  };

  const handleLoan = (ebook) => {
    navigate(`/EbookDetails/${ebook.bookID}`);
    setSelectedEbook(ebook);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="fourth-section">
        <div className="cards">
          {ebooks.map((ebook) => (
            <div key={ebook.bookID} className="card-item">
              <div className="card-image">
                <img
                  src={preprocessImagePath(ebook.image)}
                  alt={ebook.title}
                  className="book-image"
                />
                <div className="icon-container">
                  {ebook.isFavorite ? (
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
                  <p className="card-author">Author: {ebook.author}</p>
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
                <p className="card-author">Author: {ebook.author}</p>
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
