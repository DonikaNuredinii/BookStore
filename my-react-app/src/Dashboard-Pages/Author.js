import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Author = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [editAuthorID, setEditAuthorID] = useState("");
  const [editName, setEditName] = useState("");
  const [editDateOfBirth, setEditDateOfBirth] = useState("");
  const [editBiography, setEditBiography] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [editAwards, setEditAwards] = useState("");
  const [data, setData] = useState([]);
  const adminToken = localStorage.getItem("adminToken");
  console.log("Admin Token: ", adminToken);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Author`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (authorID) => {
    handleShow();
    setEditAuthorID(authorID);
    axios
      .get(`https://localhost:7061/api/Author/${authorID}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`, 
        },
      })
      .then((result) => {
        const authorData = result.data;
        setEditName(authorData.name);
        setEditDateOfBirth(authorData.dateOfBirth);
        setEditBiography(authorData.biography);
        setEditGenre(authorData.genre);
        setEditAwards(authorData.awards);
      })
      .catch((error) => {
        toast.error("Failed to get Staff: " + error.message);
      });
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

    const filteredData = data.filter((author) =>
      author.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const handleDelete = (AuthorID) => {
    const adminToken = localStorage.getItem("token"); 
  
    console.log("Token being used for delete:", adminToken);
  
    if (window.confirm("Are you sure you want to delete this Author")) {
      axios
        .delete(`https://localhost:7061/api/Author/${AuthorID}`, {
          headers: {
            Authorization: `Bearer ${adminToken}`, 
          },
        })
        .then((result) => {
          if (result.status === 200) {
            toast.success("Author has been deleted");
            getData();
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            toast.error("Unauthorized. Please check your admin token.");
          } else {
            toast.error("Failed to delete this Author: " + error.message);
          }
        });
    }
  };
  

  const handleUpdate = () => {
    const adminToken = localStorage.getItem("token"); 
    const url = `https://localhost:7061/api/Author/${editAuthorID}`;
    const authorData = {
      AuthorID: editAuthorID,
      Name: editName,
      DateOfBirth: editDateOfBirth,
      Biography: editBiography,
      Genre: editGenre,
      Awards: editAwards,
    };
    axios
    .put(url, authorData, {
      headers: {
        Authorization: `Bearer ${adminToken}`, 
      },
    })
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Author has been updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to edit author: " + error.message);
      });
  };

  const clear = () => {
    setEditAuthorID("");
    setEditName("");
    setEditDateOfBirth("");
    setEditBiography("");
    setEditGenre("");
    setEditAwards("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="../add-authors">
          <Button variant="dark" className="btn-add">
            Add Author
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Biography</th>
            <th>Genre</th>
            <th>Awards</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.biography}</td>
                <td>{item.genre}</td>
                <td>{item.awards}</td>
                <td colSpan={2} className="btn">
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.authorID)}
                  >
                    <i class="bi bi-pencil-square"></i>
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.authorID)}
                  >
                    <i class="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Loading...</td>
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
          <Modal.Title>Edit Authors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="fromAuthorID">
                  <Form.Label>Author ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author ID"
                    value={editAuthorID}
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="fromName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author Name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromDateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Date of Birth"
                    value={editDateOfBirth}
                    onChange={(e) => setEditDateOfBirth(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromBiography">
                  <Form.Label>Biography</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Biography"
                    value={editBiography}
                    onChange={(e) => setEditBiography(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Form.Group controlId="formAwards">
                <Form.Label>Awards</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Awards"
                  value={editAwards}
                  onChange={(e) => setEditAwards(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Author;
