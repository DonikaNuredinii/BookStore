import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Ensure axios is installed or use fetch instead
import "../App.css";
import logo from "../Images/logo1.png";
import { IoIosSearch } from "react-icons/io";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [resultTitle, setResultTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length >= 3) {
      // Start searching only if query length is >= 3
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:7061/api/Book?search=${query}`
        );
        const data = response.data;

        if (data.length > 0) {
          setSearchResults(data);
          setResultTitle("Your Search Results");
        } else {
          setSearchResults([]);
          setResultTitle("No Search Results Found!");
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
        setResultTitle("Error fetching search results.");
      }
      setLoading(false);
    } else {
      setSearchResults([]);
      setResultTitle("");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-menu ${isSearchOpen ? "hidden" : ""}`}>
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/categories" className="navbar-link">
          Categories
        </Link>
        <Link to="/accessories" className="navbar-link">
          Accessories
        </Link>
        <Link to="/author-List" className="navbar-link">
          Authors
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/ebooks" className="navbar-link">
          Ebooks
        </Link>
        <Link to="/giftcard" className="navbar-link">
          Gift card
        </Link>
        <Link to="/account" className="navbar-link">
          Account
        </Link>
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
      </div>
      <div className={`search-container ${isSearchOpen ? "expanded" : ""}`}>
        <input
          type="text"
          id="search-input"
          className={`search-input ${isSearchOpen ? "visible" : ""}`}
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
        />
        <IoIosSearch
          className={`search-icon ${isSearchOpen ? "hidden" : ""}`}
          onClick={toggleSearch}
        />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>{resultTitle}</h2>
          <ul>
            {searchResults.map((book) => (
              <li key={book.id}>
                <img
                  src={`http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt={book.title}
                />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>Published: {book.first_publish_year}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarHome;
