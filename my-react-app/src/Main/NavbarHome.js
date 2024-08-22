import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import logo from "../Images/logo1.png";
import { IoIosSearch } from "react-icons/io";

// Search function to filter items based on the query
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
      const highlightedTitle = item.title.replace(regex, "<strong>$1</strong>");
      return { ...item, highlightedTitle };
    });
};

const NavbarHome = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track the highlighted suggestion
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
          id: book.bookID, // Ensure bookID is mapped to id
          type: "book",
        }));

        const authors = authorsResponse.data.map((author) => ({
          id: author.authorID, // Replace with the correct field name for author ID
          title: author.name,
          type: "author",
        }));

        const accessories = accessoriesResponse.data.map((accessory) => ({
          ...accessory,
          id: accessory.id, // Ensure accessories have an id
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

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setHighlightedIndex(-1); // Reset highlighted index when the input changes

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
    setSearchResults([]); // Hide suggestions after selecting
    setIsSearchOpen(false); // Close the search bar

    try {
      console.log("Suggestion Selected:", suggestion); // Debugging statement

      let response;
      if (suggestion.type === "book") {
        response = await axios.get(
          `https://localhost:7061/api/Book/${suggestion.id}`
        );
        console.log("Fetched Book Data:", response.data); // Debugging statement
        navigate(`/bookDetails/${suggestion.id}`, {
          state: response.data,
        });
      } else if (suggestion.type === "author") {
        console.log("Author ID:", suggestion.id); // Debugging statement
        response = await axios.get(
          `https://localhost:7061/api/Author/${suggestion.id}`
        );
        console.log("Fetched Author Data:", response.data); // Debugging statement
        navigate(`/AuthorDetails/${suggestion.id}`, {
          state: response.data,
        });
      } else if (suggestion.type === "accessory") {
        response = await axios.get(
          `https://localhost:7061/api/Accessories/${suggestion.id}`
        );
        console.log("Fetched Accessory Data:", response.data); // Debugging statement
        navigate(`/accessorydetails/${response.data.id}`, {
          state: response.data,
        });
      }

      // Clear the search query and results after navigation
      setSearchQuery(""); // Clear the search input
      setSearchResults([]); // Clear the search results
    } catch (error) {
      alert("Failed to fetch details. Please try again later.");
      console.error("Error fetching item details:", error);
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
        <Link to="/ebooks" className="navbar-link">
          Ebooks
        </Link>
        <Link to="/giftcard" className="navbar-link">
          Gift card
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact Us
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
                key={`${item.id}-${index}`} // Ensure each item has a unique key
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
      <div className="navbar-toggle" onClick={toggleSearch}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </div>
    </nav>
  );
};

export default NavbarHome;
