import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
// import Home from "./Home";
// import Books from "./Dashboard-Pages/Books";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import AddBooks from "./Components/AddBooks";
// import AddCategories from "./Components/AddCategories";
// import Categories from "./Dashboard-Pages/Categories";
// import AddStaff from "./Components/AddStaff";
// import Staff from "./Dashboard-Pages/Staff";
// import Accessories from "./Dashboard-Pages/Accessories";
// import AddAccessories from "./Components/AddAccessories";
// import AddAuthors from "./Components/AddAuthors";
// import Authors from "./Dashboard-Pages/Authors";


function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid custom-bg min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 min-vh-100 sidebarColor-bg position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          {/* <Navbar Toggle={Toggle} /> */}
          <Routes>
            {/* <Route path="/" element={<Home Toggle={Toggle} />} /> */}
            {/* <Route path="/add-staff" element={<AddStaff />} />
            <Route path="/add-books" element={<AddBooks />} />
            <Route path="/add-categories" element={<AddCategories />} />
            <Route path="/add-Accessories" element={<AddAccessories />} />
            <Route path="/add-Authors" element={<AddAuthors />} />

            <Route path="/Staff" element={<Staff />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Authors" element={<Authors />} />
            <Route path="/Accessories" element={<Accessories />} /> */}
            {/* <Route path="/Authors" element={<Authors />} /> */}
          </Routes>
        </div>
      </div>
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
