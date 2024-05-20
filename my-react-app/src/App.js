import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Main/HomePage'; 
import Dashboard from './Main/Dashboard'; 

function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid custom-bg min-vh-100">
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for the homepage */}
        <Route path="/dashboard" element={<Dashboard toggle={toggle} Toggle={Toggle} />} /> {/* Route for the dashboard */}
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
