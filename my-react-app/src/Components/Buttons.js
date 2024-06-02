import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const Buttons = ({ isSticky, cartCount }) => {
  return (
    <div className={`buttons-container ${isSticky ? "sticky" : ""}`}>
      <Link to="" className="link-on">
        <span role="img" aria-label="Love">
          <MdFavoriteBorder />
        </span>
      </Link>
      <div className="cart-wrapper">
        <Link to="/cart" className="link-on">
          <span role="img" aria-label="Add to cart">
            <CiShoppingCart />
          </span>
        </Link>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </div>
  );
};

export default Buttons;
