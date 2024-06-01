import React, { useState } from "react";
import Account from "../Main/Account";
import Categories from "../Main/Categories";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import Buttons from "../Components/Buttons";
import GiftCard from "../Main/GiftCard";
import Cart from "../Main/Cart";
import Accessories from "./Accessories";
import AuthorList from "./AuthorList";
import CheckoutForm from "./CheckoutForm";

function Pages() {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(true);
  const location = useLocation();

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <NavbarHome Toggle={Toggle} />
      {location.pathname !== "/account" && <Buttons isSticky={isSticky} />}
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/giftCard" element={<GiftCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CheckoutForm" element={<CheckoutForm />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/AuthorList" element={<AuthorList />} />
      </Routes>
      <Footer Toggle={Toggle} />
    </div>
  );
}

export default Pages;
