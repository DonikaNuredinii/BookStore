import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import SidebarAccount from "../Components/SidebarAccount";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const checkTokenValidity = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          console.log("Token expired");
          localStorage.removeItem("token");
          return false;
        } else {
          console.log("Token is valid");
          return true;
        }
      } catch (error) {
        console.error("Error decoding token", error);
        localStorage.removeItem("token");
        return false;
      }
    } else {
      console.log("No token found in localStorage");
      return false;
    }
  };

  useEffect(() => {
    const isTokenValid = checkTokenValidity();

    if (isTokenValid) {
      const userId = localStorage.getItem("userID");
      console.log("Retrieved UserID from localStorage: ", userId);
      const token = localStorage.getItem("token");

      if (userId) {
        axios
          .get(`https://localhost:7061/api/User/${userId}`, {
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
              password: "", // Clear password
            });
          })
          .catch((error) => {
            toast.error("Error fetching user data: " + error.message);
          });
      } else {
        toast.error("No user ID found.");
        navigate("/account");
      }
    } else {
      navigate("/account");
    }
  }, [navigate]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhoneNumber = (phoneNumber) =>
    /^\+?\d{1,4}-?\d{1,4}-?\d{1,9}$/.test(phoneNumber);

  const validateName = (name) => /^[A-Z][a-zA-Z]*$/.test(name);

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
    const userId = localStorage.getItem("userID");

    const { password, ...updateData } = userData;
    const updatePayload = password
      ? { ...updateData, Password: password }
      : updateData;

    if (userId) {
      axios
        .put(`https://localhost:7061/api/User/${userId}`, updatePayload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          toast.success("Account updated successfully!");
        })
        .catch((error) => {
          console.error(
            "Update Error:",
            error.response ? error.response.data : error.message
          );
          toast.error("Error updating account: " + error.message);
        });
    } else {
      toast.error("No user ID found.");
    }
  };

  return (
    <div className="container-accountsettings">
      <SidebarAccount />

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
              disabled
            />
          </div>
          {/* <div className="inputs-logIn-acc">
            <input
              type="password"
              placeholder="New Password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.password}</div>
          </div> */}
          <button type="submit" className="acc-button1">
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
