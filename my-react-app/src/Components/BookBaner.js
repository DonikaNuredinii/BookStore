import React from "react";
import Wildfire from "../Images/wildfire.jpg";
import Twisted from "../Images/twisted.jpg";
import cruelPrince from "../Images/cruelPrince.jpg";
import icebreaker from "../Images/icebreaker.jpg";
import { Link } from "react-router-dom";
import "../App.css";
const BookBanner = () => {
  return (
    <div className="book-banner">
      <div className="book-banner-content">
        <h1>Staff recomandations</h1>
        <p>
          Discover our Staff Picks! Hand-selected by our team of book
          enthusiasts, these reads promise excitement, emotion, and insight.
          Dive into our curated collection and find your next favorite book
          today!
        </p>
        <Link to="/Categories" className="more-button">
          See more
        </Link>
      </div>
      <div className="book-covers">
        <img src={Wildfire} alt="Book Cover 1" />
        <img src={Twisted} alt="Book Cover 2" />
        <img src={cruelPrince} alt="Book Cover 3" />
        <img src={icebreaker} alt="Book Cover 4" />
      </div>
    </div>
  );
};

export default BookBanner;
