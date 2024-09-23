import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import Sidebar from "../Components/Sidebar";
import Books from "../Dashboard-Pages/Books";
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
import Quotes from "../Dashboard-Pages/Quotes";
import AddQuotes from "../Components/AddQuotes";
import Events from "../Dashboard-Pages/Event";
import AddEvent from "../Components/AddEvent";
import Ebooks from "../Dashboard-Pages/Ebooks";
import AddEbooks from "../Components/AddEbooks";
import SearchBar from "../Components/SearchBar";
import Statistics from "../Dashboard-Pages/Statistics";

function Dashboard() {
  const [toggle, setToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const Toggle = () => {
    setToggle(!toggle);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const isAddComponent = () => {
    return (
      location.pathname.includes("/add") || location.pathname === "/dashboard"
    );
  };

  return (
    <div className="container-fluid custom-bg min-vh-100 position-relative">
      <div className="row">
        {/* Sidebar */}
        {toggle && (
          <div className="col-4 col-md-2 min-vh-100 sidebarColor-bg position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}

        <div className={toggle ? "col-8 col-md-10" : "col-12"}>
          <Navbar Toggle={Toggle} />
          {!isAddComponent() && <SearchBar onSearch={handleSearch} />}
          <Routes>
            <Route path="add-categories" element={<AddCategories />} />
            <Route
              path="Categories"
              element={<Categories searchQuery={searchQuery} />}
            />
            <Route path="add-user" element={<AddUser />} />
            <Route path="User" element={<User searchQuery={searchQuery} />} />
            <Route path="add-books" element={<AddBooks />} />
            <Route path="/add-Accessories" element={<AddAccessories />} />
            <Route path="/add-Authors" element={<AddAuthors />} />
            <Route
              path="/Books"
              element={<Books searchQuery={searchQuery} />}
            />
            <Route
              path="/Author"
              element={<Author searchQuery={searchQuery} />}
            />
            <Route
              path="/Accessories"
              element={<Accessories searchQuery={searchQuery} />}
            />
            <Route path="/add-Orders" element={<AddOrders />} />
            <Route
              path="Orders"
              element={<Orders searchQuery={searchQuery} />}
            />
            <Route path="/add-contact" element={<AddContact />} />
            <Route
              path="ContactUs"
              element={<ContactUs searchQuery={searchQuery} />}
            />
            <Route
              path="/GiftCards"
              element={<GiftCards searchQuery={searchQuery} />}
            />
            <Route path="/add-GiftCard" element={<AddGiftCard />} />
            <Route
              path="/Quotes"
              element={<Quotes searchQuery={searchQuery} />}
            />
            <Route
              path="/Event"
              element={<Events searchQuery={searchQuery} />}
            />
            <Route path="/add-Event" element={<AddEvent />} />
            <Route path="/add-Quotes" element={<AddQuotes />} />
            <Route
              path="/Ebooks"
              element={<Ebooks searchQuery={searchQuery} />}
            />
            <Route path="/add-Ebooks" element={<AddEbooks />} />
            <Route path="/" element={<Statistics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
