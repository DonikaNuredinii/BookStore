import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

const Books = () => {
  const [show, setShow] = useState(false);

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

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    console.log(data);
    axios
      .get(`https://localhost:7061/api/Book`)
      .then((result) => {
        setData(result.data);
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

    console.log("Received BookID:", editBookId);
    axios
      .get(`https://localhost:7061/api/Book/${editBookId}`)
      .then((result) => {
        const bookData = result.data;
        seteditBookId(bookID);
        setEditISBN(bookData.isbn);
        setEditImage(bookData.image);
        setEditPublicationDate(bookData.publicationDate);
        setEditPageNumber(bookData.pageNumber);
        setEditDescription(bookData.description);
        setEditPrice(bookData.price);
        setEditDateOfAddition(bookData.dateOfadition);
        setEditType(bookData.type);
        if (bookData.bookAuthors && bookData.bookAuthors.length > 0) {
          setEditAuthors([bookData.bookAuthors[0].author.name]);
        } else {
          setEditAuthors([]);
        }

        if (bookData.stock) {
          setEditStock(bookData.stock.quantity);
        }

        if (bookData.publishingHouse) {
          seteditPublishingHouse(bookData.publishingHouse.houseName);
        }
      })
      .catch((error) => {
        toast.error("Failed to get Book: " + error.message);
      });
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

  const handleUpdate = () => {
    const url = `https://localhost:7061/api/Book/${editBookId}`;
    const data = {
      BookID: editBookId,
      ISBN: editISBN,
      Image: editImage,
      Title: editTitle,
      Author: editAuthors,
      PublishingHouse: editPublishingHouse,
      PublicationDate: editPublicationDate,
      PageNumber: editPageNumber,
      Description: editDescription,
      Price: editPrice,
      DateOfadition: editDateOfAddition,
      Type: editType,
      Stock: editStock,
    };
    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Book has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit Book: " + error.message);
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
        <Link to="/add-books">
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
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.isbn}</td>
                    <td>
                      <img src={item.image} alt="Book Cover" />
                    </td>
                    <td>{item.title}</td>

                    <td>
                      {item.bookAuthors
                        .map((author) => author.author.name)
                        .join(", ")}
                    </td>
                    <td>
                      {item.publishingHouse
                        ? item.publishingHouse.houseName
                        : ""}
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
                        onClick={() => handleEdit(item.BookID)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handleDelete(item.BookID)}
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
                    value={editPublishingHouse}
                    onChange={(e) => seteditPublishingHouse(e.target.value)}
                  >
                    <option value="">Select Publishing House</option>
                    {editPublishingHouse &&
                      editPublishingHouse.length > 0 &&
                      editPublishingHouse.map((publishingHouseItem) => (
                        <option
                          key={publishingHouseItem.id}
                          value={publishingHouseItem.id}
                        >
                          {publishingHouseItem.name}
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
                    {editAuthors &&
                      editAuthors.map((author) => (
                        <option key={author.id} value={author.id}>
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
                    type="text"
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
                    value={editStock}
                    onChange={(e) => setEditStock(e.target.value)}
                  >
                    <option value="">Select Stock</option>
                    {editStock.map((stock) => (
                      <option key={stock.id} value={stock.id}>
                        {stock.amount}
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
