import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddGiftCard = () => {
  const [amount, setAmount] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/User");
      setUsersList(response.data);
      console.log("Fetched users:", response.data);
    } catch (error) {
      toast.error("Failed to fetch users: " + error.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const giftCardData = {
      Code: generatedCode,
      Amount: parseFloat(amount) || 0,
      SelectedDesign: selectedDesign,
      RecipientName: recipientName,
      RecipientEmail: recipientEmail,
      Message: message,
      IsActive: status,
      UserID: selectedUser,
    };

    try {
      await axios.post("https://localhost:7061/api/GiftCard", giftCardData);
      toast.success("Gift card has been added");
      clearForm();
    } catch (error) {
      toast.error("Failed to add gift card: " + error.message);
    }
  };

  const clearForm = () => {
    setAmount("");
    setSelectedDesign("");
    setRecipientName("");
    setRecipientEmail("");
    setMessage("");
    setStatus(true);
    setSelectedUser("");
  };

  return (
    <Form onSubmit={handleSave}>
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSelectedDesign">
            <Form.Label>Selected Design</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter selected design"
              value={selectedDesign}
              onChange={(e) => setSelectedDesign(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formRecipientName">
            <Form.Label>Recipient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipient name"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formRecipientEmail">
            <Form.Label>Recipient Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter recipient email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="checkbox"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
              label={status ? "Active" : "Inactive"}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formUser">
            <Form.Label>User</Form.Label>
            <Form.Control
              as="select"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Select User</option>
              {usersList.map((user) => (
                <option key={user.userID} value={user.userID}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Link to="../GiftCards">
          <Button variant="dark" className="btn-add" onClick={handleSave}>
            Add GiftCard
          </Button>
        </Link>
        <Col>
          <Button variant="dark" onClick={clearForm}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddGiftCard;
