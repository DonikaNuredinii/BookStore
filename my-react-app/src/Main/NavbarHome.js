import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import logo from "../Images/logo1.png";
import { IoPerson } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { jwtDecode } from "jwt-decode";

const NavbarHome = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksResponse, authorsResponse, accessoriesResponse] =
          await Promise.all([
            axios.get("https://localhost:7061/api/Book"),
            axios.get("https://localhost:7061/api/Author"),
            axios.get("https://localhost:7061/api/Accessories"),
          ]);

        const books = booksResponse.data.map((book) => ({
          ...book,
          id: book.bookID,
          type: "book",
        }));

        const authors = authorsResponse.data.map((author) => ({
          id: author.authorID,
          title: author.name,
          type: "author",
        }));

        const accessories = accessoriesResponse.data.map((accessory) => ({
          ...accessory,
          id: accessory.id,
          type: "accessory",
        }));

        setCombinedData([...books, ...authors, ...accessories]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const searchItems = (items, query) => {
    if (!query) return [];

    const normalizedQuery = query.toLowerCase();
    return items
      .filter((item) => {
        const title = item.title ? item.title.toLowerCase() : "";
        const isbn =
          item.type === "book" && item.isbn ? item.isbn.toLowerCase() : "";

        return (
          title.startsWith(normalizedQuery) || isbn.startsWith(normalizedQuery)
        );
      })
      .slice(0, 10)
      .map((item) => {
        const regex = new RegExp(`(${query})`, "gi");
        const highlightedTitle = item.title.replace(
          regex,
          "<strong>$1</strong>"
        );
        return { ...item, highlightedTitle };
      });
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setHighlightedIndex(-1);

    const results = searchItems(combinedData, query);
    setSearchResults(results);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      handleSuggestionClick(searchResults[highlightedIndex]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setSearchQuery(suggestion.title);
    setSearchResults([]);
    setIsSearchOpen(false);

    try {
      let response;
      if (suggestion.type === "book") {
        response = await axios.get(
          `https://localhost:7061/api/Book/${suggestion.id}`
        );
        navigate(`/bookDetails/${suggestion.id}`, {
          state: response.data,
        });
      } else if (suggestion.type === "author") {
        response = await axios.get(
          `https://localhost:7061/api/Author/${suggestion.id}`
        );
        navigate(`/AuthorDetails/${suggestion.id}`, {
          state: response.data,
        });
      } else if (suggestion.type === "accessory") {
        response = await axios.get(
          `https://localhost:7061/api/Accessories/${suggestion.id}`
        );
        navigate(`/accessorydetails/${response.data.id}`, {
          state: response.data,
        });
      }

      setSearchQuery("");
      setSearchResults([]);
    } catch (error) {
      alert("Failed to fetch details. Please try again later.");
      console.error("Error fetching item details:", error);
    }
  };

  const handleAccountClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          navigate("/account-settings");
        } else {
          localStorage.removeItem("token");
          navigate("/account");
        }
      } catch (error) {
        console.error("Error decoding token", error);
        localStorage.removeItem("token");
        navigate("/account");
      }
    } else {
     
      navigate("/account");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </div>

      <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="navbar-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/categories" className="navbar-link" onClick={closeMenu}>
          Categories
        </Link>
        <Link to="/accessories" className="navbar-link" onClick={closeMenu}>
          Accessories
        </Link>
        <Link to="/author-list" className="navbar-link" onClick={closeMenu}>
          Authors
        </Link>
        <Link to="/events" className="navbar-link" onClick={closeMenu}>
          Events
        </Link>
        <Link to="/ebooks" className="navbar-link" onClick={closeMenu}>
          Ebooks
        </Link>
        <Link to="/giftcard" className="navbar-link" onClick={closeMenu}>
          Gift card
        </Link>
        <Link to="/contact" className="navbar-link" onClick={closeMenu}>
          Contact Us
        </Link>
        
        <Link to="/dashboard" className="navbar-link" onClick={closeMenu}>
          Dashboard
        </Link>
        <button className="navbar-link1" id="button-link" onClick={handleAccountClick}>
        <IoPerson />
        </button>
      </div>
   
      <div className={`search-container ${isSearchOpen ? "expanded" : ""}`}>
      
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Search by title or ISBN..."
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IoIosSearch className="search-icon" onClick={toggleSearch} />
        {searchResults.length > 0 && (
          <ul className="suggestions-list">
            {searchResults.map((item, index) => (
              <li
                key={`${item.id}-${index}`}
                className={`suggestion-item ${
                  index === highlightedIndex ? "highlighted" : ""
                }`}
                onClick={() => handleSuggestionClick(item)}
                dangerouslySetInnerHTML={{ __html: item.highlightedTitle }}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;