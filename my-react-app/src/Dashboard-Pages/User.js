import React, { useState,useEffect,Fragment } from "react";
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

    const [editUserID, setEditUserID] = useState("");
    const [editFirstName, setEditFirstName] = useState("");
    const [editLastName, setEditLastName] = useState("");
    const [editPhoneNumber, setEditPhoneNumber] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editUsername, setEditUsername] = useState("");
    const [editPassword, setEditPassword] = useState("");

    const [roles, setRoles] = useState([]); 
    const [editRolesHouse, setEditRoles] = useState(""); 


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
          console.log(error);
        });

        axios
        .get(
            `https://localhost:7061/api/Roles`
        )
        .then((result) => {
          setRoles(result.data);
          console.log("Roles Data:", result.data);
        })
        .catch((error) => {
          console.error("Error fetching roles:", error);
          toast.error("Failed to get roles: " + error.message);
        });
    };


     //edit
    const handleEdit = (UserID) => {
    handleShow();
    setEditUserID(UserID);
    axios
        .get(`https://localhost:7061/api/Book/${UserID}`)
        .then((result) => {
          setEditFirstName(result.data.firstName);
          setEditLastName(result.data.lastName);
          setEditPhoneNumber(result.data.phoneNumber);
          setEditEmail(result.data.email);
          setEditUsername(result.data.username);
          setEditPassword(result.data.password);

        })

        .catch((error) => {
          toast.error("Failed to get  Book: " + error.message);
        });
    };


    //delete

    const handleDelete = (UserID) => {
    if (window.confirm("Are you sure you want to delete this User") == true) {
      axios
        .delete(`https://localhost:7061/api/Book/${UserID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("User has been deleted");
          }
        })
        .catch((error) => {
          toast.error("Failed to delete User: " + error.message);
        });
    }
    };


    const handleUpdate = () => {
        const url = `https://localhost:7061/api/User/${editUserID}`;
        const data = {
          UserID: editUserID,
          FirstName: editFirstName,
          LastNme: editLastName,
          PhoneNumber: editPhoneNumber,
          Email: editEmail,
          Username: editUsername,
          Password: editPassword,

          
        };
        axios
        .put(url, data)
        .then((result) => {
            handleClose();
            getData();
            clear();
            toast.success("User has been updated");
        })
        .catch((error) => {
            toast.error("Failed to edit Book: " + error.message);
        });
    };
    const clear = () => {
        setEditFirstName("");
        setEditLastName("");
        setEditPhoneNumber("");
        setEditEmail("");
        setEditUsername("");
        setEditPassword("");
    };

    return (
        <Fragment>
          <ToastContainer></ToastContainer>
          <div className="add-button">
            <Link to="/add-books">
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
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0
                ? data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
            
                        <td colSpan={2} className="btn">
                          <Button
                            variant="outline-dark"
                            className="btn-edit"
                            onClick={() => handleEdit(item.UserID)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline-dark"
                            className="btn-delete"
                            onClick={() => handleDelete(item.UserID)}
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
                       value={editUserID}
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
                      <Form.Label>LastName</Form.Label>
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
                        type="text"
                         placeholder="Enter your password"
                        name="password"
                        value={editPassword}
                        onChange={(e) => setEditPassword(e.target.value)}
                    />
                    </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId="formRoles">
                  <Form.Label>Roles</Form.Label>
                  <Form.Control
                    as="select"
                    value={editRolesHouse}
                    onChange={(e) => setEditRoles(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    {roles &&
                      roles.length > 0 &&
                      roles.map((rolesItem) => (
                        <option
                          key={rolesItem.roleID}
                          value={rolesItem.roleID}
                        >
                          {rolesItem.roleName}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Col>
                </Row>
              </Form>
            </Modal.Body>
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
                onClick={handleUpdate}
              >
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      );
    };
    export default User;
    
    

      


