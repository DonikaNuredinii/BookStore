import React, { useState, useEffect } from "react";
import "../App.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from "axios";

const CategoriesF = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookCategories, setBookCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Gjendja për zhanrin e zgjedhur

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    fetchCategories();
    fetchBooks();
    fetchBookCategories();
    console.log(books);
  }, []); //[books]

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Categories`);
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
        `https://localhost:7061/api/BookCategories`
      );
      setBookCategories(response.data);
    } catch (error) {
      console.error("Error fetching book categories:", error);
    }
  };

  // Filtrimi i librave sipas zhanrit të zgjedhur
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.categoryID === selectedCategory.categoryID)
    : books;
  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(
        `https://localhost:7061/api/Book?categoryId=${category.id}`
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books for selected category:", error);
    }
  };
  return (
    <div className="main-content">
      <div className="sidebarc">
        <nav className="nav">
          <ul>
            {categories.map((category) => (
              <li key={category.categoryId}>
                <a
                  href={`#${category.name.toLowerCase()}`}
                  onClick={() => handleCategoryClick(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="cards">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card-item">
            <div className="card-image">
              <img
                src={book.imageSrc}
                alt={book.title}
                className="book-image"
              />
              <div className="icon-container">
                {isFavorite ? (
                  <MdFavorite
                    className={`favorite-icon`}
                    onClick={handleFavoriteClick}
                  />
                ) : (
                  <MdFavoriteBorder
                    className={`favorite-icon`}
                    onClick={handleFavoriteClick}
                  />
                )}
              </div>
            </div>
            <div className="dropup">
              <div className="dropup-content">
                <p className="card-price">Price: €{book.price}</p>
                <h3 className="card-title">{book.title}</h3>
                <p className="card-author">Author: {book.author}</p>
                <button className="buy-now-btn">Add to Cart</button>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{book.title}</h3>
              <p className="card-author">Author: {book.author}</p>
              <p className="card-price">Price: €{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesF;
