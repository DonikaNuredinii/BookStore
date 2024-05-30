import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editUserId, setEditUserId] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editRoles, setEditRoles] = useState("");

  const [roles, setRoles] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/User`)
      .then((result) => {
        setData(result.data);
        console.log("User Data:", result.data); // Log user data
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://localhost:7061/api/Roles`)
      .then((result) => {
        setRoles(result.data);
        console.log("Roles Data:", result.data); // Log roles data
      })
      .catch((error) => {
        console.error("Error fetching Roles:", error);
        toast.error("Failed to get roles: " + error.message);
      });
  };

  const handleEdit = (userId) => {
    if (!userId) {
      toast.error("UserID is not valid");
      return;
    }

    handleShow();
    setEditUserId(userId);
    axios
      .get(`https://localhost:7061/api/User/${userId}`)
      .then((result) => {
        const userData = result.data;
        setEditFirstName(userData.firstName);
        setEditLastName(userData.lastName);
        setEditPhoneNumber(userData.phoneNumber);
        setEditEmail(userData.email);
        setEditUsername(userData.username);
        setEditPassword(userData.password);
        setEditRoles(userData.rolesID.toString());
      })
      .catch((error) => {
        toast.error("Failed to get User: " + error.message);
      });
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      axios
        .delete(`https://localhost:7061/api/User/${userId}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("User has been deleted");
            getData();
          }
        })
        .catch((error) => {
          toast.error("Failed to delete User: " + error.message);
        });
    }
  };

  const handleUpdate = async () => {
    const url = `https://localhost:7061/api/User/${editUserId}`;

    const userData = {
      UserID: editUserId,
      FirstName: editFirstName,
      LastName: editLastName,
      PhoneNumber: editPhoneNumber,
      Email: editEmail,
      Username: editUsername,
      Password: editPassword,
      RolesID: parseInt(editRoles),
    };

    axios
      .put(url, userData)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("User has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit User: " + error.message);
      });
  };

  const clear = () => {
    setEditFirstName("");
    setEditLastName("");
    setEditPhoneNumber("");
    setEditEmail("");
    setEditUsername("");
    setEditPassword("");
    setEditRoles("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="../add-user">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                let roleName = "N/A";
                if (item.rolesID === 2) {
                  roleName = "Admin";
                } else if (item.rolesID === 3) {
                  roleName = "User";
                }
                console.log("Role ID:", item.rolesID, "Role Name:", roleName); // Log role mapping
                return (
                  <tr key={item.userID}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{roleName}</td>
                    <td colSpan={2} className="btn">
                      <Button
                        variant="outline-dark"
                        className="btn-edit"
                        onClick={() => handleEdit(item.userID)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handleDelete(item.userID)}
                      >
                        Delete
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
          <Modal.Title>Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formUser">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={editUserId}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                    name="FirstName"
                    value={editFirstName}
                    onChange={(e) => setEditFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Last Name"
                    name="LastName"
                    value={editLastName}
                    onChange={(e) => setEditLastName(e.target.value)}
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
                    name="phoneNumber"
                    value={editPhoneNumber}
                    onChange={(e) => setEditPhoneNumber(e.target.value)}
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
                    name="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
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
                    name="username"
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
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
                    name="roles"
                    value={editRoles}
                    onChange={(e) => setEditRoles(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="2">Admin</option>
                    <option value="3">User</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="dark"
                type="button"
                onClick={handleUpdate}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default User;
