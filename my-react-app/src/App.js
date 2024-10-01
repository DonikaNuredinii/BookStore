import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./Main/Pages";
import Dashboard from "./Main/Dashboard";
import { jwtDecode } from "jwt-decode";

function App() {
  const [toggle, setToggle] = useState(true);

  const [isAdmin, setIsAdmin] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime && decodedToken.RolesID === "3";
      } catch (error) {
        console.error("Error decoding token", error);
        localStorage.removeItem("token");
        return false;
      }
    }
    return false;
  });

  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const checkIfAdmin = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp > currentTime && decodedToken.RolesID === "3") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Error decoding token", error);
          localStorage.removeItem("token");
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    };

    window.addEventListener("storage", checkIfAdmin);
    return () => window.removeEventListener("storage", checkIfAdmin);
  }, []);

  

  return (
    <div className="container-fluid custom-bg min-vh-100">
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route
          path="/dashboard/*"
          element={
            isAdmin ? (
              <Dashboard toggle={toggle} Toggle={Toggle} />
            ) : (
              <Navigate to="/" account />
            )
          }
        />
    
      </Routes>
    </div>
  );
}

export default App;
