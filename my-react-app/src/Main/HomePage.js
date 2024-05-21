import React, { useState } from "react";
import NavbarHome from "./NavbarHome";

import "../App.css";

const HomePage = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return <NavbarHome Toggle={Toggle} />;
};
export default HomePage;
