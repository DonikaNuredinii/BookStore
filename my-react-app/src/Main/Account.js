import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    confirmPassword: "",
    agreeTerms: false,
  });
  const [action, setAction] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

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

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
  };

  const signUpLink = () => {
    setAction("active");
  };

  const logInLink = () => {
    setAction("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!validateName(firstName)) {
      errors.firstName = "First name should start with a capital letter.";
    }
    if (!validateName(lastName)) {
      errors.lastName = "Last name should start with a capital letter.";
    }
    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number.";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid email address.";
    }
    if (!validatePassword(password)) {
      errors.password =
        "Password should be at least 8 characters long and contain at least one uppercase letter and one symbol.";
    }
    if (password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const userData = {
      FirstName: firstName,
      LastName: lastName,
      PhoneNumber: phoneNumber,
      Email: email,
      Username: username,
      Password: password,
      RolesID: 3,
    };

    axios
      .post("https://localhost:7061/api/User/register", userData)
      .then((response) => {
        toast.success("User registered successfully!");
        clearForm();
        logInLink();
      })
      .catch((error) => {
        toast.error("Error registering user: " + error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill out both fields.");
      return;
    }

    axios
      .post("https://localhost:7061/api/User/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const token = response.data.token;
        const userID = response.data.userID;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.userId);
        toast.success("Login successful!");
        navigate("/account-settings");
      })

      .catch((error) => {
        toast.error("Invalid username or password.");
      });
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setUsername("");
    setPassword("");
    setFormData({
      confirmPassword: "",
      agreeTerms: false,
    });
  };

  return (
    <div className="container-logIn">
      <ToastContainer />
      <div className={`wrapper ${action}`}>
        <div className={`form-box logIn ${action === "" ? "active" : ""}`}>
          <form onSubmit={handleLogin} className="accountform">
            <h1>Log In</h1>
            <div className="inputs-logIn">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="inputs-logIn">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="acc-button">
              Log In
            </button>
            <div className="signUp-link">
              <p>
                Do you have an account?{" "}
                <a href="#" onClick={signUpLink}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div
          className={`form-box register ${action === "active" ? "active" : ""}`}
        >
          <form onSubmit={handleSubmit} className="accountform">
            <h1>Sign Up</h1>
            <div className="inputs-logIn-row">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="inputs-login-row-error">
              <div className="error-message">{formErrors.firstName}</div>
              <div className="error-message">{formErrors.lastName}</div>
            </div>
            <div className="inputs-logIn">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="error-message">{formErrors.phoneNumber}</div>
            <div className="inputs-logIn">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="error-message">{formErrors.email}</div>
            <div className="inputs-logIn">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputs-logIn">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="error-message">{formErrors.password}</div>
            <div className="inputs-logIn">
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
            </div>
            <div className="error-message">{formErrors.confirmPassword}</div>
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  name="agreeTerms"
                />{" "}
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            <button type="submit" className="acc-button">
              Sign Up
            </button>
            <div className="signUp-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={logInLink}>
                  Log In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
