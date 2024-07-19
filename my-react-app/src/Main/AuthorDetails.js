import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

const AuthorDetails = ({ onClose }) => {
  const { authorID } = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/Author/${authorID}`
        );
        setAuthor(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (authorID) {
      fetchAuthor();
    }
  }, [authorID]);

  if (!authorID) {
    return <div>No author ID specified.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching author data: {error.message}</div>;
  }

  if (!author) {
    return <div>No author found.</div>;
  }

  return (
    <div className="author-card-container">
      <div className="author-card">
        <h2 className="author-name">{author.name}</h2>
        <p className="author-dob">Date of Birth: {author.dateOfBirth}</p>
        <p className="author-biography">{author.biography}</p>
        <p className="author-awards">Awards: {author.awards}</p>
        <p className="author-genre">Genre: {author.genre}</p>
      </div>
    </div>
  );
};

export default AuthorDetails;
