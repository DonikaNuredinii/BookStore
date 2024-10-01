import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const Quotes = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [editQuoteId, setEditQuoteId] = useState("");
  const [editText, setEditText] = useState("");
  const [editAuthors, setEditAuthors] = useState([]);
  const [selectedAuthorId, setSelectedAuthorId] = useState(""); // State for selected author ID
  const [data, setData] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);
  const adminToken = localStorage.getItem("adminToken");
  console.log("Admin Token: ", adminToken);

  useEffect(() => {
    fetchData();
    getAuthors();
  }, []);
  useEffect(() => {
    if (searchQuery) {
      filterData(searchQuery);
    } else {
      fetchData();
    }
  }, [searchQuery]);
  const filterData = (query) => {
    if (!query) {
      fetchData();
      return;
    }

    const filteredData = data.filter((quote) =>
      quote.text.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };
  const fetchData = async () => {
    try {
      const quotesResponse = await axios.get(
        "https://localhost:7061/api/Quotes"
      );
      if (quotesResponse.status === 200) {
        const quotes = quotesResponse.data;
        const quotesWithAuthorsPromises = quotes.map(async (quote) => {
          try {
            const authorsResponse = await axios.get(
              `https://localhost:7061/api/AuthorQuotes/Quote/${quote.quoteID}`
            );
            const authors = Array.isArray(authorsResponse.data)
              ? authorsResponse.data.map((author) => author.authorName)
              : [];
            return { ...quote, authors };
          } catch (authorError) {
            console.error(
              `Failed to fetch authors for quote ${quote.quoteID}:`,
              authorError
            );
            return { ...quote, authors: [] };
          }
        });
        const quotesWithAuthors = await Promise.all(quotesWithAuthorsPromises);
        setData(quotesWithAuthors);
      } else {
        throw new Error(
          `Failed to fetch data from API. Status: ${quotesResponse.status}`
        );
      }
    } catch (error) {
      toast.error("Failed to get quotes and authors: " + error.message);
    }
  };

  const getAuthors = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Author");
      setAuthorsList(response.data);
    } catch (error) {
      toast.error("Failed to fetch authors: " + error.message);
    }
  };

  const handleEdit = (quoteID) => {
    handleShow();
    axios
      .get(`https://localhost:7061/api/Quotes/${quoteID}`)
      .then((result) => {
        const quoteData = result.data;
        setEditQuoteId(quoteID);
        setEditText(quoteData.text);
        axios
          .get(`https://localhost:7061/api/AuthorQuotes/Quote/${quoteID}`,{
            headers: {
              Authorization: `Bearer ${adminToken}`, 
            },
          })
          .then((authorsResponse) => {
            const authorIds = authorsResponse.data.map(
              (author) => author.authorID
            );
            setEditAuthors(authorIds);
            setSelectedAuthorId(authorIds[0] || ""); // Set the first author ID as selected
          })
          .catch((error) => {
            console.error("Failed to fetch authors for editing:", error);
            setEditAuthors([]);
          });
      })
      .catch((error) => {
        toast.error("Failed to get Quote: " + error.message);
      });
  };

  const handleUpdate = async (e) => {
    const adminToken = localStorage.getItem("token"); 
    e.preventDefault();

    if (!selectedAuthorId || !editQuoteId) {
      toast.error("Author ID and Quote ID are required.");
      return;
    }

    const payload = {
      authorId: parseInt(selectedAuthorId, 10),
    };

    try {
      const response = await axios.put(
        `https://localhost:7061/api/AuthorQuotes/${editQuoteId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",        
            Authorization: `Bearer ${adminToken}`,     
          },
        }
      );

      if (response.status === 204) {
        toast.success("Quote has been updated");
        handleClose();
        fetchData();
        clear();
      } else {
        throw new Error("Failed to update quote");
      }
    } catch (error) {
      const errorMessage = error.response?.data.errors
        ? Object.values(error.response.data.errors).flat().join(", ")
        : error.response?.data.message || error.message;
      toast.error(
        `Failed to update author-quote relationship: ${errorMessage}`
      );
    }
  };

  const handleDelete = async (quoteID) => {
    const adminToken = localStorage.getItem("token"); 
    if (window.confirm("Are you sure you want to delete this Quote")) {
      try {
        await axios.delete(`https://localhost:7061/api/Quotes/${quoteID}`, {
          headers: {
            Authorization: `Bearer ${adminToken}`, 
          },
        })
        toast.success("Quote has been deleted");
        fetchData();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized. Please check your admin token.");
        } else {
          toast.error("Failed to delete this Author: " + error.message);
        }
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    clear();
  };

  const handleShow = () => setShow(true);

  const clear = () => {
    setEditQuoteId("");
    setEditText("");
    setEditAuthors([]);
    setSelectedAuthorId("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="../add-quotes">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Text</th>
            <th>Author(s)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.quoteID}>
                <td>{index + 1}</td>
                <td>{item.text}</td>
                <td>
                  {item.authors.length > 0
                    ? item.authors.join(", ")
                    : "No authors"}
                </td>
                <td colSpan={2} className="btn">
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.quoteID)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.quoteID)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Quotes Available
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
          <Modal.Title>Edit Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formQuoteId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={editQuoteId}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formText">
                  <Form.Label>Text</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter quote text"
                    name="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formAuthors">
                  <Form.Label>Authors</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedAuthorId}
                    onChange={(e) => setSelectedAuthorId(e.target.value)}
                  >
                    <option value="">Select Author</option>
                    {authorsList.map((author) => (
                      <option key={author.authorID} value={author.authorID}>
                        {author.name}
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

export default Quotes;
