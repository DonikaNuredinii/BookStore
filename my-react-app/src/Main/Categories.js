import React, { useState, useEffect } from "react";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";

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

  const [authors, setAuthors] = useState([]);
  const [bookAuthors, setBookAuthors] = useState([]);

  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    console.log("Selected category:", category);
  };

  // Import images
  const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

  useEffect(() => {
    fetchCategories();
    fetchBooks();
    fetchBookCategories();
    fetchAuthors();
    fetchBookAuthors();
  }, []);

  const handleSubmit = (e, book) => {
    e.stopPropagation(); // Prevent triggering book card click
    addToCart(book);
    setSelectedBook(book);
    setShowModal(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Category`);
      console.log("Categories fetched:", response.data);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Book`);
      console.log("Books fetched:", response.data);
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
      console.log("BookCategories fetched:", response.data);
      setBookCategories(response.data);
    } catch (error) {
      console.error("Error fetching book categories:", error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Author`);
      console.log("Authors fetched:", response.data);
      setAuthors(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const fetchBookAuthors = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/BookAuthors`
      );
      console.log("BookAuthors fetched:", response.data);
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

    const imageName = path.split("/").pop();
    try {
      const imagePath = images(`./${imageName}`);
      console.log("Processed image path:", imagePath);
      return imagePath;
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "/images/placeholder.jpg";
    }
  };

  const handleFavoriteClick = (e, bookID) => {
    e.stopPropagation(); // Prevent triggering book card click
    setIsFavorite(!isFavorite);
  };

  const handleBookClick = (bookID) => {
    navigate(`/bookdetails/${bookID}`);
  };

  // Link books with authors
  const getAuthorsForBook = (bookID) => {
    return bookAuthors
      .filter((ba) => ba.bookID === bookID)
      .map((ba) => {
        const author = authors.find((a) => a.authorID === ba.authorID);
        return author ? author.name : "";
      });
  };

  // Filter books by selected category and include authors
  const filteredBooks = selectedCategory
    ? bookCategories
        .filter(
          (item) => item.category.categoryId === selectedCategory.categoryId
        )
        .map((item) => ({
          ...item.book,
          authors: getAuthorsForBook(item.book.bookID), // Link authors to books
        }))
    : books.map((book) => ({
        ...book,
        authors: getAuthorsForBook(book.bookID), // Link authors to books
      }));

  console.log("Filtered Books after selection:", filteredBooks);

  // Pagination logic
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

  return (
    <>
      <div className="Books-category">
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
                      {isFavorite ? (
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
                        Author: {book.authors.join(", ")}
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
                      Author: {book.authors.join(", ")}
                    </p>
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
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
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
