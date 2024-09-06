import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleShow = () => setShow(true);

  useEffect(() => {
    getAuthors();
    getPublishingHouses();
    getCategories();
    getStocks();
    getData();
  }, []);

  useEffect(() => {
    const initializeTooltips = () => {
      // Inside your useEffect to initialize tooltips
      if (window.bootstrap) {
        const tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
          new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      } else {
        console.error("Bootstrap is not properly initialized.");
      }
    };

    if (data.length > 0) {
      const tooltipTimeout = setTimeout(initializeTooltips, 100);
    }

    return () => {
      const tooltips = document.querySelectorAll(".tooltip");
      tooltips.forEach((tooltip) => tooltip.remove());
    };
  }, [data]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
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
  const getCategories = () => {
    axios
      .get("https://localhost:7061/api/Category")
      .then((response) => {
        setCategoriesList(response.data);
      })
      .catch((error) => {
        toast.error("Failed to get categories: " + error.message);
      });
  };

  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Book");

      if (response.status === 200) {
        const booksWithAuthorsAndCategoriesPromises = response.data
          .filter((book) => book.type !== "Ebook") // Add this line to filter out ebooks
          .map(async (book) => {
            try {
              const bookAuthorsResponse = await axios.get(
                `https://localhost:7061/api/BookAuthors/Book/${book.bookID}`
              );
              const bookCategoriesResponse = await axios.get(
                `https://localhost:7061/api/CategoryBooks/Book/${book.bookID}`
              );

              const authors = Array.isArray(bookAuthorsResponse.data)
                ? bookAuthorsResponse.data
                : [];
              const categories = Array.isArray(bookCategoriesResponse.data)
                ? bookCategoriesResponse.data
                : [];

              return { ...book, authors, categories };
            } catch (error) {
              console.error(
                `Failed to fetch authors/categories for book ${book.bookID}:`,
                error
              );
              return { ...book, authors: [], categories: [] };
            }
          });

        const booksWithAuthorsAndCategories = await Promise.all(
          booksWithAuthorsAndCategoriesPromises
        );
        setData(booksWithAuthorsAndCategories);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
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
        setEditISBN(bookData.book.isbn || "");
        setEditImage(bookData.book.image || "");
        setEditTitle(bookData.book.title || "");
        setEditPublicationDate(bookData.book.publicationDate || "");
        setEditPageNumber(bookData.book.pageNumber || "");
        setEditDescription(bookData.book.description || "");
        setEditPrice(bookData.book.price || "");
        setEditDateOfAddition(bookData.book.dateOfadition || "");
        setEditType(bookData.book.type || "");

        // Set the publishing house correctly
        setSelectedPublishingHouse(bookData.book.publishingHouseId || "");

        // Handle authors and categories
        setSelectedAuthors(bookData.authors.map((author) => author.authorID));
        setSelectedCategories(
          bookData.categories.map((category) => category.categoryId)
        );

        setSelectedStock(bookData.book.stockId || "");
      })
      .catch((error) => {
        toast.error("Failed to fetch Book: " + error.message);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Ensure all required fields are present
    if (
      !editTitle ||
      !editISBN ||
      !editPrice ||
      !selectedAuthors.length ||
      !selectedCategories.length
    ) {
      toast.error(
        "Please ensure all fields are filled out, including authors and categories."
      );
      return;
    }

    const data = {
      book: {
        bookID: editBookId || 0,
        isbn: editISBN || "N/A",
        image: editImage || "/path/to/default/image.jpg",
        title: editTitle || "Untitled",
        publicationDate: editPublicationDate || new Date().toISOString(),
        pageNumber: parseInt(editPageNumber, 10) || 1,
        description: editDescription || "No description",
        price: parseFloat(editPrice) || 0.0,
        dateOfadition: editDateOfAddition || new Date().toISOString(),
        type: editType || "Paperback",
        publishingHouseId: parseInt(selectedPublishingHouse, 10) || null,
        stockId: parseInt(selectedStock, 10) || null,
      },
      authorIds: selectedAuthors.map(Number), // Send selected authors
      categoryIds: selectedCategories.map(Number), // Send selected categories
    };

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
        toast.error("Failed to edit Book: " + error.message);
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
    setSelectedCategories([]);
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
      <Table striped bordered hover className="tables table-sm">
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
            <th>Description</th>
            <th>Date of Addition</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Categories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              console.log(
                "Book ID:",
                item.bookID,
                "Categories:",
                item.categories
              );

              const imagePath = preprocessImagePath(item.image);
              const authors = Array.isArray(item.authors) ? item.authors : [];
              const categories = Array.isArray(item.categories)
                ? item.categories
                : []; // Ensure categories are array
              const publishingHouse = item.publishingHouse || {};

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
                    {authors.map((author) => author.author.name).join(", ")}
                  </td>
                  <td>
                    {publishingHouseList.find(
                      (house) =>
                        house.publishingHouseId === item.publishingHouseId
                    )?.houseName || "-"}
                  </td>
                  <td>{item.publicationDate}</td>
                  <td>{item.pageNumber}</td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className="truncated-description"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={item.description}
                    >
                      {truncateText(item.description, 50)}
                    </span>
                  </td>
                  <td>{item.dateOfadition}</td>
                  <td>{item.type}</td>
                  <td>
                    {stockList.find((stock) => stock.stockId === item.stockId)
                      ?.quantity || "-"}
                  </td>
                  <td>
                    {categories.length > 0
                      ? categories.map((category) => category.genre).join(", ")
                      : "No categories available"}
                  </td>

                  <td colSpan={2} className="btn">
                    <Button
                      variant="outline-dark"
                      className="btn-edit"
                      onClick={() => handleEdit(item.bookID)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="btn-delete"
                      onClick={() => handleDelete(item.bookID)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="14" className="text-center">
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
              <Col>
                <Form.Group controlId="formCategories">
                  <Form.Label>Categories</Form.Label>
                  <Form.Control
                    as="select"
                    multiple
                    value={selectedCategories}
                    onChange={(e) =>
                      setSelectedCategories(
                        Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        )
                      )
                    }
                  >
                    {categoriesList.map((category) => (
                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.genre}
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
