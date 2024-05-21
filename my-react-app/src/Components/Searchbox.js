import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <IoIosSearch className="search-icon" />
      <input
        type="text"
        id="search-input"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
