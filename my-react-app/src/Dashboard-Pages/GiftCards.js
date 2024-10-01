import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const GiftCards = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [editGiftCardId, setEditGiftCardId] = useState("");
  const [editCode, setEditCode] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editSelectedDesign, setEditSelectedDesign] = useState("");
  const [editRecipientName, setEditRecipientName] = useState("");
  const [editRecipientEmail, setEditRecipientEmail] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editStatus, setEditStatus] = useState(true);
  const [originalGiftCard, setOriginalGiftCard] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(1);
  const adminToken = localStorage.getItem("adminToken");
  console.log("Admin Token: ", adminToken);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (searchQuery) {
      filterData(searchQuery);
    } else {
      getData();
    }
  }, [searchQuery]);
  const filterData = (query) => {
    if (!query) {
      getData();
      return;
    }

    const filteredData = data.filter((gift) =>
      gift.code.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/GiftCard");
      setData(response.data);
    } catch (error) {
      toast.error("Failed to get gift cards: " + error.message);
    }
  };

  const handleEdit = (giftCardID) => {
    setShow(true);
    axios
      .get(`https://localhost:7061/api/GiftCard/${giftCardID}`)
      .then((result) => {
        const giftCardData = result.data;
        setOriginalGiftCard(giftCardData);
        setEditGiftCardId(giftCardID);
        setEditCode(giftCardData.code);
        setEditAmount(giftCardData.amount);
        setEditSelectedDesign(giftCardData.selectedDesign);
        setEditRecipientName(giftCardData.recipientName);
        setEditRecipientEmail(giftCardData.recipientEmail);
        setEditMessage(giftCardData.message);
        setEditStatus(giftCardData.isActive);
      })
      .catch((error) => {
        toast.error("Failed to get gift card: " + error.message);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const adminToken = localStorage.getItem("token");

    const updatedData = {
      GiftCardID: editGiftCardId,
      Code: editCode,
      Amount: parseFloat(editAmount) || 0,
      SelectedDesign: editSelectedDesign,
      RecipientName: editRecipientName,
      RecipientEmail: editRecipientEmail,
      Message: editMessage,
      IsActive: editStatus,
      UserID: currentUserId,
    };

    axios
      .put(
        `https://localhost:7061/api/GiftCard/${editGiftCardId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      )
      .then((response) => {
        console.log("Gift card updated:", response.data);
        toast.success("Gift card updated successfully");
        getData();
        handleClose();
      })
      .catch((error) => {
        console.error("Failed to edit gift card:", error.message);
        toast.error("Failed to edit gift card: " + error.message);
      });
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="../add-GiftCard">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>Amount</th>
            <th>Selected Design</th>
            <th>Recipient Name</th>
            <th>Recipient Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.giftCardID}>
                <td>{index + 1}</td>
                <td>{item.code}</td>
                <td>${item.amount.toFixed(2)}</td>
                <td>{item.selectedDesign}</td>
                <td>{item.recipientName}</td>
                <td>{item.recipientEmail}</td>
                <td>{item.message}</td>
                <td>{item.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.giftCardID)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No Gift Cards Available
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Gift Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formGiftCardId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID"
                    value={editGiftCardId}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCode">
                  <Form.Label>Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter code"
                    value={editCode}
                    onChange={(e) => setEditCode(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Enter amount"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formSelectedDesign">
                  <Form.Label>Selected Design</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter selected design"
                    value={editSelectedDesign}
                    onChange={(e) => setEditSelectedDesign(e.target.value)}
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
                    value={editRecipientName}
                    onChange={(e) => setEditRecipientName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formRecipientEmail">
                  <Form.Label>Recipient Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter recipient email"
                    value={editRecipientEmail}
                    onChange={(e) => setEditRecipientEmail(e.target.value)}
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
                    value={editMessage}
                    onChange={(e) => setEditMessage(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Check
                    type="checkbox"
                    checked={editStatus}
                    onChange={(e) => setEditStatus(e.target.checked)}
                    label={editStatus ? "Active" : "Inactive"}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Modal.Footer>
              <Button
                variant="outline-dark"
                className="btn-Close"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="outline-dark"
                className="btn-update"
                type="submit"
              >
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default GiftCards;
