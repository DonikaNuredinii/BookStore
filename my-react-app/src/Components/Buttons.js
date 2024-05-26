import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const Buttons = ({ isSticky }) => {
  return (
    <div className={`buttons-container ${isSticky ? "sticky" : ""}`}>
      <Link to="" className="link-on">
        <span role="img" aria-label="Love">
          <MdFavoriteBorder />
        </span>
      </Link>
      <Link to="/cart" className="link-on">
        <span role="img" aria-label="Add to cart">
          <CiShoppingCart />
        </span>
      </Link>
    </div>
  );
};

export default Buttons;
