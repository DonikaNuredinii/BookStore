import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await axios.get('https://localhost:7061/api/Author');
                setAuthors(response.data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchAuthors();
    }, []);

    return (
        <div>
            <h2>Authors</h2>
            <ul>
                {authors.map(author => (
                    <li key={author.authorID}>
                        {/* Use Link instead of a plain anchor tag */}
                        <Link to={`/authors/${author.authorID}`}>{author.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuthorList;

