import React, { useState, useEffect } from "react";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoriesF = ({ addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookCategories, setBookCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Gjendja për zhanrin e zgjedhur
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };
  const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);
  const imagesArkitekture = require.context(
    "../Images/Arkitekture",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesArt = require.context(
    "../Images/Art",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesArkeologji = require.context(
    "../Images/Arkeologji",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesAnektoda = require.context(
    "../Images/Anektoda",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesBiografi = require.context(
    "../Images/Biografi",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesEkonomi = require.context(
    "../Images/Ekonomi",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesEnciklopedi = require.context(
    "../Images/Enciklopedi",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesFantashkence = require.context(
    "../Images/Fantashkence",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesFilozofi = require.context(
    "../Images/Filozofi",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesGjuhesi = require.context(
    "../Images/Gjuhesi",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesHistori = require.context(
    "../Images/Histori",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesKlasike = require.context(
    "../Images/Klasike",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesKritike = require.context(
    "../Images/Kritike",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesMister = require.context(
    "../Images/Mister",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesMuzik = require.context(
    "../Images/Muzik",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesPoezi = require.context(
    "../Images/Poezi",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesPsikologji = require.context(
    "../Images/Psikologji",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesRomance = require.context(
    "../Images/Romance",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesShkencaNatyore = require.context(
    "../Images/ShkencaNatyore",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesShkencaTeknike = require.context(
    "../Images/ShkencaTeknike",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesShkence = require.context(
    "../Images/Shkence",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesSociologji = require.context(
    "../Images/Sociologji",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesSport = require.context(
    "../Images/Sport",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const imagesTeater = require.context(
    "../Images/Teater",
    false,
    /\.(png|jpe?g|svg)$/
  );

  useEffect(() => {
    fetchCategories();
    fetchBooks();
    fetchBookCategories();
    console.log(books.image);
    console.log(books);
  }, []);
  const handleSubmit = (book) => {
    addToCart(book);
    setSelectedBook(book);
    setShowModal(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Category`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Book`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchBookCategories = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/bookCategories`
      );
      setBookCategories(response.data);
    } catch (error) {
      console.error("Error fetching book categories:", error);
    }
  };

  const preprocessImagePath = (path) => {
    if (!path) {
      console.error("Path is null or undefined.");
      return null;
    }

    const imageName = path.split("/").pop();
    try {
      if (path.includes("Art")) {
        return imagesArt(`./${imageName}`);
      } else if (path.includes("Arkeologji")) {
        return imagesArkeologji(`./${imageName}`);
      } else if (path.includes("Arkitekture")) {
        return imagesArkitekture(`./${imageName}`);
      } else if (path.includes("Anektoda")) {
        return imagesAnektoda(`./${imageName}`);
      } else if (path.includes("Biografi")) {
        return imagesBiografi(`./${imageName}`);
      } else if (path.includes("Ekonomi")) {
        return imagesEkonomi(`./${imageName}`);
      } else if (path.includes("Enciklopedi")) {
        return imagesEnciklopedi(`./${imageName}`);
      } else if (path.includes("Fantashkence")) {
        return imagesFantashkence(`./${imageName}`);
      } else if (path.includes("Filozofi")) {
        return imagesFilozofi(`./${imageName}`);
      } else if (path.includes("Gjuhesi")) {
        return imagesGjuhesi(`./${imageName}`);
      } else if (path.includes("Histori")) {
        return imagesHistori(`./${imageName}`);
      } else if (path.includes("Klasike")) {
        return imagesKlasike(`./${imageName}`);
      } else if (path.includes("Kritike")) {
        return imagesKritike(`./${imageName}`);
      } else if (path.includes("Mister")) {
        return imagesMister(`./${imageName}`);
      } else if (path.includes("Muzik")) {
        return imagesMuzik(`./${imageName}`);
      } else if (path.includes("Poezi")) {
        return imagesPoezi(`./${imageName}`);
      } else if (path.includes("Psikologji")) {
        return imagesPsikologji(`./${imageName}`);
      } else if (path.includes("Romance")) {
        return imagesRomance(`./${imageName}`);
      } else if (path.includes("ShkencaNatyore")) {
        return imagesShkencaNatyore(`./${imageName}`);
      } else if (path.includes("ShkencaTeknike")) {
        return imagesShkencaTeknike(`./${imageName}`);
      } else if (path.includes("Shkence")) {
        return imagesShkence(`./${imageName}`);
      } else if (path.includes("Sociologji")) {
        return imagesSociologji(`./${imageName}`);
      } else if (path.includes("Sport")) {
        return imagesSport(`./${imageName}`);
      } else if (path.includes("Teater")) {
        return imagesTeater(`./${imageName}`);
      } else {
        console.error("Folder not found for the provided image path.");
        return null;
      }
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filtrimi i librave sipas zhanrit të zgjedhur
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.categoryId === selectedCategory.categoryId)
    : books;
  /* const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(
        `https://localhost:7061/api/Book?categoryId=${category.id}`
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books for selected category:", error);
    }
  }; */

  return (
    <>
      <div className="fourth-section">
        <div className="language">
          <Link to="/" className="language-link">
            English
          </Link>
          <Link to="/" className="language-link">
            Albanian
          </Link>
        </div>
        <div className="main-content">
          <div className="sidebarc">
            <nav className="nav">
              <ul>
                {categories.map((category) => (
                  <li key={category.categoryId}>
                    {/* <a
                  href={`#${category.genre.toLowerCase()}`}
                  onClick={() => handleCategoryClick(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category.genre}
                </a> */}
                    <a
                      href={`#${
                        category.genre ? category.genre.toLowerCase() : ""
                      }`}
                      onClick={() => handleCategoryClick(category)}
                      className={selectedCategory === category ? "active" : ""}
                    >
                      {category.genre}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="cards">
          {filteredBooks.map((book) => {
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

export default CategoriesF;
