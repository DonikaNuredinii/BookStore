import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";

const GiftCard = ({ addToCart }) => {
  const [amount, setAmount] = useState(0);
  const [selectedDesign, setSelectedDesign] = useState("design1");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.target.value, 10));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRecipientNameChange = (event) => {
    setRecipientName(event.target.value);
  };

  const handleRecipientEmailChange = (event) => {
    setRecipientEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSenderNameChange = (event) => {
    setSenderName(event.target.value);
  };

  const selectDesign = (design) => {
    setSelectedDesign(design);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);

    const generatedCode =
      "GC" + Math.random().toString(36).substr(2, 9).toUpperCase();

    const giftCardDetails = {
      code: generatedCode,
      amount,
      selectedDesign,
      recipientName,
      recipientEmail,
      message,
      senderName,
      userID: 2,
    };

    const giftCardProduct = {
      title: "Gift Card",
      price: amount,
      image: getDesignImageUrl(selectedDesign),
    };

    addToCart(giftCardProduct);

    fetch("https://localhost:7061/api/GiftCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(giftCardDetails),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(JSON.stringify(error));
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Gift card created:", data);
      })
      .catch((error) => {
        console.error("Error creating gift card:", error.message);
      });
  };

  return (
    <div className="gift-card-container">
      <div className="card-container">
        <h2>Virtual Gift Card</h2>
        <div className="design-options">
          {/* Design 1 */}
          <button onClick={() => selectDesign("design1")}>
            <img
              className="design-preview"
              src={require("../Images/gift1.png")}
              alt="Design 1 Preview"
            />
          </button>

          {/* Design 2 */}
          <button onClick={() => selectDesign("design2")}>
            <img
              className="design-preview"
              src={require("../Images/gift2.png")}
              alt="Design 2 Preview"
            />
          </button>

          {/* Design 3 */}
          <button onClick={() => selectDesign("design3")}>
            <img
              className="design-preview"
              src={require("../Images/gift3.png")}
              alt="Design 3 Preview"
            />
          </button>
        </div>
        {selectedDesign && (
          <div
            className="gift-card"
            style={{
              backgroundImage: `url(${getDesignImageUrl(selectedDesign)})`,
            }}
          >
            <div className="gift-card-details">
              <p>From: {senderName}</p>
              <p>To: {recipientName}</p>
              <p>Amount: ${amount}.00</p>
              <p>Message: {message}</p>
            </div>
          </div>
        )}
      </div>
      <div className="form-gift">
        <h2>Amount</h2>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <h2>Recipient info</h2>
        <label htmlFor="recipient-name">Name:</label>
        <input
          type="text"
          id="recipient-name"
          value={recipientName}
          onChange={handleRecipientNameChange}
        />
        <label htmlFor="recipient-email">Email:</label>
        <input
          type="email"
          id="recipient-email"
          value={recipientEmail}
          onChange={handleRecipientEmailChange}
        />
        <h2>Your info</h2>
        <label htmlFor="your-name">Name:</label>
        <input
          type="text"
          id="your-name"
          value={senderName}
          onChange={handleSenderNameChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} />
        <button type="submit" onClick={handleSubmit}>
          Add to cart
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal-cart">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p className="item-modal">
              <IoIosCheckmark />
              Item added to cart
            </p>
            <img
              src={getDesignImageUrl(selectedDesign)}
              alt={`Design ${selectedDesign} Preview`}
              className="design-preview-modal"
            />
            <p>Amount: ${amount}</p>
            <div className="view-cart-container">
              <Link to="/cart" className="view-cart-button">
                View Cart
              </Link>
            </div>
            <div className="view-cart-container">
              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getDesignImageUrl = (design) => {
  switch (design) {
    case "design1":
      return require("../Images/gift1.png");
    case "design2":
      return require("../Images/gift2.png");
    case "design3":
      return require("../Images/gift3.png");
    default:
      return null;
  }
};

export default GiftCard;
