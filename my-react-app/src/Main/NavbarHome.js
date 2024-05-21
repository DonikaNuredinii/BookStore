import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../Images/logo.png";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="navbar-link active">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/services" className="navbar-link">
          Books
        </Link>
        <Link to="/categories" className="navbar-link">
          Categories
        </Link>
        <Link to="/accessories" className="navbar-link">
          Accessories
        </Link>
        <Link to="/authors" className="navbar-link">
          Authors
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
        <Link to="/signup-login" className="navbar-link">
          Sign Up & Log In
        </Link>
        <Link to="/Dashboard" className="navbar-link">
          Dashboard
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </div>
    </nav>
  );
};

export default NavbarHome;
