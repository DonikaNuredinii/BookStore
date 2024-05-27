import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddOrders = () => {
  const [orderDate, setOrderDate] = useState("");
  const [orderShipDate, setOrderShipDate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCoutry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [discountId, setDiscountId] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Orders`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };
  const handleSave = () => {
    const url = "https://localhost:7061/api/Orders";
    const data = {
      OrderDate: orderDate,
      OrderShipDate: orderShipDate,
      Address: address,
      City: city,
      Country: country,
      ZipCode: zipCode,
      DiscountId: discountId,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Orders has been added successfully");
      })
      .catch((error) => {
        toast.error("Failed to add orders: " + error.message);
      });
  };
  const clear = () => {
    setOrderDate("");
    orderShipDate("");
    setAddress("");
    setCity("");
    setCoutry("");
    setZipCode("");
    setDiscountId("");
  };
  const handleClear = () => {
    clear();
  };

  return (
    <Form className="ordersForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlOrdersId="formOrderDate">
            <Form.Label>OrderDate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter OrderDate"
              name="orderDate"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlOrdersId="formOrderShipDate">
            <Form.Label>OrderShipDate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter OrderShipDate"
              name="orderShipDate"
              value={orderShipDate}
              onChange={(e) => setOrderShipDate(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlOrdersId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlOrdersId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlOrdersId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              name="country"
              value={country}
              onChange={(e) => setCoutry(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlOrdersId="formZipCode">
            <Form.Label>ZipCode</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter zipCode"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlOrdersId="formDiscountId">
            <Form.Label>DiscountId</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter DiscountId"
              name="discountID"
              value={discountId}
              onChange={(e) => setDiscountId(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {""}
        <Col>
          <Link to="../Orders">
            <Button
              variant="dark"
              className="btn-addOrders"
              onClick={handleSave}
            >
              Add Orders
            </Button>
          </Link>
        </Col>
        <Col>
          <Button
            variant="dark"
            className="btn-addOrders"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddOrders;
