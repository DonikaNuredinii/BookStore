import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = ({ data, onSearch }) => {
  const [query, setQuery] = useState(""); // State to manage the search query
  const [suggestions, setSuggestions] = useState([]); // State to manage search suggestions
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value); // Update the local state with the input value
    if (onSearch) {
      onSearch(value); // Call the onSearch function passed as a prop
    }

    // Filter suggestions based on the query
    if (value) {
      const filteredSuggestions = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    setSuggestions([]);
    if (onSearch) {
      onSearch(suggestion.title);
    }
  };

  return (
    <div
      className={`search-container ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <IoIosSearch className="search-icon" onClick={toggleSearch} />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query} // Controlled component with the query state
        onChange={handleChange} // Handle input changes
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
