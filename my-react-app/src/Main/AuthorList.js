import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"; 

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("https://localhost:7061/api/Author");
        const sortedAuthors = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setAuthors(sortedAuthors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div className="Author-page">
      <h2>Authors</h2>
      <div className="styled-hr" />
      <ul className="author-list" style={{ listStyle: "none", padding: 0 }}>
        {authors.map((author) => (
          <li key={author.authorID} style={{ fontFamily: "Fantasy" }}>
            <Link
              to={`/AuthorDetails/${author.authorID}`}
              className="author-link"
            >
              {author.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="styled-hr2" />
    </div>
  );
};

export default AuthorList;
