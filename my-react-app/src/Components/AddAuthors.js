import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../App.css";
const AddAuthors = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [biography, setBiography] = useState("");
  const [genre, setGenre] = useState("");
  const [awards, setAwards] = useState("");

  const [data, setData] = useState([]);
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
        toast.error("Failed to get data: " + error.message);
      });
  };
  const handleSave = () => {
    const url = "https://localhost:7061/api/Author";
    const data = {
      Name: name,
      DateOfBirth: dateOfBirth,
      Biography: biography,
      Genre: genre,
      Awards: awards,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Author has been added successfully");
      })
      .catch((error) => {
        toast.error("Failed to add author: " + error.message);
      });
  };

  const clear = () => {
    setName("");
    setDateOfBirth("");
    setBiography("");
    setGenre("");
    setAwards("");
  };

  const handleClear = () => {
    clear();
  };

  return (
    <Form className="authorForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlCategoryId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlCategoryId="formDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Birthday"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlCategoryId="formBiography">
            <Form.Label>Biography</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Biography"
              name="biography"
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
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
        <Col>
          <Form.Group controlCategoryId="formAwards">
            <Form.Label>Awards</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Awards"
              name="award"
              value={awards}
              onChange={(e) => setAwards(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {""}
        <Col>
          <Link to="../Author">
            <Button variant="dark" className="btn-add" onClick={handleSave}>
              Add Authors
            </Button>
          </Link>
        </Col>
        <Col>
          <Button variant="dark" className="btn-add" onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddAuthors;
