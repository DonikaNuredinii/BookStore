import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SidebarAccount from "../Components/SidebarAccount";
import "../App.css";
const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const EbookLoan = () => {
  const [loanedEbooks, setLoanedEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    const fetchLoanedEbooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://localhost:7061/api/EbookLoans/loaned/${userId}`
        );

        console.log("Fetched data:", response.data); // Log fetched data

        setLoanedEbooks(response.data);
      } catch (error) {
        console.error("Error fetching loaned ebooks:", error);
        setError("Failed to load loaned ebooks.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchLoanedEbooks();
    } else {
      setError("User ID is not found.");
      setLoading(false);
    }
  }, [userId]);
  const preprocessImagePath = (path) => {
    if (!path) return null;
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container-accountsettings">
      <SidebarAccount />
      <div className="form-containerA">
        <h1>My Loaned E-books</h1>
        <div className="ebook-cardsA">
          {loanedEbooks.length > 0 ? (
            loanedEbooks.map((ebook) => (
              <div key={ebook.ebookID} className="ebook-cardA">
                <img
                  src={preprocessImagePath(ebook.image)}
                  alt={ebook.title}
                  className="ebook-imageA"
                />
                <div className="ebook-contentA">
                  <h5>{ebook.title}</h5>
                </div>
                <Link
                  to={`/EbookDetails/${ebook.ebookID}`}
                  className="view-details-buttonA"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No loaned eBooks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EbookLoan;
