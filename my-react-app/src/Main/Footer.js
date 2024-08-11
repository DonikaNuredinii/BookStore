import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/;
    return nameRegex.test(name);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const errors = {};

    // if (!name || !email || !message ) {
    //   toast.error("Please fill out all required fields.");
    //   return;
    // }
      

    if (!validateName(name)) {
      errors.name = "First name should start with a capital letter.";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid Email.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const userData = {
      Name: name,
      Email: email,
      Message: message,
    };

    axios
      .post("https://localhost:7061/api/ContactUs", userData)
      .then((response) => {
        toast.success("Contact registered successfully!");
        clearForm();
      })
      .catch((error) => {
        toast.error("Error registering Contact: " + error.message);
      });
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="footer-section">
        <div className="first-partCU">
            <div className="title-footer">
                <h2>READOPIA</h2>
                <h3>Dive into the world of books</h3>
            </div>
        </div>

      <ToastContainer />
      {/* <div className="first-partCU">
        <div className="left-partCU">
          <p className="p1">Say hi to the team</p>
          <h1>Contact Us</h1>
          <form onSubmit={handleSave}>
            <p>
              Feel free to contact us and we will get back to you as soon as we
              can!
            </p>
            <div className="inputs-contact">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
            </div>
            {formErrors.name && <p className="error">{formErrors.name}</p>}
            <div className="inputs-contact">
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
            </div>
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            <div className="inputs-contact">
              <input
                type="text"
                placeholder="Tell us all about it"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="button-CU">
              Send
            </button>
          </form>
        </div> */}
        <div className="right-Footer">
            <div className="right-partCU">
                <div className="list">
                    <ul>
                        <li className="h">opening hours</li>
                        <li>Monday - Friday</li>
                        <li>9pm - 7pm</li>
                        <li>Weekend</li>
                        <li>Closed</li>
                    </ul>
                </div>
                <div className="list">
                    <ul>
                        <li className="h">address</li>
                        <li>Sheshi Nena Tereza nr.106</li>
                    </ul>
                </div>
                <div className="list">

                    <ul>
                        <li className="h">contact details</li>
                        <li>readopia@gmail.com</li>
                        <li>+383 44 444 888</li>
                    </ul>
                </div>





                <div className="list">

                    <ul>
                        <li className="h">Follow</li>
                        
                    </ul>
                    <div className="last-partF">
                    
                        <p>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                          </a>
                        </p>
                        <p>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaFacebookF />
                          </a>
                        </p>
                        <p>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaThreads />
                          </a>
                        </p>
                        <p>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn />
                          </a>
                        </p>
                    </div>
                </div>
       
            </div>

            
           
        </div>

        <div className="copyright">
            <p><FaRegCopyright /> All rights reserved 2024</p>
        </div>
          

        
    // </div>
  );
};

export default Footer;