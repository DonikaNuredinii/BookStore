import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../App.css";
import { CiCreditCard1 } from "react-icons/ci";
import { LuPackageCheck } from "react-icons/lu";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const {
    cartData = [],
    discountedPrice = 0,
    discount = 0,
  } = location.state || {};

  // Calculate totalPrice dynamically
  // Calculate totalPrice dynamically
  const totalPrice = cartData.reduce((total, item) => {
    return total + (item.price || 0) * (item.quantity || 0); // Default to 0 if item.price or item.quantity is undefined
  }, 0);

  const [countries, setCountries] = useState([]);
  const [giftCardCode, setGiftCardCode] = useState("");
  const [appliedGiftCardAmount, setAppliedGiftCardAmount] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    getOrderUpdatesOnWhatsApp: false,
    countryID: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    phoneNumber: "",
    paymentMethod: "creditCard",
    payment: {
      amount: totalPrice, // Use totalPrice here
      lastFourDigits: "",
      transactionID: "",
    },
    orderDetails: cartData.map((item) => ({
      totalPrice: item.price * item.quantity, // Calculate total price per item
      invoiceDate: new Date().toISOString(),
      orderShipDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
      invoiceNumber: `INV${Math.floor(Math.random() * 1000)}`,
      cartItemId: item.id,
    })),
    discountID: null,
    giftCardID: null,
  });
  const [currentDiscountedPrice, setCurrentDiscountedPrice] =
    useState(discountedPrice);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  const applyGiftCard = async () => {
    setLoading(true);
    setError("");

    const { giftCardCode } = formData;

    if (!giftCardCode) {
      setError("Please enter a gift card code.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7061/api/GiftCard/apply",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(giftCardCode),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText);
        setLoading(false);
        return;
      }

      const amount = await response.json(); // Assuming the amount is returned directly
      const giftCardIDResponse = await fetch(
        `https://localhost:7061/api/GiftCard?code=${giftCardCode}`
      );

      const giftCardData = await giftCardIDResponse.json();

      if (!giftCardData || !giftCardData.GiftCardID) {
        setError("Gift card not found.");
        setLoading(false);
        return;
      }

      setAppliedGiftCardAmount(amount);
      const newTotalPrice = totalPrice - amount;
      setFormData((prev) => ({
        ...prev,
        payment: { ...prev.payment, amount: newTotalPrice },
        giftCardID: giftCardData.GiftCardID,
      }));

      setSuccessMessage("Gift card applied successfully!");
      setLoading(false);
    } catch (error) {
      setError("Error applying gift card.");
      console.error("Error applying gift card:", error);
      setLoading(false);
    }
  };
  const displayPrice = (price) => {
    return price ? price.toFixed(2) : "0.00"; // Safe check
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
  const handleCheckout = async () => {
    // Ensure that Stripe and Elements are available
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    // Prepare the data for the order creation
    const orderData = {
      OrderDate: new Date().toISOString(),
      Address: formData.address,
      City: formData.city,
      CountryID: formData.countryID,
      ZipCode: formData.postalCode,
      DiscountID: formData.discountID || null,
      GiftCardID: formData.giftCardID || null, // Optional
      CartItems: cartData.map((item) => ({
        BookId: item.bookId || null, // Ensure correct ID types
        AccessoriesID: item.accessoriesID || null,
        GiftCardId: item.giftCardId || null,
        Quantity: item.quantity,
      })),
    };

    try {
      // Step 1: Create the order
      const orderResponse = await fetch("https://localhost:7061/api/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData), // Send order details to backend
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create order");
      }

      const createdOrder = await orderResponse.json(); // Get created order response

      // Step 2: If payment is by credit card, initiate Stripe payment
      if (formData.paymentMethod === "creditCard") {
        const paymentResponse = await fetch(
          "https://localhost:7061/api/Payments", // Backend payment endpoint
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              OrdersId: createdOrder.OrdersId,
              Amount: currentDiscountedPrice, // Pass the discounted total price
              PaymentMethod: "creditCard",
            }),
          }
        );

        if (!paymentResponse.ok) {
          throw new Error("Failed to process payment");
        }

        const paymentIntentData = await paymentResponse.json(); // Get payment intent data
        const cardElement = elements.getElement(CardElement); // Get CardElement instance

        // Confirm the payment using Stripe
        const paymentResult = await stripe.confirmCardPayment(
          paymentIntentData.clientSecret,
          {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                address: {
                  line1: formData.address,
                  city: formData.city,
                  postal_code: formData.postalCode,
                  country: formData.countryID,
                },
              },
            },
          }
        );

        if (paymentResult.error) {
          setError(`Payment failed: ${paymentResult.error.message}`);
        } else if (paymentResult.paymentIntent.status === "succeeded") {
          setSuccessMessage("Payment successful! Your order has been placed.");
        }
      } else if (formData.paymentMethod === "cashOnDelivery") {
        // Step 3: Handle Cash on Delivery
        setOrderDetails(createdOrder); // Store order details if Cash on Delivery
        setSuccessMessage(
          "Order placed! Payment will be collected on delivery."
        );
      }
    } catch (error) {
      setError(error.message); // Catch and display any errors
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderPayload = {
      ordersId: 0, // Ensure ordersId is initialized or auto-generated in backend
      orderDate: new Date().toISOString(),
      address: formData.address,
      city: formData.city,
      countryID: formData.countryID,
      zipCode: formData.postalCode,
      discountID: formData.discountID || null, // Use null if not set
      giftCardID: formData.giftCardID || null, // Use null if not set
      payment: {
        amount:
          totalPrice - (formData.giftCardID ? formData.giftCardAmount : 0), // Final amount after discount
        paymentMethod: formData.paymentMethod,
        lastFourDigits: "", // Set this after payment processing
        transactionID: "", // Set this after payment processing
      },
      orderDetails: formData.orderDetails,
    };

    try {
      const response = await fetch("https://localhost:7061/api/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (response.ok) {
        const data = await response.json();
        setOrderDetails(data); // Handle successful order creation
        setSuccessMessage("Order placed successfully!");
      } else {
        throw new Error("Failed to create order");
      }
    } catch (err) {
      setError("An error occurred while placing the order. Please try again.");
    } finally {
      setLoading(false);
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
                placeholder="Email or mobile phone number"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <div className="whatsapp-update">
                <input
                  type="checkbox"
                  name="getOrderUpdatesOnWhatsApp"
                  id="whatsapp"
                  className="form-checkbox"
                  checked={formData.getOrderUpdatesOnWhatsApp}
                  onChange={handleChange}
                />
                <label htmlFor="whatsapp">Get order updates on WhatsApp</label>
              </div>
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
                name="postalCode"
                placeholder="Postal code"
                className="form-input"
                value={formData.postalCode}
                onChange={handleChange}
                required
                autoComplete="postal-code"
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
              <div className="save-info">
                <input
                  type="checkbox"
                  name="saveInfo"
                  id="save-info"
                  className="form-checkbox"
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
                      <div className="save-payment-info">
                        <input
                          type="checkbox"
                          name="savePaymentInfo"
                          id="savePaymentInfo"
                          className="form-checkbox"
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
                value={formData.giftCardCode}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={applyGiftCard}
                className="apply-gift-card-button"
                disabled={loading}
              >
                Apply Gift Card
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
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
                        {item.quantity} x €
                        {item.price ? item.price.toFixed(2) : "0.00"}
                      </p>
                    </div>
                    <div className="item-total">
                      €
                      {item.price
                        ? (item.quantity * item.price).toFixed(2)
                        : "0.00"}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="summary-details">
              <p>Subtotal: €{(totalPrice || 0).toFixed(2)}</p>
              <p>Total Price: €{(totalPrice || 0).toFixed(2)}</p>
              <p>
                Discounted Price: €{(currentDiscountedPrice || 0).toFixed(2)}
              </p>
              <p>
                Gift Card Applied: €{(formData.giftCardAmount || 0).toFixed(2)}
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
