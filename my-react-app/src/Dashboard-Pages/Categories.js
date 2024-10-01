import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editCategoryId, setEditCategoryId] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [editCategoryDescription, setEditCategoryDescription] = useState("");
  const [editCreationDate, setEditCreationDate] = useState("");
  const adminToken = localStorage.getItem("adminToken");
  console.log("Admin Token: ", adminToken);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Category`)
      .then((result) => {
        console.log(result.data.creationDate);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //edit
  const handleEdit = (categoryId) => {
    handleShow();
    setEditCategoryId(categoryId);
    axios
      .get(`https://localhost:7061/api/Category/${categoryId}`,{
        headers: {
          Authorization: `Bearer ${adminToken}`, 
        },
      })
      .then((result) => {
        setEditGenre(result.data.genre);
        setEditCategoryDescription(result.data.categoryDescription);
        setEditCreationDate(result.data.creatioDate);
      })
      .catch((error) => {
        toast.error("Failed to get Category: " + error.message);
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
    const filteredData = data.filter((categories) =>
      categories.genre.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  //delete
  const handleDelete = (categoryId) => {
    const adminToken = localStorage.getItem("token"); 
  
    console.log("Token being used for delete:", adminToken);
    if (
      window.confirm("Are you sure you want to delete this Category") === true
    ) {
      axios
        .delete(`https://localhost:7061/api/Category/${categoryId}`, {
          headers: {
            Authorization: `Bearer ${adminToken}`, 
          },
        })
        .then((result) => {
          if (result.status === 200) {
            toast.success("Category has been deleted");
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
  //update

  const handleUpdate = (e) => {
    const adminToken = localStorage.getItem("token"); 
    const url = `https://localhost:7061/api/Category/${editCategoryId}`;
    const data = {
      CategoryId: editCategoryId,
      Genre: editGenre,
      categoryDescription: editCategoryDescription,
      CreatioDate: editCreationDate,
    };
    axios
      .put(url, data,{
        headers: {
          Authorization: `Bearer ${adminToken}`, 
        },
      })
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Category has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit Category: " + error.message);
      });
  };
  const clear = () => {
    setEditGenre("");
    setEditCategoryDescription("");
    setEditCreationDate("");
    setEditCategoryId("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="../add-categories">
          <Button variant="dark" className="btn-add">
            Add Category
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Genre</th>
            <th>Category-Description</th>
            <th>creationDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td>{item.genre}</td>
                    <td>{item.categoryDescription}</td>
                    <td>{item.creatioDate}</td>
                    <td colSpan={2} className="btn">
                      <Button
                        variant="outline-dark"
                        className="btn-edit"
                        onClick={() => handleEdit(item.categoryId)}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handleDelete(item.categoryId)}
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
          <Modal.Title>Edit Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formCategoryId">
                  <Form.Label>Category Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Category ID"
                    name="categoryID"
                    value={editCategoryId}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGenre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Genre"
                    name="Genre"
                    value={editGenre}
                    onChange={(e) => setEditGenre(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formCategoryDescription">
                  <Form.Label>Category Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Category Description"
                    name="CategoryDescription"
                    value={editCategoryDescription}
                    onChange={(e) => setEditCategoryDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCreationDate">
                  <Form.Label>Creation Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter Creation Date"
                    name="CreationDate"
                    value={editCreationDate}
                    onChange={(e) => setEditCreationDate(e.target.value)}
                  />
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
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Categories;
