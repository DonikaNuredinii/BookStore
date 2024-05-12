import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap"; 


const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/User`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });

    axios
      .get(`https://localhost:7061/api/Roles`)
      .then((result) => {

      })
      .catch((error) => {
        toast.error("Failed to get roles: " + error.message);
      });
  };

  const handleSave = () => {
    const url = `https://localhost:7061/api/User`;
    const userData = {
      FirstName: firstName,
      LastName: lastName,
      PhoneNumber: phoneNumber,
      Email: email,
      Username: username,
      Password: password,
    };

    axios
      .post(url, userData)
      .then((result) => {
        getData();
        clear();
        toast.success("User has been added");
      })
      .catch((error) => {
        toast.error("Failed to add user: " + error.message);
      });
  };

  const clear = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  const handleClear = () => {
    clear();
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
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddUser;
