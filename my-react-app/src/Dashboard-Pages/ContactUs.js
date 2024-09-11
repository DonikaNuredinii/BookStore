import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editContactID, setEditContactID] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editMessage, setEditMessage] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/ContactUs`)
      .then((result) => {
        setData(result.data);
        console.log("Contact Data:", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (contactId) => {
    if (!contactId) {
      toast.error("ContactID is not valid");
      return;
    }

    handleShow();
    setEditContactID(contactId);
    axios
      .get(`https://localhost:7061/api/ContactUs/${contactId}`)
      .then((result) => {
        const contactData = result.data;
        setEditName(contactData.name);
        setEditEmail(contactData.email);
        setEditMessage(contactData.message);
      })
      .catch((error) => {
        toast.error("Failed to get User: " + error.message);
      });
  };

  const handleDelete = (contactId) => {
    if (
      window.confirm("Are you sure you want to delete this contact message?")
    ) {
      axios
        .delete(`https://localhost:7061/api/ContactUs/${contactId}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Message has been deleted");
            getData();
          }
        })
        .catch((error) => {
          toast.error("Failed to delete Message: " + error.message);
        });
    }
  };
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

    const filteredData = data.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const handleUpdate = async () => {
    const url = `https://localhost:7061/api/ContactUs/${editContactID}`;

    const contactData = {
      ContactID: editContactID,
      Name: editName,
      Email: editEmail,
      Message: editMessage,
    };

    axios
      .put(url, contactData)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Message has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit Message: " + error.message);
      });
  };

  const clear = () => {
    setEditName("");
    setEditEmail("");
    setEditMessage("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="../add-contact">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={item.contactID}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td colSpan={2} className="btn">
                      <Button
                        variant="outline-dark"
                        className="btn-edit"
                        onClick={() => handleEdit(item.contactID)}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handleDelete(item.contactID)}
                      >
                        <i class="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formContact">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={editContactID}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                    name="FirstName"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
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
                    placeholder="Tell us about it.."
                    name="message"
                    value={editMessage}
                    onChange={(e) => setEditMessage(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="dark"
                type="submit"
                onClick={() => handleUpdate(editContactID)}
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

export default ContactUs;
