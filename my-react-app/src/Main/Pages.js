import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import Buttons from "../Components/Buttons";
import Account from "../Main/Account";
import Categories from "../Main/Categories";
import GiftCard from "../Main/GiftCard";
import Cart from "../Main/Cart"; // Import Cart component
import Accessories from "./Accessories";
import AuthorList from "./AuthorList";
import CheckoutForm from "./CheckoutForm";

function Pages() {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <NavbarHome Toggle={Toggle} />
      {location.pathname !== "/account" && (
        <Buttons isSticky={false} cartCount={cart.length} />
      )}
      <Routes>
        <Route
          path="/*"
          element={
            <HomePage addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route path="/account" element={<Account />} />
        <Route
          path="/categories"
          element={
            <Categories addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route path="/giftCard" element={<GiftCard addToCart={addToCart} />} />{" "}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />{" "}
        <Route path="/CheckoutForm" element={<CheckoutForm />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/AuthorList" element={<AuthorList />} />
      </Routes>
      <Footer Toggle={Toggle} />
    </div>
  );
}

export default Pages;
