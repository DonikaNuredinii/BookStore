import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Buttons from "../Components/Buttons"; // Adjust the path as necessary
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

  const handleCheckout = () => {
    console.log("Proceeding to checkout with quantities:", quantities);
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
        {/* Checkout button */}
        <Link
          to="/CheckoutForm"
          className="checkout-button"
          onClick={handleCheckout}
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Cart;
