// AuthorDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorDetails = ({ authorId, onClose }) => {
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch author details
    axios.get(`/api/authors/${authorId}`)
      .then(response => {
        setAuthor(response.data);
      });

    // Fetch books by author
    axios.get(`/api/authors/${authorId}/books`)
      .then(response => {
        setBooks(response.data);
      });
  }, [authorId]);

  if (!author) return <div>Loading...</div>;

  return (
    <div className="author-details">
      <button onClick={onClose}>Close</button>
      <h2>{author.name}</h2>
      <p>{author.description}</p>
      <h3>Books:</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorDetails;
