import React from "react";
import "../App.css";

const Invoice = ({ orderDetails, cartData }) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <div className="invoice-logo">
          <img src="/path/to/logo.png" alt="Logo" />
          <h1>purple daisy photography</h1>
        </div>
        <div className="invoice-info">
          <p>INVOICE</p>
          <p>Invoice Number: {orderDetails.invoiceNumber}</p>
          <p>Invoice Date: {currentDate}</p>
          <p>Payment Due: {orderDetails.paymentDue}</p>
          <p>Amount Due (USD): ${orderDetails.totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="invoice-bill-to">
        <p>BILL TO</p>
        <p>
          {orderDetails.firstName} {orderDetails.lastName}
        </p>
        <p>{orderDetails.address}</p>
        <p>
          {orderDetails.city}, {orderDetails.country}
        </p>
        <p>{orderDetails.email}</p>
        <p>{orderDetails.phoneNumber}</p>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Photo Services</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.rate.toFixed(2)}</td>
              <td>${(item.quantity * item.rate).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-summary">
        <div className="invoice-summary-item">
          <p>Subtotal:</p>
          <p>${orderDetails.subtotal.toFixed(2)}</p>
        </div>
        <div className="invoice-summary-item">
          <p>HST 13%:</p>
          <p>${orderDetails.tax.toFixed(2)}</p>
        </div>
        <div className="invoice-summary-item total">
          <p>Total:</p>
          <p>${orderDetails.totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="invoice-notes">
        <p>Notes</p>
        <p>
          We had a great time photographing your wedding! The weather held up
          and the outdoor shots were superb. We appreciate your business, and
          wish you a wonderful life together.
        </p>
      </div>
    </div>
  );
};

export default Invoice;
