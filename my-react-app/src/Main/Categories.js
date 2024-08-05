import React, { useState, useEffect } from "react";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext} from "react-icons/gr";



const CategoriesF = ({ addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookCategories, setBookCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);   
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;
  const maxPageNumbers = 3;

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 

  };

  // Import images
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
  const imagesShkencaNatyrore = require.context(
    "../Images/ShkencaNatyrore",
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
  const imagesNovelaG = require.context(
    "../Images/NovelaG",
    false,
    /\.(png|jpe?g|svg)$/
  );

  useEffect(() => {
    fetchCategories();
    fetchBooks();
    fetchBookCategories();
  }, []);

  const handleSubmit = (book) => {
    addToCart(book);
    setSelectedBook(book);
    setShowModal(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Category`);
      console.log("Categories fetched:", response.data); // Debugging line
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Book`);
      console.log("Books fetched:", response.data); // Debugging line
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchBookCategories = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/CategoryBooks`
      );
      console.log("BookCategories fetched:", response.data); // Debugging line
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
      } else if (path.includes("ShkencaTeknike")) {
        return imagesShkencaTeknike(`./${imageName}`);
      } else if (path.includes("ShkencaNatyrore")) {
        return imagesShkencaNatyrore(`./${imageName}`);
      } else if (path.includes("Shkence")) {
        return imagesShkence(`./${imageName}`);
      } else if (path.includes("Sociologji")) {
        return imagesSociologji(`./${imageName}`);
      } else if (path.includes("Sport")) {
        return imagesSport(`./${imageName}`);
      } else if (path.includes("Teater")) {
        return imagesTeater(`./${imageName}`);
      }else if (path.includes("NovelaG")) {
        return imagesNovelaG(`./${imageName}`);
      }
       else {
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

  // Map bookCategories to books
  const categoryBooks = bookCategories.reduce((acc, item) => {
    const { category, book } = item;
    if (!acc[category.categoryId]) {
      acc[category.categoryId] = [];
    }
    acc[category.categoryId].push(book);
    return acc;
  }, {});

  // Filter books by selected category
  const filteredBooks = selectedCategory
    ? categoryBooks[selectedCategory.categoryId] || []
    : books;

    //logic for pagination
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const currentBooks = filteredBooks.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

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
                    <a
                      href={`#${category.genre.toLowerCase()}`}
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
          {currentBooks.length > 0 ? (
            currentBooks.map((book) => {
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
            })
          ) : (
            <p>No books available for the selected category.</p>
          )}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <GrPrevious />
          </button>
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <GrNext />
            </button>
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
