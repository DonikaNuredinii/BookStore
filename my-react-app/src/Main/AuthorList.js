import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('https://localhost:7061/api/Author');
        const sortedAuthors = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setAuthors(sortedAuthors);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {authors.map(author => (
          <li key={author.authorID} style={{ fontFamily: 'Fantasy' }}>
            <Link to={`/authors/${author.authorID}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;