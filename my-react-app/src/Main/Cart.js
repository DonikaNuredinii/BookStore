import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import theSpanish from "../Images/theSpanish.jpg";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 5.0;
  const discount = 0.3;
  const discountedPrice = price * (1 - discount);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with quantity:", quantity);
  };

  return (
    <div className="cart-container">
      <div className="top-Cart">
        <h1>Your cart</h1>
        <Link to="./HomePage" className="continue-shopping">
          Continue Shoping
        </Link>
      </div>
      <div className="cart-items-name">
        <p>Product</p>
        <p>Quantity</p>
        <p>Total Price</p>
      </div>
      <div className="cart-item">
        <img src={theSpanish} alt="2-pack 18k Gold Plated Basic Chubby Hoops" />
        <div className="items-cart-screen">
          <div className="item-details">
            <p>2-pack 18k Gold Plated Basic Chubby Hoops</p>
            <p>€{price.toFixed(2)}</p>
            <p>Color: Gold</p>
          </div>
          <div className="quantity-controls">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>
        <p className="total-price">
          €{(discountedPrice * quantity).toFixed(2)}
        </p>
      </div>
      <div className="cart-summary">
        <p>30% zbritje vetem ne WEB! (-€{(price * discount).toFixed(2)})</p>
        <p>Estimated total: €{(discountedPrice * quantity).toFixed(2)} EUR</p>
        <p>
          Tax included. <a href="#shipping">Shipping</a> and discounts
          calculated at checkout.
        </p>
        <Link
          to="../CheckoutForm"
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
