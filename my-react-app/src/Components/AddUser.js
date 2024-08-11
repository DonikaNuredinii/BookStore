import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(2);

  const handleSave = () => {
    // Form validation
    if (!firstName || !lastName || !email || !username || !password) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const userData = {
      FirstName: firstName,
      LastName: lastName,
      PhoneNumber: phoneNumber,
      Email: email,
      Username: username,
      Password: password,
      RolesID: parseInt(selectedRole),
    };

    axios
      .post(`https://localhost:7061/api/User`, userData)
      .then((response) => {
        console.log("User added successfully:", response.data);
        clearForm();
        toast.success("User has been added");
      })
      .catch((error) => {
        console.error("Failed to add user:", error);
        toast.error("Failed to add user: " + error.message);
      });
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setUsername("");
    setPassword("");
    setSelectedRole(2);
  };

  return (
    <Form className="userForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formRoles">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              value={selectedRole.toString()}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="2">User</option>
              <option value="3">Admin</option>
            </Form.Control>
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

export default AddUser;
