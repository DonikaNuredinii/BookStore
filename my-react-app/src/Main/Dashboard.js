import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import Books from "../Dashboard-Pages/Books";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import AddBooks from "../Components/AddBooks";
import AddCategories from "../Components/AddCategories";
import Categories from "../Dashboard-Pages/Categories";
import AddUser from "../Components/AddUser";
import User from "../Dashboard-Pages/User";
import Accessories from "../Dashboard-Pages/Accessories";
import AddAccessories from "../Components/AddAccessories";
import AddAuthors from "../Components/AddAuthors";
import Author from "../Dashboard-Pages/Author";
import AddOrders from "../Components/AddOrders";
import Orders from "../Dashboard-Pages/Orders";
import AddContact from "../Components/AddContact";
import ContactUs from "../Dashboard-Pages/ContactUs";
import GiftCards from "../Dashboard-Pages/GiftCards";
import AddGiftCard from "../Components/AddGiftCard";
function Dashboard() {
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
          <Navbar Toggle={Toggle} />
          <Routes>
            <Route path="add-categories" element={<AddCategories />} />

            <Route path="Categories" element={<Categories />} />
            {/* <Route path="/" element={<Home Toggle={Toggle} />} /> */}
            <Route path="add-user" element={<AddUser />} />
            <Route path="User" element={<User />} />
            <Route path="add-books" element={<AddBooks />} />
            <Route path="/add-Accessories" element={<AddAccessories />} />
            <Route path="/add-Authors" element={<AddAuthors />} />

            <Route path="/Books" element={<Books />} />
            <Route path="/Author" element={<Author />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/add-Orders" element={<AddOrders />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="/GiftCards" element={<GiftCards />} />
            <Route path="/add-GiftCard" element={<AddGiftCard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
