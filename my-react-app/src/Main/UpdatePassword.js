import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarAccount from "../Components/SidebarAccount";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const validatePassword = (password) => password.length >= 6;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const errors = {};

    if (!passwordData.currentPassword) {
      errors.currentPassword = "Please enter your current password.";
    }
    if (!validatePassword(passwordData.newPassword)) {
      errors.newPassword = "New password must be at least 6 characters long.";
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");

    const updatePayload = {
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
      confirmPassword: passwordData.confirmPassword,
    };

    axios
      .put(
        `https://localhost:7061/api/User/${userId}/update-password`,
        updatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Password updated successfully!", { autoClose: 2000 });
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        navigate("/account-settings");
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        if (error.response && error.response.status === 400) {
          toast.error("Invalid current password.", { autoClose: 2000 });
        } else {
          toast.error("Failed to update password.", { autoClose: 2000 });
        }
      });
  };

  return (
    <div className="container-accountsettings">
      <SidebarAccount />

      <div className="form-containerA">
        <h1>Update Password</h1>
        <form onSubmit={handleUpdatePassword} className="accountsettings">
          <div className="inputs-logIn-acc">
            <input
              type="password"
              placeholder="Current Password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handleInputChange}
            />
            {formErrors.currentPassword && (
              <div className="error-message">{formErrors.currentPassword}</div>
            )}
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleInputChange}
            />
            {formErrors.newPassword && (
              <div className="error-message">{formErrors.newPassword}</div>
            )}
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="password"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handleInputChange}
            />
            {formErrors.confirmPassword && (
              <div className="error-message">{formErrors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="acc-button1">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
