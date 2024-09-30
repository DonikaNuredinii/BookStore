import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SidebarAccount = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("rolesID");
    toast.success("Logged out successfully!");
    navigate("/account"); // Redirect to account page after logout
  };

  return (
    <div className="sidebar-acc">
      <Link to="/account-settings" className="linkacc">
        Profile
      </Link>
      <Link to="/update-password" className="linkacc">
        Change Password
      </Link>
      <Link to="/" className="linkacc">
        Notifications
      </Link>
      <Link to="/ebookLoans" className="linkacc">
        E-books
      </Link>
      <button className="linkaccbutton" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default SidebarAccount;
