import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";

const CheckoutForm = () => {
  const location = useLocation();
  const {
    quantity = 1,
    discountedPrice = 0,
    discount = 0,
    price = 0,
  } = location.state || {};

  const [formData, setFormData] = useState({
    email: "",
    getOrderUpdatesOnWhatsApp: false,
    country: "Kosovo",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    phoneNumber: "",
    saveInfo: false,
    shippingMethod: "shipping",
    paymentMethod: "creditCard",
    billingSameAsShipping: true,
    creditCardNumber: "",
    expiryDate: "",
    cvv: "",
    savePaymentInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with data:", formData);
    // Here you can add your checkout logic (e.g., API call)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckout();
  };

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="left-section">
          <div className="contact">
            <h2>Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Email or mobile phone number"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="whatsapp-update">
              <input
                type="checkbox"
                name="getOrderUpdatesOnWhatsApp"
                id="whatsapp"
                checked={formData.getOrderUpdatesOnWhatsApp}
                onChange={handleChange}
              />
              <label htmlFor="whatsapp">Get order updates on WhatsApp</label>
            </div>
          </div>

          <div className="delivery">
            <h2>Delivery</h2>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="Kosovo">Kosovo</option>
              {/* Add more options as needed */}
            </select>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal code"
              value={formData.postalCode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number for order updates"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <div className="save-info">
              <input
                type="checkbox"
                name="saveInfo"
                id="save-info"
                checked={formData.saveInfo}
                onChange={handleChange}
              />
              <label htmlFor="save-info">
                Save this information for next time
              </label>
            </div>
          </div>

          {/* <div className="shipping-method">
            <h2>Shipping method</h2>
            <div className="shipping-option">
              <input
                type="radio"
                name="shippingMethod"
                id="shipping"
                value="shipping"
                checked={formData.shippingMethod === "shipping"}
                onChange={handleChange}
              />
              <label htmlFor="shipping">Shipping - €2.00</label>
            </div>
          </div> */}

          <div className="payment">
            <h2>Payment</h2>
            <p>Select a payment method below.</p>
            <div className="payment-methods">
              <div className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleChange}
                />
                <label htmlFor="creditCard">
                  <CiCreditCard1 />
                </label>
                {formData.paymentMethod === "creditCard" && (
                  <div className="credit-card-details">
                    <input
                      type="text"
                      name="creditCardNumber"
                      placeholder="Credit card number"
                      value={formData.creditCardNumber}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Expiry date (MM / YY)"
                      value={formData.expiryDate}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV / CVC"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                    <div className="save-payment-info">
                      <input
                        type="checkbox"
                        name="savePaymentInfo"
                        id="savePaymentInfo"
                        checked={formData.savePaymentInfo}
                        onChange={handleChange}
                      />
                      <label htmlFor="savePaymentInfo">
                        Save payment information to my account for future
                        purchases.
                      </label>
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paypal"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                <label htmlFor="paypal">
                  <FaCcPaypal />
                </label>
              </div> */}
              <div className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                <label htmlFor="cod">
                  <LuPackageCheck />
                </label>
              </div>
            </div>
          </div>

          <div className="billing-address">
            <h2>Billing address</h2>
            <div className="billing-option">
              <input
                type="radio"
                name="billingSameAsShipping"
                id="same-as-shipping"
                value={true}
                checked={formData.billingSameAsShipping === true}
                onChange={handleChange}
              />
              <label htmlFor="same-as-shipping">Same as shipping address</label>
            </div>
            <div className="billing-option">
              <input
                type="radio"
                name="billingSameAsShipping"
                id="different-address"
                value={false}
                checked={formData.billingSameAsShipping === false}
                onChange={handleChange}
              />
              <label htmlFor="different-address">
                Use a different billing address
              </label>
            </div>
          </div>

          <button className="complete-order" type="submit">
            Complete order
          </button>
        </div>

        <div className="right-section">
          <h2>Order Summary</h2>
          <div className="order-item">
            <p>2-pack 18k Gold Plated Basic Chubby Hoops</p>
            <p>Quantity: {quantity}</p>
            <p>Price per item: €{price.toFixed(2)}</p>
            <p>
              Discount: {discount * 100}% (-€{(price * discount).toFixed(2)})
            </p>
            <p>Total: €{(discountedPrice * quantity).toFixed(2)}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
