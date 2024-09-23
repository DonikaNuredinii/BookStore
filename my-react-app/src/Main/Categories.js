import React, { useState, useEffect } from "react";
import "../App.css";
import { MdFavoriteBorder, MdFavorite, MdDelete } from "react-icons/md";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useWishlist } from "../Components/Wishlist";
import { TbBooks } from "react-icons/tb";

const CategoriesF = ({ addToCart }) => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookCategories, setBookCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;
  const maxPageNumbers = 3;
  const [authors, setAuthors] = useState([]);
  const [bookAuthors, setBookAuthors] = useState([]);
  const [message, setMessage] = useState("");
  const [messageTimeout, setMessageTimeout] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isBookInWishlist,
  } = useWishlist();
  const navigate = useNavigate();

  const closeModal = () => {
    setShowCartModal(false);
    setShowWishlistModal(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

  useEffect(() => {
    fetchCategories(selectedLanguage);
    fetchBooks(selectedLanguage);
    fetchBookCategories();
    fetchAuthors();
    fetchBookAuthors();
  }, [selectedLanguage]);

  const handleSubmit = (e, book) => {
    e.stopPropagation();
    addToCart(book);
    setSelectedBooks([book]);
    setShowCartModal(true);
    if (isBookInWishlist(book.bookID)) {
      removeFromWishlist(book.bookID);
    }
  };
  const handleAddAllToCart = () => {
    selectedBooks.forEach((book) => {
      addToCart(book);
      removeFromWishlist(book.bookID);
    });

    setShowWishlistModal(false);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const fetchCategories = async (languageId) => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/Category/GetCategoriesByLanguage/${languageId}`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchBooks = async (languageId) => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/Book/GetBooksByLanguage/${languageId}`
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  const fetchBookCategories = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/CategoryBooks"
      );
      setBookCategories(response.data);
    } catch (error) {
      console.error("Error fetching book categories:", error);
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
    if (!path) {
      console.error("No path provided for the image.");
      return "/images/placeholder.jpg";
    }

    try {
      const imageName = path.split("/").pop();
      const imagePath = images(`./${imageName}`);
      return imagePath.default || imagePath;
    } catch (err) {
      console.error(`Image not found: ${path}`);
      return "/images/placeholder.jpg";
    }
  };
  const handleFavoriteClick = (e, bookID) => {
    e.stopPropagation();
    const book = books.find((b) => b.bookID === bookID);
    const bookWithAuthors = {
      ...book,
      authors: getAuthorsForBook(book.bookID),
    };

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
      addToWishlist(bookWithAuthors);
      setSelectedBooks((prevSelectedBooks) => [
        ...prevSelectedBooks,
        bookWithAuthors,
      ]);
      setShowWishlistModal(true);
    }
  };

  const handleBookClick = (bookID) => {
    navigate(`/bookdetails/${bookID}`);
  };

  const getAuthorsForBook = (bookID) => {
    return (
      bookAuthors
        .filter((ba) => ba.bookID === bookID)
        .map((ba) => {
          const author = authors.find((a) => a.authorID === ba.authorID);
          return author ? author.name : "";
        }) || []
    );
  };

  const filteredBooks = selectedCategory
    ? bookCategories
        .filter(
          (item) => item.category.categoryId === selectedCategory.categoryId
        )
        .map((item) => ({
          ...item.book,
          authors: getAuthorsForBook(item.book.bookID) || [],
        }))
    : books.map((book) => ({
        ...book,
        authors: getAuthorsForBook(book.bookID) || [],
      }));

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

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
  const handleLanguageClick = (languageId) => {
    console.log(`Language selected: ${languageId}`);
    setSelectedLanguage(languageId);
  };

  return (
    <>
      <div className="Books-category">
        <div className={`main-content ${isSidebarOpen ? "blurred" : ""}`}>
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            <TbBooks />
          </button>
          <div className="language">
            <Link
              to="#"
              className="language-link"
              onClick={() => handleLanguageClick(1)}
            >
              English
            </Link>
            <Link
              to="#"
              className="language-link"
              onClick={() => handleLanguageClick(2)}
            >
              Albanian
            </Link>
          </div>
          <div className={`sidebarc ${isSidebarOpen ? "open" : "closed"}`}>
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
          {isSidebarOpen && (
            <div className="overlay visible" onClick={toggleSidebar} />
          )}

          <div className="cards-Home">
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => {
                const imagePath = preprocessImagePath(book.image);
                return (
                  <div
                    key={book.bookID}
                    className="card-item"
                    onClick={() => handleBookClick(book.bookID)}
                  >
                    <div className="card-image">
                      <img
                        src={imagePath || "/images/placeholder.jpg"}
                        alt={book.title}
                        className="book-image"
                      />
                      <div className="icon-container">
                        {isBookInWishlist(book.bookID) ? (
                          <MdFavorite
                            className="favorite-icon"
                            onClick={(e) => handleFavoriteClick(e, book.bookID)}
                          />
                        ) : (
                          <MdFavoriteBorder
                            className="favorite-icon"
                            onClick={(e) => handleFavoriteClick(e, book.bookID)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="dropup">
                      <div className="dropup-content">
                        <p className="card-price">Price: €{book.price}</p>
                        <h3 className="card-title">{book.title}</h3>
                        <p className="card-author">
                          Author:{" "}
                          {book.authors ? book.authors.join(", ") : "Unknown"}
                        </p>
                        <button
                          className="buy-now-btn"
                          onClick={(e) => handleSubmit(e, book)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{book.title}</h3>
                      <p className="card-author">
                        Author:{" "}
                        {book.authors ? book.authors.join(", ") : "Unknown"}
                      </p>
                      <p className="card-price">Price: €{book.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No books found for this category.</p>
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
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCartModal && selectedBooks[0] && (
        <div className="modal-cart">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Item added to cart</p>
            <img
              src={preprocessImagePath(selectedBooks[0].image)}
              alt={selectedBooks[0].title}
              className="design-preview"
            />
            <p>Amount: €{selectedBooks[0].price}</p>
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
                        Author:{" "}
                        {book.authors ? book.authors.join(", ") : "Unknown"}
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
      {message && <div className="feedback-message">{message}</div>}
    </>
  );
};

export default CategoriesF;
