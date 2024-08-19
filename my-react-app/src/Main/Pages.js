import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import Buttons from "../Components/Buttons";
import Account from "../Main/Account";
import Categories from "../Main/Categories";
import GiftCard from "../Main/GiftCard";
import Cart from "../Main/Cart";
import Accessories from "./Accessories";
import AuthorList from "./AuthorList";
import CheckoutForm from "./CheckoutForm";
import AuthorDetails from "./AuthorDetails";
import Invoice from "./Invoice";
import EbookList from "./EbookList";
import EbookDetails from "./EbookDetails";
import BookDetails from "./BookDetails";

function Pages() {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
        <Buttons isSticky={isSticky} cartCount={cart.length} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/bookDetails/:bookID"
          element={<BookDetails addToCart={addToCart} />}
        />
        <Route path="/account" element={<Account />} />
        <Route
          path="/categories"
          element={
            <Categories addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route path="/giftCard" element={<GiftCard addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route
          path="/accessories"
          element={<Accessories addToCart={addToCart} />}
        />
        <Route path="/author-list" element={<AuthorList />} />
        <Route
          path="/AuthorDetails/:authorID"
          element={<AuthorDetails addToCart={addToCart} />}
        />
        <Route path="/ebooks" element={<EbookList addToCart={addToCart} />} />
        <Route path="/EbookDetails/:id" element={<EbookDetails />} />
      </Routes>
      <Footer Toggle={Toggle} />
    </div>
  );
}

export default Pages;
