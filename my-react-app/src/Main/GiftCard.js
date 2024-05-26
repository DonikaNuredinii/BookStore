import React, { useState } from "react";
import "../App.css";

const GiftCard = () => {
  const [amount, setAmount] = useState(25);
  const [selectedDesign, setSelectedDesign] = useState("design1"); // Set initial design
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.target.value, 10));
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
    console.log("Sending gift card details:", {
      amount,
      selectedDesign,
      recipientName,
      recipientEmail,
      message,
      senderName,
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
      <div className="form">
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
