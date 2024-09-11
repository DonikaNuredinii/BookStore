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

const Ebooks = () => {
  const [show, setShow] = useState(false);
  const [authorsList, setAuthorsList] = useState([]);
  const [editEbookId, setEditEbookId] = useState("");
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
  const [editContent, setEditContent] = useState("");
  const [editEbook, setEditEbook] = useState({});
  const [data, setData] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishingHouse, setSelectedPublishingHouse] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [publishingHouseList, setPublishingHouseList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [prevImage, setPrevImage] = useState("");
  const [prevContent, setPrevContent] = useState("");
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
      const response = await axios.get("https://localhost:7061/api/Ebooks");

      if (response.status === 200) {
        const ebooksWithAuthorsAndCategoriesPromises = response.data.map(
          async (ebook) => {
            try {
              const ebookAuthorsResponse = await axios.get(
                `https://localhost:7061/api/BookAuthors/Book/${ebook.bookID}`
              );
              const ebookCategoriesResponse = await axios.get(
                `https://localhost:7061/api/CategoryBooks/Book/${ebook.bookID}`
              );

              const authors = Array.isArray(ebookAuthorsResponse.data)
                ? ebookAuthorsResponse.data
                : [];
              const categories = Array.isArray(ebookCategoriesResponse.data)
                ? ebookCategoriesResponse.data
                : [];

              return { ...ebook, authors, categories };
            } catch (error) {
              console.error(
                `Failed to fetch authors/categories for ebook ${ebook.bookID}:`,
                error
              );
              return { ...ebook, authors: [], categories: [] };
            }
          }
        );

        const ebooksWithAuthorsAndCategories = await Promise.all(
          ebooksWithAuthorsAndCategoriesPromises
        );
        setData(ebooksWithAuthorsAndCategories);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching ebooks:", error);
      toast.error("Failed to get ebooks: " + error.message);
    }
  };
  const handleFileChange = (e, setFile) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleEdit = (bookID) => {
    handleShow();
    axios
      .get(`https://localhost:7061/api/Book/${bookID}`)
      .then((result) => {
        const bookData = result.data.book || result.data;
        console.log("Fetched book data:", bookData);

        setEditEbookId(bookID);
        setEditISBN(bookData?.isbn || "");
        setPrevImage(preprocessImagePath(bookData?.image) || "");
        setPrevContent(bookData?.content || "");
        setEditTitle(bookData?.title || "");
        setEditPublicationDate(bookData?.publicationDate || "");
        setEditPageNumber(bookData?.pageNumber || "");
        setEditDescription(bookData?.description || "");
        setEditPrice(bookData?.price || "");
        setEditDateOfAddition(bookData?.dateOfadition || "");
        setEditType(bookData?.type || "");
        setSelectedPublishingHouse(bookData?.publishingHouseId || "");
        setSelectedStock(bookData?.stockId || "");

        const authors =
          bookData?.authors?.map((author) => author.authorID.toString()) || [];
        const categories =
          bookData?.categories?.map((category) =>
            category.categoryID.toString()
          ) || [];

        console.log("Selected Authors:", authors);
        console.log("Selected Categories:", categories);

        setSelectedAuthors(authors);
        setSelectedCategories(categories);
      })
      .catch((error) => {
        console.error("Failed to fetch book details:", error);
        toast.error("Failed to fetch Book: " + error.message);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !editTitle ||
      !editISBN ||
      !editPrice ||
      !selectedAuthors.length || // Ensure authors are selected
      !selectedCategories.length // Ensure categories are selected
    ) {
      toast.error(
        "Please ensure all fields are filled out, including authors and categories."
      );
      return;
    }

    const formData = new FormData();

    formData.append("bookID", editEbookId || 0);
    formData.append("isbn", editISBN || "N/A");
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
    formData.append("type", editType || "Ebook");
    formData.append(
      "publishingHouseId",
      parseInt(selectedPublishingHouse, 10) || null
    );
    formData.append("stockId", parseInt(selectedStock, 10) || null);

    selectedAuthors.forEach((authorId) => {
      formData.append("authorIds", authorId);
    });

    selectedCategories.forEach((categoryId) => {
      formData.append("categoryIds", categoryId);
    });

    if (editContent && editContent instanceof File) {
      formData.append("pdfFile", editContent);
    }

    if (editImage && editImage instanceof File) {
      formData.append("image", editImage);
    }

    axios
      .put(`https://localhost:7061/api/Ebooks/${editEbookId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Ebook has been updated");
      })
      .catch((error) => {
        console.error(
          "Failed to edit Ebook:",
          error.response ? error.response.data : error.message
        );
        toast.error("Failed to edit Ebook: " + error.message);
      });
  };

  const handleDelete = async (ebookID) => {
    if (window.confirm("Are you sure you want to delete this Ebook?")) {
      try {
        await axios.delete(`https://localhost:7061/api/Ebooks/${ebookID}`);
        toast.success("Ebook has been deleted");
        getData();
      } catch (error) {
        toast.error("Failed to delete ebook: " + error.message);
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setEditEbook({});
  };

  const preprocessImagePath = (path) => {
    if (!path) return null;
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return `https://localhost:7061/${path}`;
    }
  };

  const preprocessPdfPath = (path) => {
    if (!path) return path;

    const normalizedPath = path.replace(/\/{2,}/g, "/");
    const fileName = normalizedPath.split("/").pop();

    const shortUrl = `/${fileName}`;
    const host = window.location.origin;
    return `${host}${shortUrl}`;
  };

  const clear = () => {
    setEditISBN("");
    setEditImage("");
    setEditTitle("");
    setEditAuthors([]);
    setEditPublishingHouse("");
    setEditPublicationDate("");
    setEditPageNumber("");
    setEditDescription("");
    setEditPrice("");
    setEditDateOfAddition("");
    setEditType("");
    setEditStock("");
    setSelectedCategories([]);
    setEditContent("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="../add-ebooks">
          <Button variant="dark" className="btn-add">
            Add Ebook
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
        {" "}
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>ISBN</th>
            <th>Image</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Publishing House</th>
            <th>Publication Date</th>
            <th>Page Number</th>
            <th>Price</th>
            <th>Description</th>
            <th>Date of Addition</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Categories</th>
            <th>PDF</th>
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

              return (
                <tr key={item.bookID}>
                  <td>{index + 1}</td>
                  <td>{item.isbn}</td>
                  <td>
                    <img
                      src={imagePath || "/images/placeholder.jpg"}
                      alt="Ebook Cover"
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
                  <td>{truncateText(item.description, 50)}</td>
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
                  <td>
                    {item.content ? (
                      <a
                        href={preprocessPdfPath(item.content)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PDF
                      </a>
                    ) : (
                      "No PDF Available"
                    )}
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
              <td colSpan="16" className="text-center">
                No Ebooks Available
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
          <Modal.Title>Edit Ebook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formEbookId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={editEbookId}
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
                        style={{ width: "70px", height: "auto" }}
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
                <Form.Group controlId="formContent">
                  <Form.Label>PDF File</Form.Label>
                  <p>
                    {prevContent ? (
                      <a
                        href={preprocessPdfPath(prevContent)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View existing PDF
                      </a>
                    ) : (
                      "No PDF selected"
                    )}
                  </p>
                  <Form.Control
                    type="file"
                    onChange={(e) => handleFileChange(e, setEditContent)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Modal.Footer>
              <Button variant="outline-dark" onClick={handleClose}>
                Close
              </Button>
              <Button variant="outline-dark" type="submit">
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Ebooks;
