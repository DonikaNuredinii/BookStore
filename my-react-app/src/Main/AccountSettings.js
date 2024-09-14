import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    rolesID: null,
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");

    if (token && userId) {
      axios
        .get(`https://localhost:7061/api/User/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData({
            firstName: response.data.firstName || "",
            lastName: response.data.lastName || "",
            phoneNumber: response.data.phoneNumber || "",
            email: response.data.email || "",
            username: response.data.username || "",
            rolesID: response.data.rolesID,
          });
        })
        .catch((error) => {
          toast.error("Error fetching user data.");
          navigate("/account");
        });
    } else {
      navigate("/account");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");

    const updateProfileData = {
      userID: userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      email: userData.email,
      rolesID: userData.rolesID,
    };

    axios
      .put(
        `https://localhost:7061/api/User/${userId}/profile`,
        updateProfileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Profile updated successfully!", { autoClose: 2000 });
      })
      .catch((error) => {
        console.error(
          "Update Error:",
          error.response ? error.response.data : error.message
        );
        toast.error("Error updating profile.", { autoClose: 2000 });
      });
  };

  return (
    <div className="container-accountsettings">
      <SidebarAccount />
      <div className="form-containerA">
        <h1>My Profile</h1>
        <form onSubmit={handleUpdateProfile} className="accountsettings">
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
              type="email"
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
