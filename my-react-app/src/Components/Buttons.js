import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

const Buttons = ({ isSticky, cartCount, wishlistCount }) => {
  return (
    <div className={`buttons-container ${isSticky ? "sticky" : ""}`}>
      <div className="wishlist-wrapper">
        <Link to="/WishlistPage" className="link-on">
          <span role="img" aria-label="Wishlist">
            <MdFavoriteBorder />
          </span>
        </Link>
        {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
      </div>
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
