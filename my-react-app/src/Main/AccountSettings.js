import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from 'jwt-decode';



const AccountSettings = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    username: "",
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
        // If the token is invalid or malformed, remove it from localStorage
        localStorage.removeItem("token");
        return false;
      }
    } else {
      console.log("No token found in localStorage");
      return false;
    }
  };
  
  // Usage
  const isTokenValid = checkTokenValidity();
  console.log("Is token valid?", isTokenValid);

  useEffect(() => {
    const isTokenValid = checkTokenValidity();
  
    if (isTokenValid) {
      const userId = localStorage.getItem("userID");
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
            });
          })
          .catch((error) => {
            toast.error("Error fetching user data: " + error.message);
          });
      } else {
        toast.error("No user ID found.");
      }
    } else {
      // Redirect the user to the login page if the token is not valid
      window.location.href = "/login";
    }
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


  const handleLogout = () => {
    // Remove user-related data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
  
    // Optionally show a notification
    toast.success("Logged out successfully!");
  
    // Redirect to the login page or homepage
    window.location.href = "/account";
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
      .put(`https://localhost:7061/api/User/${localStorage.getItem("userID")}`, userData, {
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

  return (
    <div className="container-accountsettings">
      <div className="sidebar-acc">
        <a href="#">Profile</a>
        <a href="#">Notifications</a>
        <a href="#">E-books</a>
        <a href="#" onClick={handleLogout}>Log Out</a>
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
              disabled
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
