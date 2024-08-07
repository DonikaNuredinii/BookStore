import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

// Import images
const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const Cart = ({ cart = [], setCart }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setQuantities(storedCart.map(() => 1));
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Fetch discount from backend
    const fetchDiscount = async () => {
      try {
        const response = await fetch("https://localhost:7061/api/Discounts");
        if (response.ok) {
          const data = await response.json();
          setDiscount(data.discountAmount || 0);
        } else {
          console.error("Failed to fetch discount");
        }
      } catch (error) {
        console.error("Error fetching discount:", error);
      }
    };

    fetchDiscount();
  }, []);

  const handleQuantityChange = (index, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(quantity + delta, 1) : quantity
      )
    );
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

  const handleCheckout = async () => {
    const cartData = cart.map((item, index) => ({
      quantity: quantities[index],
      bookId: item.book ? item.book.id : null,
      accessoriesId: item.accessories ? item.accessories.id : null,
      giftCardId: item.giftCard ? item.giftCard.id : null,
      image: item.image || "", // Include image URL
      price: item.price || 0, // Include price
      title: item.title || "No Title", // Include title
    }));

    const totalPrice = cartData.reduce(
      (acc, item, index) => acc + item.price * quantities[index],
      0
    );

    const discountedPrice = totalPrice * (1 - discount);

    try {
      const response = await fetch("https://localhost:7061/api/CartItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
      });

      if (response.ok) {
        console.log("Checkout successful!");
        navigate("/CheckoutForm", {
          state: {
            cartData: cartData,
            totalPrice: totalPrice,
            discountedPrice: discountedPrice,
            discount: discount,
          },
        });
        setCart([]);
        setQuantities([]);
      } else {
        const errorDetails = await response.text();
        console.error("Error checking out:", response.status);
        console.log("Error details:", errorDetails);
      }
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    const newQuantities = [
      ...quantities.slice(0, index),
      ...quantities.slice(index + 1),
    ];
    setCart(newCart);
    setQuantities(newQuantities);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item, index) => total + item.price * quantities[index],
      0
    );
  };

  const calculateDiscountedPrice = () => {
    const totalPrice = calculateTotalPrice();
    return totalPrice * (1 - discount);
  };

  return (
    <div className="cart-container">
      <div className="top-Cart">
        <h1>Your cart</h1>
        <Link to="/" className="continue-shopping-cart">
          Continue Shopping
        </Link>
      </div>
      <div className="cart-items-name">
        <p>Product</p>
        <p>Quantity</p>
        <p>Total Price</p>
      </div>
      {cart.map((item, index) => {
        const price = item.price || 0;
        return (
          <div key={index} className="cart-item">
            <img src={preprocessImagePath(item.image)} alt={item.title} />
            <div className="items-cart-screen">
              <div className="item-details">
                <p>{item.title || "No Title"}</p>
                <p>€{price.toFixed(2)}</p>
              </div>
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(index, -1)}
                  disabled={quantities[index] <= 1}
                >
                  -
                </button>
                <span>{quantities[index]}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>
                  +
                </button>
              </div>
            </div>
            <MdDelete
              className="delete-icon"
              onClick={() => removeFromCart(index)}
            />
            <p className="total-price">
              €{(price * quantities[index]).toFixed(2)}
            </p>
          </div>
        );
      })}
      <div className="cart-summary">
        <p>
          {discount > 0 &&
            `Discount (${discount * 100}%): -€${(
              calculateTotalPrice() * discount
            ).toFixed(2)}`}
        </p>
        <p>Estimated total: €{calculateDiscountedPrice().toFixed(2)} EUR</p>
        <p>
          Tax included. <a href="#shipping">Shipping</a> and discounts
          calculated at checkout.
        </p>
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className="checkout-button"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
