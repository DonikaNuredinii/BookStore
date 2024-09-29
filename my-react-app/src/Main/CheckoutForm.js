import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../App.css";
import { CiCreditCard1 } from "react-icons/ci";
import { LuPackageCheck } from "react-icons/lu";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const CheckoutForm = () => {
  const stripe = useStripe();
  const [userId, setUserId] = useState(null);
  const elements = useElements();
  const [setShowLoginMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleOrderSuccess = (message) => {
    setSuccessMessage(message);
    setShowSuccessPopup(true);
  };

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userID");
    if (userIdFromStorage) {
      setUserId(parseInt(userIdFromStorage, 10));
      setFormData((prevFormData) => ({
        ...prevFormData,
        userID: parseInt(userIdFromStorage, 10),
      }));
    }
  }, []);

  const location = useLocation();
  const {
    cartData = [],
    discountedPrice = 0,
    discount = 0,
    appliedGiftCard,
    cartItemIds = [],
  } = location.state || {};
  const totalPrice = cartData.reduce((total, item) => {
    return total + (item.price || 0) * (item.quantity || 0);
  }, 0);

  const [countries, setCountries] = useState([]);
  const [giftCardCode, setGiftCardCode] = useState("");
  const [giftCardBalance, setGiftCardBalance] = useState(0);
  const [appliedGiftCardAmount, setAppliedGiftCardAmount] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    getOrderUpdatesOnWhatsApp: false,
    countryID: "",
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: "",
    phoneNumber: "",
    paymentMethod: "creditCard",
    discountID: null,
    giftCardID: appliedGiftCard ? appliedGiftCard.id : null,
    payment: {
      amount: totalPrice,
      lastFourDigits: "",
      transactionID: "",
    },
    orderDetails: {
      totalPrice: totalPrice,
      invoiceDate: new Date().toISOString(),
      orderShipDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
      invoiceNumber: `INV${Math.floor(Math.random() * 1000)}`,
      cartItemIds: cartItemIds,
    },
    userID: userId ? parseInt(userId, 10) : null,
  });
  const [currentDiscountedPrice, setCurrentDiscountedPrice] =
    useState(discountedPrice);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    navigate("/");
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://localhost:7061/api/Countries");
        if (response.ok) {
          const data = await response.json();
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

  const revertGiftCardAmount = async () => {
    if (formData.giftCardID) {
      const revertResponse = await fetch(
        "https://localhost:7061/api/GiftCard/revert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            giftCardCode: giftCardCode,
            revertedAmount: appliedGiftCardAmount,
          }),
        }
      );

      if (!revertResponse.ok) {
        const errorData = await revertResponse.json();
        console.error("Failed to revert gift card amount:", errorData.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("paymentDetails.")) {
      const paymentField = name.split(".")[1];
      setFormData({
        ...formData,
        paymentDetails: {
          ...formData.paymentDetails,
          [paymentField]: type === "checkbox" ? checked : value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleGiftCardApply = async () => {
    if (!giftCardCode) {
      alert("Please enter a gift card code.");
      return;
    }

    try {
      const balanceResponse = await fetch(
        `https://localhost:7061/api/GiftCard/balance/${giftCardCode}`
      );

      if (!balanceResponse.ok) {
        const errorMessage = await balanceResponse.text();
        throw new Error(`Failed to fetch gift card balance: ${errorMessage}`);
      }

      const { amount: fetchedBalance, giftCardId } =
        await balanceResponse.json();
      setGiftCardBalance(fetchedBalance);

      const amountToApply = Math.min(
        fetchedBalance,
        totalPrice - appliedGiftCardAmount
      );

      if (amountToApply <= 0) {
        alert("No amount can be applied from this gift card.");
        return;
      }

      const applyResponse = await fetch(
        "https://localhost:7061/api/GiftCard/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            giftCardCode,
            usedAmount: amountToApply,
          }),
        }
      );

      if (!applyResponse.ok) {
        const errorMessage = await applyResponse.text();
        throw new Error(`Failed to apply gift card: ${errorMessage}`);
      }

      const { remainingAmount } = await applyResponse.json();
      setAppliedGiftCardAmount((prev) => prev + amountToApply);

      const newTotalPrice = totalPrice - amountToApply;
      setCurrentDiscountedPrice(newTotalPrice);

      setGiftCardBalance(remainingAmount);
      formData.giftCardID = giftCardId;

      alert(
        `Successfully applied €${amountToApply.toFixed(2)} from the gift card.`
      );
    } catch (error) {
      console.error("Error applying gift card:", error);
      alert(`Error applying gift card: ${error.message}`);
    }
  };

  const displayPrice = (price) => {
    return price ? price.toFixed(2) : "0.00";
  };

  const preprocessImagePath = (path) => {
    const imageName = path.split("/").pop();
    try {
      return require(`../Images/${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "/images/placeholder.jpg";
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    setFormData((prevFormData) => ({
      ...prevFormData,
      payment: {
        ...prevFormData.payment,
        lastFourDigits: paymentMethod.card.last4,
        transactionID: paymentMethod.id,
      },
    }));

    const orderPayload = {
      ordersId: 0,
      orderDate: new Date().toISOString(),
      address: formData.address,
      city: formData.city,
      countryID: formData.countryID,
      zipCode: formData.zipCode,
      email: formData.email,
      discountID: formData.discountID,
      giftCardID: formData.giftCardID,
      payment: {
        amount: formData.payment.amount,
        lastFourDigits: paymentMethod.card.last4,
        paymentMethod: "creditCard",
        transactionID: paymentMethod.id,
      },
      orderDetails: {
        totalPrice: formData.orderDetails.totalPrice,
        invoiceDate: formData.orderDetails.invoiceDate,
        orderShipDate: formData.orderDetails.orderShipDate,
        invoiceNumber: formData.orderDetails.invoiceNumber,
        cartItemIds: formData.orderDetails.cartItemIds,
      },
      userID: formData.userID,
    };
    console.log("Order payload being sent:", orderPayload);

    try {
      const response = await fetch("https://localhost:7061/api/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error details:", errorData);
        setErrorMessage("An error occurred while processing your order.");
        return;
      }

      const orderData = await response.json();
      setShowSuccessPopup(true);
      setSuccessMessage("Your order has been processed successfully!");

      setErrorMessage("");

      setFormData({
        address: "",
        city: "",
        countryID: 0,
        zipCode: "",
        discountID: null,
        giftCardID: null,
        payment: {
          amount: 0,
          paymentMethod: "",
          lastFourDigits: "",
          transactionID: "",
        },
        orderDetails: {
          totalPrice: 0,
          invoiceDate: new Date().toISOString(),
          orderShipDate: new Date(
            new Date().setDate(new Date().getDate() + 7)
          ).toISOString(),
          invoiceNumber: "INV10",
          cartItemIds: [],
        },
        userID: 0,
      });
    } catch (error) {
      revertGiftCardAmount();
      console.error("Error processing order:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };
  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
        padding: "10px 14px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="checkout-container">
      {showSuccessPopup && (
        <div className="overlayP">
          <div className="success-popup">
            <p>{successMessage}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      {!orderDetails ? (
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="left-section">
            <div className="contact">
              <h2>Contact</h2>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="delivery">
              <h2>Delivery</h2>
              <select
                name="countryID"
                value={formData.countryID}
                className="form-select"
                onChange={handleChange}
                required
                autoComplete="country"
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
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
                autoComplete="given-name"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
                autoComplete="family-name"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="form-input"
                value={formData.address}
                onChange={handleChange}
                required
                autoComplete="address-line1"
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip code"
                className="form-input"
                value={formData.zipCode}
                onChange={handleChange}
                required
                autoComplete="Zip-code"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-input"
                value={formData.city}
                onChange={handleChange}
                required
                autoComplete="address-level2"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number for order updates"
                className="form-input"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="tel"
              />
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
                    className="form-radio"
                    checked={formData.paymentMethod === "creditCard"}
                    onChange={handleChange}
                  />
                  <label htmlFor="creditCard">
                    <CiCreditCard1 />
                  </label>
                  {formData.paymentMethod === "creditCard" && (
                    <div className="credit-card-details">
                      <CardElement
                        options={cardElementOptions}
                        className="card-element"
                      />
                    </div>
                  )}
                </div>
                <div className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="paypal"
                    value="paypal"
                    className="form-radio"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleChange}
                  />
                  <label htmlFor="paypal">
                    <FaPaypal />
                  </label>
                  {formData.paymentMethod === "paypal" && (
                    <div id="paypal-button"></div>
                  )}
                </div>
                <div className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="cashOnDelivery"
                    value="cashOnDelivery"
                    className="form-radio"
                    checked={formData.paymentMethod === "cashOnDelivery"}
                    onChange={handleChange}
                  />
                  <label htmlFor="cashOnDelivery">
                    <LuPackageCheck />
                  </label>
                  {formData.paymentMethod === "cashOnDelivery" && (
                    <p className="payment-message">Payment on delivery</p>
                  )}
                </div>
              </div>
            </div>
            <div className="gift-card">
              <h2>Gift Card</h2>
              <input
                type="text"
                name="giftCardCode"
                placeholder="Gift card code"
                className="gift-card-input"
                value={giftCardCode}
                onChange={(e) => setGiftCardCode(e.target.value)}
              />
              <button
                type="button"
                onClick={handleGiftCardApply}
                className="apply-gift-card-button"
                disabled={loading}
              >
                Apply Gift Card
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}{" "}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <button
              type="submit"
              className="apply-gift-card-button"
              disabled={loading}
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
          <div className="right-section">
            <div className="summary">
              <h2>Order Summary</h2>
              <ul>
                {cartData.map((item, index) => (
                  <li key={index}>
                    <div className="item-image">
                      <img
                        src={preprocessImagePath(item.image)}
                        alt={item.title}
                        className="item-image-img"
                      />
                    </div>
                    <div className="item-details">
                      <p>{item.title}</p>
                      <p>
                        {item.quantity} x
                        {item.price ? item.price.toFixed(2) : "0.00"}€
                      </p>
                    </div>
                    <div className="item-total">
                      {item.price
                        ? (item.quantity * item.price).toFixed(2)
                        : "0.00"}{" "}
                      €
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="summary-details">
              <p>Subtotal: {(totalPrice || 0).toFixed(2)} €</p>
              <p>
                Applied Gift Card Amount:
                {(appliedGiftCardAmount || 0).toFixed(2)} €
              </p>
              <p>
                Total Price After Gift Card:
                {(currentDiscountedPrice || 0).toFixed(2)} €
              </p>
            </div>
          </div>
        </form>
      ) : (
        <div className="invoice-container">
          <p>Your order has been placed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
