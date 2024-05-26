import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";




const Account = ({ onSignUpSuccess }) => {

    const signUpLink = () => {
        setAction('active');
      };
    
      const logInLink = () => {
        setAction('');
      };
    const [action, setAction] = useState("");
        
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false, // Assuming agreeTerms is a boolean field
      });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = () => {
    axios
      .get(`https://localhost:7061/api/User`)
      .then((result) => {
        setFormData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const userData = {
    FirstName: formData.firstName,
    LastName: formData.lastName,
    PhoneNumber: formData.phoneNumber,
    Email: formData.email,
    Username: formData.username,
    Password: formData.password,
    confirmPassword: formData.confirmPassword,
    Roles: ['user'],
  };

    axios
      .post(`https://localhost:7061/api/User`, userData)
      .then((response) => {
        // Handle successful response
        console.log("User added successfully:", response.data);
        onSignUpSuccess();

      })
      .catch((error) => {
        console.error("Failed to add user:", error);
        console.log("Detailed error response:", error.response);
        toast.error("Failed to add user: " + error.message);
        
        // Log validation errors
        console.log("Validation errors:", error.response.data.errors);
      });
      
  
      
   
  };

  

    return (
        <div className="container-logIn">
            <div className={`wrapper ${action}`}>
                <div className="form-box logIn">
                    <form action="">
                        <h1>Log In</h1>
                        <div className="inputs-logIn">
                            <input type="text" placeholder='Username' required />
                            <FaUser className="icon" />
                        </div>
                        <div className="inputs-logIn">
                            <input type="password" placeholder='Password' required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="acc-button">Log In</button>
                        <div className="signUp-link">
                            <p>Do you have an account? <a href="#" onClick={signUpLink}>Sign Up</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="inputs-logIn-row">
              <input type="text" placeholder="Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <input type="text" placeholder="Surname" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="inputs-logIn">
              <input type="text" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div className="inputs-logIn">
              <input type="email" placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="inputs-logIn">
              <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="inputs-logIn">
              <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="inputs-logIn">
              <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
                I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="acc-button" >Sign Up</button>
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
}

export default Account;
