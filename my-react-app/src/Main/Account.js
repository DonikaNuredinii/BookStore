import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState('');
  const [selectedRole, setSelectedRole] = useState(2);

  const [formData, setFormData] = useState({
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleSave = () => {
    // Form validation
    if (!firstName || !lastName || !email || !username || !password) {
      toast.error("Please fill out all required fields.");
      return;
    }
  };

  
  const signUpLink = () => {
    setAction('active');
}

const logInLink = () => {
    setAction('');
}

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
      .post("https://localhost:7061/api/User", userData)
      .then((response) => {
        toast.success("User registered successfully!");
        clearForm();
      })
      .catch((error) => {
        toast.error("Error registering user: " + error.message);
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
        <div className="form-box logIn">
          <form className="accountform">
            <h1>Log In</h1>
            <div className="inputs-logIn">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="inputs-logIn">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="acc-button">
              Log In
            </button>
            <div className="signUp-link">
              <p>
                Do you have an account? <a href="#" onClick={signUpLink}>Sign Up</a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleSubmit} className="accountform">
            <h1>Sign Up</h1>
            <div className="inputs-logIn-row">
              <input
                type="text"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Surname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="inputs-logIn">
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="inputs-logIn">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputs-logIn">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                I agree to the terms & conditions
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