import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pages from "./Main/Pages";
import Dashboard from "./Main/Dashboard";

function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid custom-bg min-vh-100">
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route
          path="/dashboard/*"
          element={<Dashboard toggle={toggle} Toggle={Toggle} />}
        />
      </Routes>
    </div>
  );
}

export default App;
