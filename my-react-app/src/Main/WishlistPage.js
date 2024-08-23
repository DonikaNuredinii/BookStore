import React from "react";
import { useWishlist } from "../Components/Wishlist"; // Import the custom hook
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import "../App.css";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const preprocessImagePath = (path) => {
  if (!path) {
    console.error("No path provided for the image.");
    return "/images/placeholder.jpg";
  }

  try {
    const imageName = path.split("/").pop();
    const imagePath = images(`./${imageName}`);
    return imagePath.default || imagePath;
  } catch (err) {
    console.error(`Image not found: ${path}`);
    return "/images/placeholder.jpg";
  }
};

const WishlistPage = ({ addToCart }) => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <Link to="/categories" className="continue-shopping-cart">
        Continue Shopping
      </Link>
      <h2>Your Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((book) => (
          <div key={book.bookID} className="wishlist-item">
            <img
              src={preprocessImagePath(book.image)} 
              alt={book.title}
              className="wishlist-image"
            />
            <div className="wishlist-details">
              <h4>{book.title}</h4>
              <p>
                Author(s): {book.authors ? book.authors.join(", ") : "Unknown"}
              </p>
              <p>Price: €{book.price}</p>
              <div className="wishlist-actions">
                <button
                  className="remove-wishlist"
                  onClick={() => removeFromWishlist(book.bookID)}
                >
                  <MdDelete />
                </button>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    addToCart(book);
                    removeFromWishlist(book.bookID);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
