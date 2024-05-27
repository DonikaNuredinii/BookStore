import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Accessories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editAccessoriesID, setEditAccessoriesID] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editName, setEditName] = useState("");
  const [editSeller, setEditSeller] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDimensions, setEditDimensions] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editDateOfAddition, setEditDateOfAddition] = useState("");
  const [editStock, setEditStock] = useState([]);

  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log(Data);
    axios
      .get(`https://localhost:7061/api/Accessories`)
      .then((result) => {
        setData(result.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Edit
  const handleEdit = (AccessoriesID) => {

    handleShow();
    console.log("Received AccessoriesID: ", editAccessoriesID);

    axios
      .get(`https://localhost:7061/api/Accessories/${editAccessoriesID}`)
      .then((result) => {
        const accessoriesData = result.Data;
        setEditAccessoriesID(AccessoriesID);
        setEditImage(accessoriesData.Image);
        setEditName(accessoriesData.Name);
        setEditSeller(accessoriesData.Seller);
        setEditDescription(accessoriesData.Description);
        setEditDimensions(accessoriesData.Dimensions);
        setEditPrice(accessoriesData.Price);
        setEditQuantity(accessoriesData.Quantity);
        setEditDateOfAddition(accessoriesData.DateOfAddition);
        setEditStock(accessoriesData.Stock);
      })

      .catch((error) => {
        toast.error("Failed to get Acessory: " + error.message);
      });
  };

  //Delete
  const handleDelete = (AccessoriesID) => {
    if (
      window.confirm("Are you sure you want to delete this Accessory item?") ===
      true
    ) {
      axios
        .delete(`https://localhost:7061/api/Accessories/${AccessoriesID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Accessory item has been deleted!");
          }
        })
        .catch((error) => {
          toast.error("Failed to delete Accessory item!" + error.message);
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7061/api/Accessories/${editAccessoriesID}`;
    const Data = {
      AccessoriesID: editAccessoriesID,
      Image: editImage,
      Name: editName,
      Description: editDescription,
      Dimensions: editDimensions,
      Price: editPrice,
      Quantity: editQuantity,
      DateOfAddition:editDateOfAddition,
      Stock: editStock,
    };

    axios
      .put(url, Data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Accessory has been updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to edit Accessory: " + error.message);
      });
  };

  const clear = () => {
    setEditAccessoriesID("");
    setEditImage("");
    setEditName("");
    setEditSeller("");
    setEditDimensions("");
    setEditDescription("");
    setEditPrice("");
    setEditQuantity("");
    setEditDateOfAddition("");
    setEditStock("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="../add-accessories">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>AccessoriesID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Seller</th>
            <th>Description</th>
            <th>Dimensions</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>DateOfAddition</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data && Data.length > 0
            ? Data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.AccessoriesID}</td>
                    <td>
                      <img src={item.image} alt="Acessories" />
                    </td>
                    <td>{item.Name}</td>
                    <td>{item.Seller}</td>
                    <td>{item.Description}</td>
                    <td>{item.Dimensions}</td>
                    <td>{item.Price}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.DateOfAddition}</td>
                    <td>{item.Stock}</td>
                    <td colSpan={2} className="btn">
                      <Button
                        variant="outline-dark"
                        className="btn-edit"
                        onClick={() => handleEdit(item.AccessoriesID)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handleDelete(item.AccessoriesID)}
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
          <Modal.Title>Edit Accessories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formAccessoriesID">
                  <Form.Label>AccessoriesID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AccessoriesID"
                    name="AccessoriesID"
                    value={editAccessoriesID}
                    onChange={(e) => setEditAccessoriesID(e.target.value)}
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
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="Name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formSeller">
                  <Form.Label>Seller</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Seller"
                    name="Seller"
                    value={editSeller}
                    onChange={(e) => setEditSeller(e.target.value)}
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
                    placeholder="Enter Description"
                    name="Description"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formDimensions">
                  <Form.Label>Dimensions</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Dimensions"
                    name="Dimensions"
                    value={editDimensions}
                    onChange={(e) => setEditDimensions(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
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

              <Col>
                <Form.Group controlId="formQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Quantity"
                    name="Quantity"
                    value={editQuantity}
                    onChange={(e) => setEditQuantity(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group controlId="formDateOfAddition">
                        <Form.Label>Date Of Addition</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Date Of Addition"
                            name="DateOfAddition"
                            value={editDateOfAddition}
                            onChange={(e) => setEditDateOfAddition(e.target.value)}
                        />
                    </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId="formStock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    as="select"
                    value={editStock}
                    onChange={(e) => setEditStock(e.target.value)}
                  >
                    <option value="">Select Stock</option>
                    {editStock.map((Stock) => (
                      <option key={Stock.id} value={Stock.id}>
                        {Stock.amount}
                      </option>
                    ))}
                  </Form.Control>
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

export default Accessories;
