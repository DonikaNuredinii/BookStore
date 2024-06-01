import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);
const Books = () => {
  const [show, setShow] = useState(false);
  const [authorsList, setAuthorsList] = useState([]);
  const [editBookId, seteditBookId] = useState("");
  const [editISBN, setEditISBN] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editAuthors, setEditAuthors] = useState([]);
  const [editPublicationDate, setEditPublicationDate] = useState("");
  const [editPageNumber, setEditPageNumber] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editDateOfAddition, setEditDateOfAddition] = useState("");
  const [editType, setEditType] = useState("");
  const [editPublishingHouse, setEditPublishingHouse] = useState("");
  const [editBook, setEditBook] = useState({});
  const [data, setData] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishingHouse, setSelectedPublishingHouse] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [publishingHouseList, setPublishingHouseList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAuthors();
    getPublishingHouses();
    getStocks();
    getData();
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

  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Book");
      setData(response.data);
      const booksWithAuthorsPromises = data.map(async (book) => {
        const bookAuthorsResponse = await axios.get(
          `https://localhost:7061/api/BookAuthor/${book.bookID}`
        );
        const authors = bookAuthorsResponse.data;
        return { ...book, authors };
      });
      const booksWithAuthors = await Promise.all(booksWithAuthorsPromises);
      setData(booksWithAuthors);
    } catch (error) {
      toast.error("Failed to get books: " + error.message);
    }
  };
  const handleEdit = (bookID) => {
    handleShow();
    axios
      .get(`https://localhost:7061/api/Book/${bookID}`)
      .then((result) => {
        const bookData = result.data;

        seteditBookId(bookID);
        setEditISBN(bookData.isbn);
        setEditImage(bookData.image);
        setEditTitle(bookData.title);
        setEditPublicationDate(bookData.publicationDate);
        setEditPageNumber(bookData.pageNumber);
        setEditDescription(bookData.description);
        setEditPrice(bookData.price);
        setEditDateOfAddition(bookData.dateOfadition);
        setEditType(bookData.type);
        setEditAuthors(bookData.authors || []);
        setSelectedAuthors(
          (bookData.authors || []).map((author) => author.authorID)
        );
        setEditPublishingHouse(bookData.publishingHouse);
        setSelectedPublishingHouse(
          bookData.publishingHouse?.publishingHouseId || ""
        );
        setEditStock(bookData.stock);
        setSelectedStock(bookData.stock?.stockId || "");
      })
      .catch((error) => {
        toast.error("Failed to get Book: " + error.message);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Edit id:", editBookId);

    // Ensure valid publishing house and stock data
    const publishingHouseId = parseInt(selectedPublishingHouse) || null;
    const stockId = parseInt(selectedStock) || null;

    // Prepare data for update
    const data = {
      bookID: editBookId,
      isbn: parseInt(editISBN) || 0,
      image: editImage || "string",
      title: editTitle || "string",
      publicationDate: editPublicationDate || new Date().toISOString(),
      pageNumber: parseInt(editPageNumber) || 0,
      description: editDescription || "string",
      price: parseFloat(editPrice) || 0.0,
      dateOfadition: editDateOfAddition || new Date().toISOString(),
      type: editType || "string",
      publishingHouseId: publishingHouseId,
      stockId: stockId,
    };

    console.log("Data being sent:", data);

    axios
      .put(`https://localhost:7061/api/Book/${editBookId}`, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Book has been updated");
      })
      .catch((error) => {
        console.error(
          "Failed to edit Book:",
          error.response ? error.response.data : error.message
        );
        const errorMessage =
          error.response?.data?.title || error.message || "Unknown error";
        toast.error(`Failed to edit Book: ${errorMessage}`);
      });
  };

  const handleDelete = async (bookID) => {
    if (window.confirm("Are you sure you want to delete this Book")) {
      try {
        await axios.delete(`https://localhost:7061/api/Book/${bookID}`);
        toast.success("Book has been deleted");
        getData();
      } catch (error) {
        toast.error("Failed to delete book: " + error.message);
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setEditBook({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditBook({ ...editBook, [name]: value });
  };

  const preprocessImagePath = (path) => {
    if (!path) return null;
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const clear = () => {
    setEditISBN("");
    setEditImage("");
    setEditTitle("");
    setEditAuthors("");
    setEditPublishingHouse("");
    setEditPublicationDate("");
    setEditPageNumber("");
    setEditDescription("");
    setEditPrice("");
    setEditDateOfAddition("");
    setEditType("");
    setEditStock("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="../add-books">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>ISBN</th>
            <th>Image</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Publishing house</th>
            <th>Publication Date</th>
            <th>Page Number</th>
            <th>Price</th>
            <th>Discription</th>
            <th>Date of Addition</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              // Log the item to see its structure
              console.log("Item:", item);

              // Make sure item is not undefined or null
              if (!item) {
                return null;
              }

              // Make sure all necessary properties exist before accessing them
              const imagePath = preprocessImagePath(item.image);
              const authors = item.authors || [];
              const publishingHouse = item.publishingHouse || {};
              const stock = item.stock || {};

              return (
                <tr key={item.bookID}>
                  <td>{index + 1}</td>
                  <td>{item.isbn}</td>
                  <td>
                    <img
                      src={imagePath || "/images/placeholder.jpg"}
                      alt="Book Cover"
                      style={{ width: "50px", height: "auto" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    {authors.map((author) => (
                      <div key={author.authorID}>
                        {author.name} - {author.dateOfBirth}
                      </div>
                    ))}
                  </td>
                  <td>
                    {" "}
                    {publishingHouseList.find(
                      (house) =>
                        house.publishingHouseId === item.publishingHouseId
                    )?.houseName || "-"}
                  </td>
                  <td>{item.publicationDate}</td>
                  <td>{item.pageNumber}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.dateOfadition}</td>
                  <td>{item.type}</td>
                  <td>
                    {" "}
                    {stockList.find((stock) => stock.stockId === item.stockId)
                      ?.quantity || "-"}
                  </td>
                  <td colSpan={2} className="btn">
                    <Button
                      variant="outline-dark"
                      className="btn-edit"
                      onClick={() => handleEdit(item.bookID)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="btn-delete"
                      onClick={() => handleDelete(item.bookID)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="13" className="text-center">
                No Books Available
              </td>
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
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formBookId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={editBookId}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formISBN">
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter ISBN"
                    name="ISBN"
                    value={editISBN}
                    onChange={(e) => setEditISBN(e.target.value)}
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
                    value={editImage}
                    onChange={(e) => setEditImage(e.target.value)}
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
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
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
                    <option value="">Select Publishing House</option>
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
              <Col>
                <Form.Group controlId="formAuthors">
                  <Form.Label>Authors</Form.Label>
                  <Form.Control
                    as="select"
                    multiple
                    value={selectedAuthors}
                    onChange={(e) =>
                      setSelectedAuthors(
                        Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        )
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
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formPublicationDate">
                  <Form.Label>Publication Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter publication date"
                    name="publicationDate"
                    value={editPublicationDate}
                    onChange={(e) => setEditPublicationDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPageNumber">
                  <Form.Label>Page Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter page number"
                    name="pageNumber"
                    value={editPageNumber}
                    onChange={(e) => setEditPageNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    name="description"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Enter price"
                    name="price"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
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
                    type="text"
                    placeholder="Enter date of addition"
                    name="dateOfAddition"
                    value={editDateOfAddition}
                    onChange={(e) => setEditDateOfAddition(e.target.value)}
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
                    value={editType}
                    onChange={(e) => setEditType(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
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
                type="submit"
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
export default Books;
