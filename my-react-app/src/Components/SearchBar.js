// src/Components/SearchBar.js
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi"; // Importing a search icon from react-icons
import "../App.css"; // Include your CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button className="search-bar-button">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
