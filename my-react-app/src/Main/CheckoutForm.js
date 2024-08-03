import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import Invoice from "./Invoice"; // Import the Invoice component
import { CiCreditCard1 } from "react-icons/ci";
import { LuPackageCheck } from "react-icons/lu";

// Import images
const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const CheckoutForm = () => {
  const location = useLocation();
  const {
    cartData = [],
    totalPrice = 0,
    discountedPrice = 0,
    discount = 0,
  } = location.state || {};

  const [countries, setCountries] = useState([]);
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
    giftCardCode: "",
    giftCardAmount: 0,
  });

  const [currentDiscountedPrice, setCurrentDiscountedPrice] =
    useState(discountedPrice);

  const [orderDetails, setOrderDetails] = useState(null); // New state for order details

  useEffect(() => {
    // Fetch countries from backend
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://localhost:7061/api/Countries");
        if (response.ok) {
          const data = await response.json();
          // Sort countries alphabetically by countryName
          const sortedCountries = data.sort((a, b) =>
            a.countryName.localeCompare(b.countryName)
          );
          setCountries(sortedCountries);
        } else {
          console.error("Failed to fetch countries");
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (c) => c.countryID === e.target.value
    );
    setFormData({
      ...formData,
      country: selectedCountry ? selectedCountry.countryName : "",
    });
  };

  const applyGiftCard = async () => {
    const { giftCardCode } = formData;
    try {
      // Fetch the gift card details
      const response = await fetch(
        `https://localhost:7061/api/GiftCard/${giftCardCode}`
      );
      if (response.ok) {
        const giftCard = await response.json();
        if (giftCard && giftCard.IsActive) {
          // Update the form data with gift card information
          setFormData((prevData) => ({
            ...prevData,
            giftCardAmount: giftCard.Amount,
          }));
          // Update the discounted price
          setCurrentDiscountedPrice(totalPrice - giftCard.Amount);

          // Mark the gift card as inactive
          await fetch(`https://localhost:7061/api/GiftCard/${giftCardCode}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...giftCard,
              IsActive: false,
            }),
          });
        } else {
          alert("Invalid or inactive gift card");
        }
      } else {
        console.error("Failed to apply gift card");
      }
    } catch (error) {
      console.error("Error applying gift card:", error);
    }
  };

  const handleCheckout = async () => {
    const orderDetails = {
      ...formData,
      totalPrice: totalPrice,
      discountedPrice: currentDiscountedPrice,
    };

    try {
      const response = await fetch("https://localhost:7061/api/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });
      if (response.ok) {
        console.log("Order placed successfully");
        setOrderDetails(orderDetails); // Set order details for invoice
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === "creditCard") {
      // Handle credit card payment logic here
    }
    handleCheckout();
  };

  const preprocessImagePath = (path) => {
    if (!path) {
      console.warn("Image path is not defined");
      return null; // Return null or a default image
    }

    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null; // Return null or a default image
    }
  };

  return (
    <div className="checkout-container">
      {!orderDetails ? (
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
                {countries.map((country) => (
                  <option key={country.countryID} value={country.countryID}>
                    {country.countryName}
                  </option>
                ))}
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
                          Save this information for next time
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="cashOnDelivery"
                    value="cashOnDelivery"
                    checked={formData.paymentMethod === "cashOnDelivery"}
                    onChange={handleChange}
                  />
                  <label htmlFor="cashOnDelivery">
                    <LuPackageCheck />
                  </label>
                </div>
              </div>
            </div>

            <div className="gift-card">
              <h2>Gift Card</h2>
              <input
                type="text"
                name="giftCardCode"
                placeholder="Gift card code"
                value={formData.giftCardCode}
                onChange={handleChange}
              />
              <button type="button" onClick={applyGiftCard}>
                Apply Gift Card
              </button>
            </div>

            <button type="submit">Place Order</button>
          </div>

          <div className="right-section">
            <div className="summary">
              <h2>Order Summary</h2>
              <ul>
                {cartData.map((item, index) => (
                  <li key={index}>
                    <div className="item-image">
                      <img
                        src={preprocessImagePath(item.imagePath)}
                        alt={item.title}
                      />
                    </div>
                    <div className="item-details">
                      <p>{item.title}</p>
                      <p>
                        {item.quantity} x $
                        {item.rate ? item.rate.toFixed(2) : "0.00"}
                      </p>
                    </div>
                    <div className="item-total">
                      $
                      {item.rate
                        ? (item.quantity * item.rate).toFixed(2)
                        : "0.00"}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="summary-details">
                <p>Subtotal: ${totalPrice.toFixed(2)}</p>
                <p>Discount: ${discount.toFixed(2)}</p>
                <p>Gift Card Applied: ${formData.giftCardAmount.toFixed(2)}</p>
                <p>Total: ${currentDiscountedPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Invoice orderDetails={orderDetails} cartData={cartData} /> // Render Invoice component
      )}
    </div>
  );
};

export default CheckoutForm;
