import React, { useState } from "react";
import "../App.css";

function ShoppingCart() {
  const [items, setItems] = useState([
    {
      name: "Red Printed T-Shirt",
      price: 50.0,
      quantity: 1,
    },
    {
      name: "HRX Sports Shoes",
      price: 75.0,
      quantity: 1,
    },
    {
      name: "HRX Gray Trackpants",
      price: 75.0,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = newQuantity;
    setItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.175; // Assuming 17.5% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>
      <table className="shopping-cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value, 10))
                  }
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="shopping-cart-summary">
        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
        <p>Tax: ${calculateTax().toFixed(2)}</p>
        <p>Total: ${calculateTotal().toFixed(2)}</p>
      </div>
      <button className="shopping-cart-checkout-button">
        Proceed to checkout
      </button>
    </div>
  );
}

export default ShoppingCart;
