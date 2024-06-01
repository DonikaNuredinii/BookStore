import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddBooks = () => {
  const [isbn, setISBN] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [dateOfadition, setDateOfAddition] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishingHouse, setSelectedPublishingHouse] = useState("");
  const [selectedStock, setSelectedStock] = useState("");

  const [authorsList, setAuthorsList] = useState([]);
  const [publishingHouseList, setPublishingHouseList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getAuthors();
    getPublishingHouses();
    getStocks();
  }, []);

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

  const getPublishingHouses = () => {
    axios
      .get("https://localhost:7061/api/PublishingHouses")
      .then((response) => {
        setPublishingHouseList(response.data);
      })
      .catch((error) => {
        toast.error("Failed to get publishing houses: " + error.message);
      });
  };

  const getStocks = () => {
    axios
      .get("https://localhost:7061/api/Stock")
      .then((response) => {
        setStockList(response.data);
      })
      .catch((error) => {
        toast.error("Failed to get stocks: " + error.message);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const url = "https://localhost:7061/api/Book";
    const requestData = {
      ISBN: parseInt(isbn),
      Image: image,
      Title: title,
      Authors: selectedAuthors.map((author) => author.authorID),
      PublishingHouseId: parseInt(selectedPublishingHouse),
      PublicationDate: new Date(publicationDate).toISOString(),
      PageNumber: parseInt(pageNumber),
      Description: description,
      Price: parseFloat(price),
      DateOfadition: new Date(dateOfadition).toISOString(),
      Type: type,
      StockId: parseInt(selectedStock),
    };

    axios
      .post(url, requestData)
      .then((result) => {
        const bookId = result.data.bookID;
        addBookAuthors(bookId, requestData.Authors);
        clear();
        toast.success("Book has been added");
        setSuccess(true);
      })
      .catch((error) => {
        toast.error("Failed to add Book: " + error.message);
      });
  };

  const addBookAuthors = (bookId, authors) => {
    const url = `https://localhost:7061/api/BookAuthors`;
    const bookAuthorsData = authors.map((author) => ({
      bookID: bookId,
      authorID: author,
    }));

    axios
      .post(url, bookAuthorsData)
      .then(() => {
        console.log("BookAuthors added successfully.");
      })
      .catch((error) => {
        console.error("Failed to add BookAuthors: " + error.message);
      });
  };

  const clear = () => {
    setISBN("");
    setImage("");
    setTitle("");
    setPublicationDate("");
    setPageNumber("");
    setDescription("");
    setPrice("");
    setDateOfAddition("");
    setSelectedAuthors([]);
    setSelectedPublishingHouse("");
    setSelectedStock("");
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
              value={selectedPublishingHouse}
              onChange={(e) => setSelectedPublishingHouse(e.target.value)}
            >
              <option value="">
              Select Publishing House</option>
              {publishingHouseList.map((publishingHouse) => (
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
              value={selectedAuthors}
              onChange={(e) =>
                setSelectedAuthors(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
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
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
            >
              <option value="">Select Stock</option>
              {stockList.map((stock) => (
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
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark" className="btn-add" onClick={handleSave}>
            Add
          </Button>
        </Col>
        <Col>
          <Button variant="dark" className="btn-add" onClick={clear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddBooks;

