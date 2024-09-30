import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    const userData = {
      Name: name,
      Email: email,
      Message: message,
    };

    axios
      .post(`https://localhost:7061/api/ContactUs`, userData)
      .then((response) => {
        console.log("Contact added successfully:", response.data);
        clearForm();
        toast.success("Contact has been added");
        setTimeout(() => {
          navigate("/dashboard/ContactUs");
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to add contact:", error);
        toast.error("Failed to add contact: " + error.message);
      });
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Form className="contactForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark" className="btn-add" onClick={handleSave}>
            Save
          </Button>
        </Col>
        <Col>
          <Button variant="dark" className="btn-add" onClick={clearForm}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddContact;
