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

const Books = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [authorsList, setAuthorsList] = useState([]);
  const [editBookId, seteditBookId] = useState("");
  const [editISBN, setEditISBN] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [prevImage, setPrevImage] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editAuthors, setEditAuthors] = useState([]);
  const [editPublicationDate, setEditPublicationDate] = useState("");
  const [editPageNumber, setEditPageNumber] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editDateOfAddition, setEditDateOfAddition] = useState("");
  const [editType, setEditType] = useState("");
  const [data, setData] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishingHouse, setSelectedPublishingHouse] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [publishingHouseList, setPublishingHouseList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [languagesList, setLanguagesList] = useState([]);

  const handleShow = () => setShow(true);

  useEffect(() => {
    getAuthors();
    getPublishingHouses();
    getCategories();
    getStocks();
    getLanguages();
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
  const getLanguages = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Language");
      if (Array.isArray(response.data)) {
        setLanguagesList(response.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      toast.error("Failed to get languages: " + error.message);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const fetchWithRetry = async (url, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        if (i < retries - 1) {
          console.warn(`Retrying fetch for ${url}...`);
        } else {
          console.error(`Failed to fetch after ${retries} attempts:`, error);
          throw error;
        }
      }
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Book");
      if (response.status === 200) {
        const booksWithAuthorsCategoriesAndLanguagePromises = response.data
          .filter((book) => book.type !== "Ebook")
          .map(async (book) => {
            try {
              const [
                bookAuthorsResponse,
                bookCategoriesResponse,
                bookLanguageResponse,
              ] = await Promise.all([
                fetchWithRetry(
                  `https://localhost:7061/api/BookAuthors/Book/${book.bookID}`
                ),
                fetchWithRetry(
                  `https://localhost:7061/api/CategoryBooks/Book/${book.bookID}`
                ),
                fetchWithRetry(
                  `https://localhost:7061/api/LanguageBook/Book/${book.bookID}`
                ),
              ]);

              const authors = Array.isArray(bookAuthorsResponse)
                ? bookAuthorsResponse
                : [];
              const categories = Array.isArray(bookCategoriesResponse)
                ? bookCategoriesResponse
                : [];
              const language =
                Array.isArray(bookLanguageResponse) &&
                bookLanguageResponse.length > 0
                  ? bookLanguageResponse[0].language
                  : { languageName: "-" };

              return { ...book, authors, categories, language };
            } catch (error) {
              console.error(
                `Failed to fetch authors/categories/language for book ${book.bookID}:`,
                error
              );
              return {
                ...book,
                authors: [],
                categories: [],
                language: { languageName: "-" },
              };
            }
          });

        const booksWithAuthorsCategoriesAndLanguage = await Promise.all(
          booksWithAuthorsCategoriesAndLanguagePromises
        );
        setData(booksWithAuthorsCategoriesAndLanguage);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      toast.error("Failed to get books: " + error.message);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      filterData(searchQuery);
    } else {
      getData();
    }
  }, [searchQuery]);
  const filterData = (query) => {
    const filteredData = data.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };
  const preprocessImagePath = (path) => {
    if (!path) return null;
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return `https://localhost:7061/${path}`; // Fallback to backend URL
    }
  };
  const handleEdit = (bookID) => {
    handleShow();
    axios
      .get(`https://localhost:7061/api/Book/${bookID}`)
      .then((result) => {
        const bookData = result.data.book || result.data;

        console.log("Book Data:", bookData);
        console.log("Languages Array:", bookData.languages);

        seteditBookId(bookID);
        setEditISBN(bookData?.isbn || "");
        setPrevImage(preprocessImagePath(bookData?.image) || "");
        setEditTitle(bookData?.title || "");
        setEditPublicationDate(bookData?.publicationDate || "");
        setEditPageNumber(bookData?.pageNumber || "");
        setEditDescription(bookData?.description || "");
        setEditPrice(bookData?.price || "");
        setEditDateOfAddition(bookData?.dateOfadition || "");
        setEditType(bookData?.type || "");
        setSelectedPublishingHouse(bookData?.publishingHouseId || "");

        const authors =
          bookData?.authors?.map((author) => author.authorID.toString()) || [];
        const categories =
          bookData?.categories?.map((category) =>
            category.categoryID.toString()
          ) || [];

        setSelectedAuthors(authors);
        setSelectedCategories(categories);
        setSelectedStock(bookData?.stockId || "");

        const selectedBookLanguage = bookData.languages?.[0]?.languageId || "";
        console.log("Selected Book Language ID:", selectedBookLanguage);

        setSelectedLanguage(selectedBookLanguage);
      })
      .catch((error) => {
        console.error("Failed to fetch book details:", error);
        toast.error("Failed to fetch Book: " + error.message);
      });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

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

    const formData = new FormData();

    formData.append("bookID", editBookId || 0);
    formData.append("isbn", editISBN || "N/A");
    formData.append("image", editImage || prevImage);
    formData.append("title", editTitle || "Untitled");
    formData.append(
      "publicationDate",
      editPublicationDate || new Date().toISOString()
    );
    formData.append("pageNumber", parseInt(editPageNumber, 10) || 1);
    formData.append("description", editDescription || "No description");
    formData.append("price", parseFloat(editPrice) || 0.0);
    formData.append(
      "dateOfadition",
      editDateOfAddition || new Date().toISOString()
    );
    formData.append("type", editType || "Paperback");
    formData.append(
      "publishingHouseId",
      parseInt(selectedPublishingHouse, 10) || null
    );
    formData.append("stockId", parseInt(selectedStock, 10) || null);

    selectedAuthors.forEach((authorId) =>
      formData.append("authorIds", authorId)
    );
    selectedCategories.forEach((categoryId) =>
      formData.append("categoryIds", categoryId)
    );

    // Send selected language ID with the update
    formData.append("languageID", parseInt(selectedLanguage, 10)); // Ensure it is a number

    try {
      await axios.put(
        `https://localhost:7061/api/Book/${editBookId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      handleClose();
      getData();
      clear();
      toast.success("Book has been updated");
    } catch (error) {
      console.error(
        "Failed to edit Book:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to edit Book: " + error.message);
    }
  };

  const handleDelete = async (bookID) => {
    if (window.confirm("Are you sure you want to delete this Book?")) {
      try {
        await axios.delete(`https://localhost:7061/api/Book/${bookID}`);
        toast.success("Book has been deleted");
        getData();
      } catch (error) {
        console.error("Failed to delete book:", error);
        toast.error("Failed to delete book: " + error.message);
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    clear();
  };

  const clear = () => {
    seteditBookId("");
    setEditISBN("");
    setEditImage(null);
    setPrevImage("");
    setEditTitle("");
    setEditPublicationDate("");
    setEditPageNumber("");
    setEditDescription("");
    setEditPrice("");
    setEditDateOfAddition("");
    setEditType("");
    setSelectedPublishingHouse("");
    setSelectedStock("");
    setSelectedAuthors([]);
    setSelectedCategories([]);
    setSelectedLanguage("");
  };

  return (
    <Fragment>
      <div className="table-responsive">
        <ToastContainer />
        <div className="add-button">
          <Link to="../add-books">
            <Button variant="dark" className="btn-add">
              Add
            </Button>
          </Link>
        </div>
        <Table
          striped
          bordered
          hover
          size="sm"
          className="compact-table table-sm"
        >
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
              <th>Language</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => {
                const imagePath = preprocessImagePath(item.image);
                const authors = Array.isArray(item.authors) ? item.authors : [];
                const categories = Array.isArray(item.categories)
                  ? item.categories
                  : [];
                const publishingHouse = item.publishingHouse || {};
                const language = item.language?.languageName || "-";

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

                    {/* Handle authors */}
                    <td>
                      {authors.length > 0
                        ? authors
                            .map((author) => author.author?.name)
                            .join(", ")
                        : "No authors available"}
                    </td>

                    {/* Handle publishing house */}
                    <td>
                      {publishingHouseList.find(
                        (house) =>
                          house.publishingHouseId === item.publishingHouseId
                      )?.houseName || "-"}
                    </td>

                    <td>{item.publicationDate}</td>
                    <td>{item.pageNumber}</td>
                    <td>{item.price}</td>

                    {/* Handle description truncation */}
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

                    {/* Handle stock information */}
                    <td>
                      {stockList.find((stock) => stock.stockId === item.stockId)
                        ?.quantity || "-"}
                    </td>

                    {/* Handle categories */}
                    <td>
                      {categories.length > 0
                        ? categories
                            .map((category) => category.genre)
                            .join(", ")
                        : "No categories available"}
                    </td>

                    {/* Handle language */}
                    <td>{language}</td>

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
      </div>

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
                  {prevImage && (
                    <div>
                      <img
                        src={prevImage}
                        alt="Selected book cover"
                        style={{ width: "100px", marginBottom: "10px" }}
                      />
                    </div>
                  )}
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={(e) => setEditImage(e.target.files[0])}
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
                    onClick={(e) => {
                      const selectedOptions = e.target.selectedOptions
                        ? Array.from(e.target.selectedOptions).map(
                            (option) => option.value
                          )
                        : [];
                      const clickedValue = e.target.value;

                      if (selectedAuthors.includes(clickedValue)) {
                        setSelectedAuthors(
                          selectedAuthors.filter(
                            (author) => author !== clickedValue
                          )
                        );
                      } else {
                        setSelectedAuthors([...selectedAuthors, clickedValue]);
                      }
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
                    onClick={(e) => {
                      const selectedOptions = e.target.selectedOptions
                        ? Array.from(e.target.selectedOptions).map(
                            (option) => option.value
                          )
                        : [];
                      const clickedValue = e.target.value;

                      if (selectedCategories.includes(clickedValue)) {
                        setSelectedCategories(
                          selectedCategories.filter(
                            (category) => category !== clickedValue
                          )
                        );
                      } else {
                        setSelectedCategories([
                          ...selectedCategories,
                          clickedValue,
                        ]);
                      }
                    }}
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
              <Col>
                <Form.Group controlId="formLanguage">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    <option value="">Select Language</option>
                    {languagesList.map((language) => (
                      <option
                        key={language.languageId}
                        value={language.languageId}
                      >
                        {language.languageName}
                      </option>
                    ))}
                  </Form.Control>
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
