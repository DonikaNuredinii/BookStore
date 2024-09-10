import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddEbooks = () => {
  const [isbn, setISBN] = useState("");
  const [image, setImage] = useState(null); // Change to file input
  const [title, setTitle] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dateOfadition, setDateOfAddition] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishingHouse, setSelectedPublishingHouse] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // Add selected categories
  const [pdfFile, setPdfFile] = useState(null); // Change to file input

  const [authorsList, setAuthorsList] = useState([]);
  const [publishingHouseList, setPublishingHouseList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]); // Categories list
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getAuthors();
    getPublishingHouses();
    getStocks();
    getCategories(); // Fetch categories on load
  }, []);

  const getAuthors = () => {
    axios
      .get("https://localhost:7061/api/Author")
      .then((response) => setAuthorsList(response.data))
      .catch((error) =>
        toast.error("Failed to fetch authors: " + error.message)
      );
  };

  const getPublishingHouses = () => {
    axios
      .get("https://localhost:7061/api/PublishingHouses")
      .then((response) => setPublishingHouseList(response.data))
      .catch((error) =>
        toast.error("Failed to get publishing houses: " + error.message)
      );
  };

  const getStocks = () => {
    axios
      .get("https://localhost:7061/api/Stock")
      .then((response) => setStockList(response.data))
      .catch((error) => toast.error("Failed to get stocks: " + error.message));
  };

  const getCategories = () => {
    axios
      .get("https://localhost:7061/api/Category")
      .then((response) => setCategoriesList(response.data))
      .catch((error) =>
        toast.error("Failed to get categories: " + error.message)
      );
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("isbn", isbn);
    formData.append("title", title);
    formData.append("publicationDate", publicationDate);
    formData.append("pageNumber", pageNumber);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("dateOfadition", dateOfadition);
    formData.append("publishingHouseId", selectedPublishingHouse);
    formData.append("stockId", selectedStock);

    // Append each author ID separately
    selectedAuthors.forEach((authorId) => {
      formData.append("authorIds", authorId);
    });

    // Append each category ID separately
    selectedCategories.forEach((categoryId) => {
      formData.append("categoryIds", categoryId);
    });

    // Append files if selected
    if (pdfFile) {
      formData.append("pdfFile", pdfFile);
    }

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "https://localhost:7061/api/Ebooks",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      clear();
      toast.success("Ebook has been added");
      setSuccess(true);
    } catch (error) {
      toast.error("Failed to add Ebook: " + error.message);
    }
  };

  const clear = () => {
    setISBN("");
    setImage(null); // Clear image file
    setPdfFile(null); // Clear PDF file
    setTitle("");
    setPublicationDate("");
    setPageNumber("");
    setDescription("");
    setPrice("");
    setDateOfAddition("");
    setSelectedAuthors([]);
    setSelectedPublishingHouse("");
    setSelectedStock("");
    setSelectedCategories([]);
  };

  return (
    <Form className="ebookForm" onSubmit={handleSave}>
      <ToastContainer />
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
              type="file" // File input for image
              onChange={(e) => setImage(e.target.files[0])}
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
      </Row>
      <Row>
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
                    selectedAuthors.filter((author) => author !== clickedValue)
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
                  setSelectedCategories([...selectedCategories, clickedValue]);
                }
              }}
            >
              {categoriesList.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.genre}
                </option>
              ))}
            </Form.Control>
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
          <Form.Group controlId="formPdfFile">
            <Form.Label>PDF File</Form.Label>
            <Form.Control
              type="file" // File input for PDF
              onChange={(e) => setPdfFile(e.target.files[0])}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark" className="btn-add" type="submit">
            Add Ebook
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

export default AddEbooks;
