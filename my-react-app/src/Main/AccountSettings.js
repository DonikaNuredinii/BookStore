import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    username: "",
  });
  const [formErrors, setFormErrors] = useState({});
  // const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://localhost:7061/api/User/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phoneNumber: response.data.phoneNumber,
          email: response.data.email,
          username: response.data.username,
        });
      })
      .catch((error) => {
        toast.error("Error fetching user data: " + error.message);
      });
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?\d{1,4}-?\d{1,4}-?\d{1,9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/;
    return nameRegex.test(name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const errors = {};

    if (!validateName(userData.firstName)) {
      errors.firstName = "First name should start with a capital letter.";
    }
    if (!validateName(userData.lastName)) {
      errors.lastName = "Last name should start with a capital letter.";
    }
    if (!validatePhoneNumber(userData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number.";
    }
    if (!validateEmail(userData.email)) {
      errors.email = "Invalid email address.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const token = localStorage.getItem("token");

    axios
      .put("https://localhost:7061/api/User/update", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Account updated successfully!");
      })
      .catch((error) => {
        toast.error("Error updating account: " + error.message);
      });
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login"); // Redirect to login page
  // };

  return (
    <div className="container-accountsettings">
      <div className="sidebar-acc">
        <a href="#">Profile</a>
        <a href="#">Notifications</a>
        <a href="#">E-books</a>
        <a href="/account" >Log Out</a> {/* Logout link */}
      </div>
      <div className="middlepart-acc">
        {/* Add content if needed */}
      </div>
      <div className="form-containerA">
        <h1>My Profile</h1>
        <form onSubmit={handleUpdate} className="accountsettings">
          <div className="inputs-logIn-acc">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.firstName}</div>
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.lastName}</div>
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.phoneNumber}</div>
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.email}</div>
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              disabled // Disable editing username
            />
          </div>
          <button type="submit" className="acc-button1">
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
