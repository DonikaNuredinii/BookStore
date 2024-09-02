import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const Cart = ({ cart = [], setCart }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setQuantities(storedCart.map(() => 1));
  }, [setCart]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch discount from backend
  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const response = await fetch("https://localhost:7061/api/Discounts");
        if (response.ok) {
          const data = await response.json();
          setDiscount(data.discountAmount || 0);
        } else {
          console.error("Failed to fetch discount:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching discount:", error);
      }
    };

    fetchDiscount();
  }, []);

  // Handle quantity change
  const handleQuantityChange = (index, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(quantity + delta, 1) : quantity
      )
    );
  };

  // Preprocess image paths
  const preprocessImagePath = (path) => {
    if (!path) {
      console.warn("Image path is not defined");
      return null;
    }

    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const saveCartItemsToBackend = async (cartData) => {
    // Now sending an array of cart items
    const formattedCartData = cartData.map((item) => ({
      Quantity: item.quantity,
      BookId: item.bookId || null,
      AccessoriesID: item.accessoriesID || null,
      GiftCardId: item.giftCardId || null,
    }));

    console.log("Data being sent to backend:", formattedCartData);

    try {
      const response = await fetch("https://localhost:7061/api/CartItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedCartData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to save cart items: ${errorText}`);
        return false;
      }

      console.log("Cart items saved successfully!");
      return true;
    } catch (error) {
      console.error("Error saving cart items:", error);
      return false;
    }
  };

  // Handle checkout
  const handleCheckout = async () => {
    const cartData = cart.map((item, index) => ({
      cartItemId: item.cartItemId || 0,
      quantity: quantities[index],
      bookId: item.bookId ?? null,
      accessoriesID: item.accessoriesID ?? null,
      giftCardId: item.giftCardId ?? null,
      image: item.image || "",
      price: item.price || 0,
      title: item.title || "No Title",
    }));

    console.log("Cart data prepared for checkout:", cartData);

    const totalPrice = cartData.reduce(
      (acc, item, index) => acc + item.price * quantities[index],
      0
    );

    const discountedPrice = totalPrice * (1 - discount);

    const savedSuccessfully = await saveCartItemsToBackend(cartData);
    if (!savedSuccessfully) {
      alert("Failed to save cart items. Please try again.");
      return;
    }

    navigate("/checkout", {
      state: {
        cartData: cartData,
        totalPrice: totalPrice,
        discountedPrice: discountedPrice,
        discount: discount,
      },
    });
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    const newQuantities = [
      ...quantities.slice(0, index),
      ...quantities.slice(index + 1),
    ];
    setCart(newCart);
    setQuantities(newQuantities);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item, index) => total + item.price * quantities[index],
      0
    );
  };

  // Calculate discounted price
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
            `Discount (${(discount * 100).toFixed(0)}%): -€${(
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
