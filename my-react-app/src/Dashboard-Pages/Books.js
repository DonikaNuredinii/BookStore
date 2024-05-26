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
  const [editStock, setEditStock] = useState([]);
  const [editDateOfAddition, setEditDateOfAddition] = useState("");
  const [editType, setEditType] = useState("");
  const [editPublishingHouse, seteditPublishingHouse] = useState([]);

  //Prosess image
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
  const [data, setData] = useState([]);
  useEffect(() => {
    getPublishingHouses();
    getStocks();
    getData();
    getAuthors();
  }, []);
  //getData
  const getPublishingHouses = () => {
    return axios
      .get("https://localhost:7061/api/PublishingHouses")
      .then((response) => {
        seteditPublishingHouse(response.data); // Set as array
      })
      .catch((error) => {
        toast.error("Failed to get publishing houses: " + error.message);
      });
  };

  const getStocks = () => {
    return axios
      .get(`https://localhost:7061/api/Stock`)
      .then((response) => {
        setEditStock(response.data);
      })
      .catch((error) => {
        toast.error("Failed to get stock: " + error.message);
      });
  };
  const getAuthors = (bookID) => {
    return axios
      .get(`https://localhost:7061/api/BookAuthors`)
      .then((result) => {
        const authorData = result.data;
        const authorPromises = authorData.map(({ authorID }) =>
          axios.get(`https://localhost:7061/api/Author/${authorID}`)
        );
        return Promise.all(authorPromises);
      })
      .then((authorResponses) => {
        const authors = authorResponses.map((response) => response.data);
        setAuthorsList(authors);
        return authors;
      })
      .catch((error) => {
        console.error("Failed to get authors:", error);
        return [];
      });
  };

  const getData = () => {
    console.log("editStock:", editStock);

    axios
      .get(`https://localhost:7061/api/Book`)
      .then((result) => {
        const books = result.data;
        const promises = books.map((book) => {
          let publishingHousePromise;
          let stockPromise;
          if (book.publishingHouseId) {
            publishingHousePromise = getPublishingHouses(
              book.publishingHouseId
            );
          } else {
            publishingHousePromise = Promise.resolve();
          }
          if (book.stockId) {
            stockPromise = getStocks(book.stockId);
          } else {
            stockPromise = Promise.resolve();
          }
          return Promise.all([
            publishingHousePromise,
            stockPromise,
            getAuthors(book.bookID),
          ]);
        });
        Promise.all(promises)
          .then(() => {
            setData(books);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //edit
  const handleEdit = (bookID) => {
    handleShow();

    console.log("Received BookID:", bookID);
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
        getAuthors(bookID)
          .then((authors) => {
            const authorNames = authors.map((author) => author.name);
            setEditAuthors(authorNames);
          })
          .catch((error) => {
            console.error("Failed to fetch authors:", error);
          });

        setEditStock(bookData.stock ? [bookData.stock] : []);

        seteditPublishingHouse(
          bookData.publishingHouse
            ? [bookData.publishingHouse.publishingHouseId]
            : []
        );
      })
      .catch((error) => {
        toast.error("Failed to get Book: " + error.message);
      });
  };
  const handleStockChange = (e) => {
    const stockId = e.target.value;
    const selectedStock = editStock.find(
      (s) => s.stockId === parseInt(stockId)
    );
    console.log("selectedStock:", selectedStock);
    setEditStock(selectedStock ? [selectedStock] : []);
  };

  //delete

  const handleDelete = (bookID) => {
    if (window.confirm("Are you sure you want to delete this Book") == true) {
      axios
        .delete(`https://localhost:7061/api/Book/${bookID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Book has been deleted");
          }
        })
        .catch((error) => {
          toast.error("Failed to delete Book: " + error.message);
        });
    }
  };
  //imput change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (name === "stock") {
      setEditStock(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Edit id:", editBookId);
    const url = `https://localhost:7061/api/Book/${editBookId}`;
    const data = {
      bookID: editBookId,
      isbn: editISBN,
      image: editImage || "",
      title: editTitle || "",
      author: editAuthors.join(", ") || "",
      publicationDate: editPublicationDate || "",
      pageNumber: parseInt(editPageNumber) || 0,
      description: editDescription || "",
      price: parseFloat(editPrice) || 0.0,
      dateOfadition: editDateOfAddition || "",
      type: editType || "",
      publishingHouse: {
        publishingHouseId: editPublishingHouse[0] || 0,
      },
      stock: {
        stockId: editStock[0].stockId || 0,
        quantity: editStock[0].quantity || 0,
      },
    };

    console.log("Data being sent:", data);

    axios
      .put(url, data)
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
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          console.error("Validation errors:", error.response.data.errors);
        }
        toast.error(
          "Failed to edit Book: " +
            (error.response ? error.response.data.title : error.message)
        );
      });
  };
  const clear = () => {
    setEditISBN("");
    setEditImage("");
    setEditTitle("");
    setEditAuthors("");
    seteditPublishingHouse("");
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
          {data && data.length > 0
            ? data.map((item, index) => {
                console.log(item.publishingHouse);
                const imagePath = preprocessImagePath(item.image);
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
                      {authorsList &&
                        authorsList.map((author, index) => (
                          <span key={index}>
                            {author.name} - {author.dateOfBirth}
                            {index !== authorsList.length - 1 && ", "}
                          </span>
                        ))}
                    </td>
                    <td>
                      {item.publishingHouse
                        ? item.publishingHouse.houseName
                        : "-"}
                    </td>

                    <td>{item.publicationDate}</td>
                    <td>{item.pageNumber}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.dateOfadition}</td>
                    <td>{item.type}</td>
                    <td>{item.stock ? item.stock.quantity : "-"}</td>
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
          <Modal.Title>Edit Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formISBN">
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
                    value={editPublishingHouse ? editPublishingHouse.id : ""}
                    onChange={(e) => handleInputChange(e)}
                    name="publishingHouse"
                  >
                    <option value="">Select Publishing House</option>
                    {editPublishingHouse.map((house) => (
                      <option
                        key={house.publishingHouseId} // Assigning a unique key prop
                        value={house.publishingHouseId}
                      >
                        {house.houseName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formAuthors">
                  <Form.Label>Authors</Form.Label>
                  {authorsList && (
                    <Form.Control
                      as="select"
                      multiple
                      value={editAuthors}
                      onChange={(e) =>
                        setEditAuthors(
                          Array.from(
                            e.target.selectedOptions,
                            (option) => option.value
                          )
                        )
                      }
                    >
                      {authorsList.map((author, index) => (
                        <option key={author.authorID} value={author.authorID}>
                          {author.name}
                        </option>
                      ))}
                    </Form.Control>
                  )}
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
                    value={editStock.stockId}
                    onChange={handleStockChange}
                    name="stock"
                  >
                    <option value="">Select Stock</option>
                    {editStock.map((stock) => (
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
export default Books;
