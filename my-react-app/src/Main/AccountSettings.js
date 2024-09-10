import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userID, setUserId] = useState(localStorage.getItem("userID"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !userID) {
      navigate("/account"); // or redirect to the login page
      return;
    }

    const checkTokenValidity = async () => {
      try {
        const decodedToken = jwtDecode(token);
        const isExpired = Date.now() >= decodedToken.exp * 1000;

        if (isExpired) {
          toast.error("Token has expired. Please log in again.");
          navigate("/login");
        }
      } catch (error) {
        toast.error("Failed to decode token.");
        navigate("/login");
      }
    };

    checkTokenValidity();
  }, [token, userID, navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7061/api/User/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phoneNumber: response.data.phoneNumber,
          email: response.data.email,
        });
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response ? error.response.data : error.message
        );
        toast.error("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [userID]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { firstName, lastName, phoneNumber, email } = userData;

    const errors = {};

    if (!firstName) errors.firstName = "First name is required.";
    if (!lastName) errors.lastName = "Last name is required.";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required.";
    if (!email) errors.email = "Email is required.";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      await axios.put(`https://localhost:7061/api/User/${userID}`, {
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    navigate("/account");
  };

  return (
    <div className="container-accountsettings">
      <ToastContainer />
      <div className="sidebar-acc">
        <a href="#">Profile</a>
        <a href="#">Notifications</a>
        <a href="#">E-books</a>
        <a href="#" onClick={handleLogout}>
          Log Out
        </a>
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
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.phoneNumber}</div>
          </div>
          <div className="inputs-logIn-acc">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <div className="error-message">{formErrors.email}</div>
          </div>
          <button type="submit" className="acc-button">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
