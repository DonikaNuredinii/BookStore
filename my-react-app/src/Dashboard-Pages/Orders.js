import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editOrdersId, setEditOrdersId] = useState("");
  const [editOrderDate, setEditOrderDate] = useState("");
  const [editOrderShipDate, setEditOrderShipDate] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editCountry, setEditCountry] = useState("");
  const [editZipCode, setEditZipCode] = useState("");
  const [editDiscountId, setEditDiscountID] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Orders`)
      .then((result) => {
        console.log(result.data.creationDate);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //edit
  const handleEdit = (ordersId) => {
    handleShow();
    setEditOrdersId(ordersId);
    axios
      .get(`https://localhost:7061/api/Orders/${ordersId}`)
      .then((result) => {
        setEditOrderDate(result.data.orderDate);
        setEditOrderShipDate(result.data.orderShipDate);
        setEditAddress(result.data.address);
        setEditCity(result.data.city);
        setEditCountry(result.data.country);
        setEditZipCode(result.data.zipCode);
        setEditDiscountID(result.data.setEditDiscountId);
      })
      .catch((error) => {
        toast.error("Failed to get Orders: " + error.message);
      });
  };

  //delete
  const handleDelete = (ordersId) => {
    if (window.confirm("Are you sure you want to delete this Order") === true) {
      axios
        .delete(`https://localhost:7061/api/Category/${ordersId}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Orders has been deleted");
          }
        })
        .catch((error) => {
          toast.error("Failed to delete Orders: " + error.message);
        });
    }
  };

  //update

  const handleUpdate = (e) => {
    const url = `https://localhost:7061/api/Orders/${editOrdersId}`;
    const data = {
      OrdersId: editOrdersId,
      OrderDate: editOrderDate,
      OrderShipDate: editOrderShipDate,
      Address: editAddress,
      City: editCity,
      Country: editCountry,
      ZipCode: editZipCode,
      DiscountId: editDiscountId,
    };
    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Orders has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit Orders: " + error.message);
      });
  };
  const clear = () => {
    setEditOrderDate("");
    setEditOrderShipDate("");
    setEditAddress("");
    setEditCity("");
    setEditCountry("");
    setEditZipCode("");
    setEditDiscountID("");
  };

  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <div className="add-button">
        <Link to="../add-orders">
          <Button variant="dark" className="btn-add">
            Add Orders
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>OrderDate</th>
            <th>OrderShipDate</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>ZipCode</th>
            <th>DiscountId</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={item.orderId}>
                    <td>{index + 1}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.orderShipDate}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.country}</td>
                    <td>{item.zipCode}</td>
                    <td>{item.discountId}</td>
                    <td colSpan={2} className="btn">
                      <Button
                        variant="outline-dark"
                        className="btn-edit"
                        onClick={() => handleEdit(item.ordersId)}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handleDelete(item.ordersId)}
                      >
                        <i class="bi bi-trash"></i>
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
          <Modal.Title>Edit Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formOrdersId">
                  <Form.Label>Orders Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Orders ID"
                    name="ordersID"
                    value={editOrdersId}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formOrderDate">
                  <Form.Label>OrderDate</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter OrderDate"
                    name="OrderDate"
                    value={editOrderDate}
                    onChange={(e) => setEditOrderDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formOrderShipDate">
                  <Form.Label>OrderShipDate</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter OrderShipDate"
                    name="OrdershipDate"
                    value={editOrderShipDate}
                    onChange={(e) => setEditOrderShipDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    name="Address"
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    value={editCity}
                    onChange={(e) => setEditCity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Country"
                    value={editCountry}
                    onChange={(e) => setEditCountry(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromZipCode">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter ZipCode"
                    value={editZipCode}
                    onChange={(e) => setEditZipCode(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromDiscountId">
                  <Form.Label>DiscountId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter DiscountId"
                    value={editDiscountId}
                    onChange={(e) => setEditDiscountID(e.target.value)}
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
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Orders;
