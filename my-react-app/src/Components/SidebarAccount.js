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
    window.dispatchEvent(new Event("storage"));
    navigate("/account");
  };

  return (
    <div className="sidebar-acc">
      <Link to="/account-settings" className="linkacc">
        Profile
      </Link>
      <Link to="/update-password" className="linkacc">
        Change Password
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
