import React from "react";
import { useWishlist } from "../Components/Wishlist"; 
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
        wishlist.map((item) => {
          const itemID = item.bookID || item.accessoriesID;
          const isBookOrEbook = Boolean(item.bookID); 
          const isAccessory = Boolean(item.accessoriesID); 

          return (
            <div key={itemID} className="wishlist-item">
              <img
                src={preprocessImagePath(item.image)}
                alt={item.title || item.name}
                className="wishlist-image"
              />
              <div className="wishlist-details">
                <h4>{isBookOrEbook ? item.title : item.name}</h4>
                {isBookOrEbook ? (
                  <p>Author(s): {item.authors ? item.authors.join(", ") : "Unknown"}</p>
                ) : isAccessory ? (
                  <p>Seller: {item.seller ? item.seller : "Unknown"}</p>
                ) : null}

                <p>Price: {item.price}€</p>

                <div className="wishlist-actions">
                  <button
                    className="remove-wishlist"
                    onClick={() => removeFromWishlist(itemID)}
                  >
                    <MdDelete />
                  </button>
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(itemID);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
