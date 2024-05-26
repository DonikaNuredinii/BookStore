<<<<<<< Updated upstream
import React, { useState } from "react";
import Account from "../Main/Account";
import Categories from "../Main/Categories";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";



=======
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
import Buttons from "../Components/Buttons";
import Account from "../Main/Account";
import Categories from "../Main/Categories";
import GiftCard from "../Main/GiftCard";
import Cart from "../Main/Cart";
>>>>>>> Stashed changes

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
      </Routes>
      <Footer Toggle={Toggle}/>
    </div>
  );
}

export default Pages;
