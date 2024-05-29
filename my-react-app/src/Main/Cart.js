import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function CartItem({ product }) {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <div className="info-Cart">
        <div className="name-Cart">{product.name}</div>
        <div className="price-Cart">${product.price}/1 product</div>
      </div>
      <div className="quantity-Cart">{product.quantity}</div>
      <div className="returnPrice-Cart">
        ${product.price * product.quantity}
      </div>
    </div>
  );
}

function Cart({ cart }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    country: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("your-backend-checkout-api-url", {
        ...formData,
        cart,
      });
      console.log("Checkout submitted successfully:", response.data);
      setFormData({
        fullName: "",
        phoneNumber: "",
        address: "",
        country: "",
        city: "",
      });
    } catch (error) {
      console.error("Error submitting checkout data:", error);
    }
  };

  const totalQuantity = cart
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;
  const totalPrice = cart
    ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="Cart-container">
      <Link to="/" className="keep-shopping-link">
        keep shopping
      </Link>
      <div className="checkoutLayout">
        <div className="return-Cart">
          <h1>List Product in Cart</h1>
          <hr />
          <div className="product-list-Cart">
            {cart &&
              cart.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
          </div>
        </div>
        <div className="right-cart">
          <h1>Checkout</h1>
          <form className="form-Cart" onSubmit={handleSubmit}>
            <div className="group-Cart">
              <label htmlFor="fullName" className="label-Cart">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="group-Cart">
              <label htmlFor="phoneNumber" className="label-Cart">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="group-Cart">
              <label htmlFor="address" className="label-Cart">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="group-Cart">
              <label htmlFor="country" className="label-Cart">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Choose..</option>
                <option value="">Kingdom</option>
              </select>
            </div>
            <div className="group-Cart">
              <label htmlFor="city" className="label-Cart">
                City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">Choose..</option>
                <option value="">London</option>
              </select>
            </div>
            <div className="return-Cart">
              <div className="row-Cart">
                <div>Total Quantity:</div>
                <div className="totalQuantity">{totalQuantity}</div>
              </div>
              <div className="row-Cart">
                <div>Total Price:</div>
                <div className="totalPrice">${totalPrice}</div>
              </div>
            </div>
            <button type="submit" className="buttonCheckout">
              CHECKOUT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
