import React from "react";
import BookLight from "../Images/ImazhetAksesorie/book-light.jpeg";
import LeatherPageHolder from "../Images/ImazhetAksesorie/Leather-page-holder.jpeg";
import FlyingBoyBookend from "../Images/ImazhetAksesorie/The_Flying_Boy_Bookends.jpeg";
// import { Link } from "react-router-dom";
import "../App.css";
const AccessoriesBanner = () => {
  return (
    <div className="accessories-banner">
      <div className="accessories-banner-content">
        <h1>Popular Accessories</h1>
        <p>
        Discover our Popular Picks! 
        Often selected by our team and clients! These items promise quality, style, and functionality. 
        Dive into our curated collection and find your next favorite accessory today!
        </p>
      </div>
      <div className="accessories-items">
        <img src={BookLight} alt="Book Light" />
        <img src={LeatherPageHolder} alt="Leather Page Holder" />
        <img src={FlyingBoyBookend} alt="Flying Boy Bookend" />
      </div>
    </div>
  );
};

export default AccessoriesBanner;
