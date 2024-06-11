import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const Cart = ({ cart = [], setCart }) => {
  const location = useLocation();
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setQuantities(storedCart.map(() => 1));
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const discount = 0.3;

  const handleQuantityChange = (index, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(quantity + delta, 1) : quantity
      )
    );
  };

  const preprocessImagePath = (path) => {
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };
  const handleCheckout = async () => {
    const cartData = cart.map((item, index) => {
      const cartItemData = {
        quantity: quantities[index],
      };

      if (item.book) {
        cartItemData.bookId = item.book.id;
      }

      if (item.accessories) {
        cartItemData.accessoriesId = item.accessories.id;
      }

      if (item.giftCard) {
        cartItemData.giftCardId = item.giftCard.id;
      }

      return cartItemData;
    });
    console.log("Cart Data:", cartData);

    try {
      const response = await fetch("https://localhost:7061/api/CartItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
      });

      if (response.ok) {
        console.log("Checkout successful!");
        // Clear the cart
        setCart([]);
        setQuantities([]);
      } else {
        console.error("Error checking out:", response.status);
        // Log response body
        const responseBody = await response.json();
        console.log("Response body:", responseBody);
      }
      console.log("Validation Error Details:", response.errors.$);
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    const newQuantities = [
      ...quantities.slice(0, index),
      ...quantities.slice(index + 1),
    ];
    setCart(newCart);
    setQuantities(newQuantities);
  };

  return (
    <div className="cart-container">
      <div className="top-Cart">
        <h1>Your cart</h1>
        <Link to="/" className="continue-shopping-cart">
          Continue Shopping
        </Link>
      </div>
      <div className="cart-items-name">
        <p>Product</p>
        <p>Quantity</p>
        <p>Total Price</p>
      </div>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={preprocessImagePath(item.image)} alt={item.title} />
          <div className="items-cart-screen">
            <div className="item-details">
              <p>{item.title}</p>
              <p>€{item.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange(index, -1)}
                disabled={quantities[index] <= 1}
              >
                -
              </button>
              <span>{quantities[index]}</span>
              <button onClick={() => handleQuantityChange(index, 1)}>+</button>
            </div>
          </div>
          <MdDelete
            className="delete-icon"
            onClick={() => removeFromCart(index)}
          />
          <p className="total-price">
            €{(item.price * quantities[index]).toFixed(2)}
          </p>
        </div>
      ))}
      <div className="cart-summary">
        <p>
          30% discount only on the web! (
          {cart.length > 0 && `-€${(cart[0].price * discount).toFixed(2)}`})
        </p>
        <p>
          Estimated total: €
          {cart
            .reduce(
              (total, item, index) =>
                total + item.price * quantities[index] * (1 - discount),
              0
            )
            .toFixed(2)}{" "}
          EUR
        </p>
        <p>
          Tax included. <a href="#shipping">Shipping</a> and discounts
          calculated at checkout.
        </p>
        {/* Checkout Button */}
        <Link
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className="checkout-button"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
