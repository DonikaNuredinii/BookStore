import React from "react";
import "../App.css";

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SidebarAccount = () => {
    
    const navigate = useNavigate();
    
    const handleLogout = () => {

      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      toast.success("Logged out successfully!");
      navigate("/account")
    };
  
    return (
      <div className="sidebar-acc">
        <Link to="/account-settings" className="linkacc">Profile</Link>
        <Link to="/" className="linkacc">Notifications</Link>
        <Link to="/" className="linkacc">E-books</Link>
        <button className="linkaccbutton" onClick={handleLogout}>Log Out</button>
      </div>
    );
  };
  
  export default SidebarAccount;