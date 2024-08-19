import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapComponent from "./MapComponent"; 

const Contact = () => {
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

    if (!validateName(name)) {
      errors.name = "Name should start with a capital letter.";
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
    <div className="CUsection">
      <div className="introCU">
        <div className="intro1Cu">
          <h2>Reach Out For Any Information</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="partOneCu">
        <div className="rightPartCu">
          <div className="listC">
            <ul>
              <li className="h">opening hours</li>
              <li>Monday - Friday</li>
              <li>9pm - 7pm</li>
              <li>Weekend</li>
              <li>Closed</li>
            </ul>
            <ul>
              <li className="h">address</li>
              <li>Sheshi Nena Tereza nr.106</li>
              
            </ul>
            <ul>
              <li className="h">contact details</li>
              <li>readopia@gmail.com</li>
              <li>+383 44 444 888</li>
            </ul>
          </div>
        </div>
        <div className="leftPartCu">
          <h1>Contact Us</h1>
          <form onSubmit={handleSave}>
            <p>
              Feel free to contact us and we will get back to you as soon as we
              can!
            </p>
            <div className="inputs-contact">
              <input
                type="text"
                placeholder="Your Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {formErrors.name && <p className="errorCu">{formErrors.name}</p>}
            </div>
            <div className="inputs-contact">
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formErrors.email && <p className="errorCu">{formErrors.email}</p>}
            </div>
            <div className="inputs-contact-Message">
            <textarea
                placeholder="Tell us all about it"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            </div>
            <button type="submit" className="button-CU">
              Send
            </button>
          </form>
          
        </div>
        
        
      </div>
      
      <div className="mapCu">
      <h2>Find Our Location Below</h2>
        <div className="mapcomponant">
          
          <MapComponent />
        </div>
          
      </div>
     
    </div>
  );
};

export default Contact;
