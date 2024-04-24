import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddBooks = () => {
  const [isbn, setISBN] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dateOfadition, setDateOfAddition] = useState("");
  const [stock, setStock] = useState("");
  const [publishingHouse, setPublishingHouse] = useState("");
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Book`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
    axios
      .get(
        `https://localhost:7061/api/PublishingHouses
`
      )
      .then((result) => {
        setPublishingHouse(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get publishing houses: " + error.message);
      });
  };

  const handleSave = () => {
    const url = `https://localhost:7061/api/Book`;
    const data = {
      ISBN: isbn,
      Image: image,
      Title: title,
      Authors: authors,
      PublishingHouse: publishingHouse,
      PublicationDate: publicationDate,
      PageNumber: pageNumber,
      Description: description,
      Price: price,
      DateOfadition: dateOfadition,
      Type: type,
      Stock: stock,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Book has been added");
        setSuccess(true);
      })
      .catch((error) => {
        toast.error("Failed to add Book: " + error.message);
      });
  };
  const clear = () => {
    setISBN("");
    setImage("");
    setTitle("");
    setAuthors("");
    setPublishingHouse("");
    setPublicationDate("");
    setPageNumber("");
    setDescription("");
    setPrice("");
    setDateOfAddition("");
    setType("");
    setStock("");
  };
  const handleClear = () => {
    clear();
  };
  return (
    <Form className="bookForm ">
      <ToastContainer></ToastContainer>
      <Row>
        <Col>
          <Form.Group controlId="formISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ISBN"
              name="ISBN"
              value={isbn}
              onChange={(e) => setISBN(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPublishingHouse">
            <Form.Label>Publishing House</Form.Label>
            <Form.Control
              as="select"
              value={publishingHouse}
              onChange={(e) => setPublishingHouse(e.target.value)}
            >
              <option value="">Select Publishing House</option>
              {Array.isArray(publishingHouse) &&
                publishingHouse.map((publishingHouse) => (
                  <option
                    key={publishingHouse.publishingHouseId}
                    value={publishingHouse.publishingHouseId}
                  >
                    {publishingHouse.houseName}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formAuthors">
            <Form.Label>Authors</Form.Label>
            <Form.Control
              as="select"
              multiple
              value={authors}
              onChange={(e) =>
                setAuthors(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {Array.isArray(authors) &&
                authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formPageNumber">
            <Form.Label>Page Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter page number"
              name="pageNumber"
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPublicationDate">
            <Form.Label>Publication Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter publication date"
              name="publicationDate"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              as="select"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            >
              {Array.isArray(stock) &&
                stock.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formDateOfAddition">
            <Form.Label>Date of Addition</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date of addition"
              name="dateOfAddition"
              value={dateOfadition}
              onChange={(e) => setDateOfAddition(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <Link to="/Books">
            <Button variant="dark" className="btn-add" onClick={handleSave}>
              Add
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

export default AddBooks;
