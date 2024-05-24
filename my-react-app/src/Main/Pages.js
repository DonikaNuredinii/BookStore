import { useState } from "react";
import Account from "../Main/Account";
import Categories from "../Main/Categories";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
function Pages() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <NavbarHome Toggle={Toggle} />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default Pages;
