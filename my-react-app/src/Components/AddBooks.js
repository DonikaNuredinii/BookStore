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
  const [stock, setStock] = useState([]);
  const [publishingHouse, setPublishingHouse] = useState([]);
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);
  const [authorsList, setAuthorsList] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishingHouse, setSelectedPublishingHouse] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    getPublishingHouses();
    getStocks();
    getAuthors();
  }, []);
  const getPublishingHouses = () => {
    axios
      .get("https://localhost:7061/api/PublishingHouses")
      .then((response) => {
        setPublishingHouse(response.data);
      })
      .catch((error) => {
        toast.error("Failed to get publishing houses: " + error.message);
      });
  };

  const getStocks = () => {
    axios
      .get("https://localhost:7061/api/Stock")
      .then((response) => {
        setStock(response.data);
      })
      .catch((error) => {
        toast.error("Failed to get stocks: " + error.message);
      });
  };
  const getAuthors = () => {
    axios
      .get("https://localhost:7061/api/Author")
      .then((response) => {
        setAuthorsList(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch authors: " + error.message);
      });
  };

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Book`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };
  const handlePublishingHouseChange = (e) => {
    const selectedPublishingHouse = parseInt(e.target.value);
    setSelectedPublishingHouse(selectedPublishingHouse);
    const publishingHouse = publishingHouse.find(
      (ph) => ph.publishingHouseId === selectedPublishingHouse
    );
    setData({ ...data, publishingHouse });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const url = `https://localhost:7061/api/Book`;
    const authorsString = selectedAuthors
      .map((author) => author.name)
      .join(", ");
    const data = {
      ISBN: parseInt(isbn),
      Image: image,
      Title: title,
      Authors: authorsString,
      PublishingHouseId: parseInt(selectedPublishingHouse),
      PublicationDate: publicationDate,
      PageNumber: parseInt(pageNumber),
      Description: description,
      Price: parseFloat(price),
      DateOfadition: dateOfadition,
      Type: type,
      StockId: parseInt(selectedStock),
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAuthorsChange = (e) => {
    const selectedAuthors = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setData({ ...data, authors: selectedAuthors });
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
              value={data.publishingHouse}
              onChange={(e) => handleInputChange(e)}
              name="publishingHouse"
            >
              <option value="">Select Publishing House</option>
              {publishingHouse.map((publishingHouse) => (
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
              value={selectedAuthors.map((author) => author.authorID)}
              onChange={(e) => {
                const selectedOptions = Array.from(
                  e.target.selectedOptions,
                  (option) =>
                    authorsList.find(
                      (author) => author.authorID === parseInt(option.value)
                    )
                );
                setSelectedAuthors(selectedOptions);
              }}
            >
              {authorsList.map((author) => (
                <option key={author.authorID} value={author.authorID}>
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
              type="number"
              step="0.01"
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
              value={data.stock}
              onChange={(e) => handleInputChange(e)}
              name="stock"
            >
              <option value="">Select Stock</option>
              {stock.map((stock) => (
                <option key={stock.stockId} value={stock.stockId}>
                  {stock.quantity}
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
          <Link to="../Books">
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
