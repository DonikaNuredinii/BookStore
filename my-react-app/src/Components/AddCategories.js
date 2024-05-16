import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddCategories = () => {
  const [genre, setGenre] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [creatioDate, setCreationDate] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Category`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };
  const handleSave = () => {
    const url = "https://localhost:7061/api/Category";
    const data = {
      Genre: genre,
      CategoryDescription: categoryDescription,
      CreatioDate: creatioDate,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Category has been added successfully");
      })
      .catch((error) => {
        toast.error("Failed to add category: " + error.message);
      });
  };

  const clear = () => {
    setGenre("");
    setCategoryDescription("");
    setCreationDate("");
  };

  const handleClear = () => {
    clear();
  };

  return (
    <Form className="categoryForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlCategoryId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlCategoryId="formCategoryDescription">
            <Form.Label>Category Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category Description"
              name="categoryDescription"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlCategoryId="formCreationDate">
            <Form.Label>CreationDate</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Creation Date"
              value={creatioDate}
              onChange={(e) => setCreationDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {""}
        <Col>
          <Link to="/Categories">
            <Button
              variant="dark"
              className="btn-addCategories"
              onClick={handleSave}
            >
              Add Category
            </Button>
          </Link>
        </Col>
        <Col>
          <Button
            variant="dark"
            className="btn-addCategories"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCategories;
