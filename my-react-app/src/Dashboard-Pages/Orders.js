import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = ({ searchQuery }) => {
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
  const [userFirstName, setUserFirstName] = useState("");
  const [countries, setCountries] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDiscountID, setEditDiscountID] = useState("");
  const [editGiftCardID, setEditGiftCardID] = useState("");
  const [editPaymentAmount, setEditPaymentAmount] = useState(0);
  const [editPaymentMethod, setEditPaymentMethod] = useState("");
  const [editLastFourDigits, setEditLastFourDigits] = useState("");
  const [editTransactionId, setEditTransactionId] = useState("");
  const [editTotalPrice, setEditTotalPrice] = useState(0);
  const [editInvoiceDate, setEditInvoiceDate] = useState("");
  const [editInvoiceNumber, setEditInvoiceNumber] = useState("");
  const [editCartItemIds, setEditCartItemIds] = useState([]);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (searchQuery) {
      filterData(searchQuery);
    } else {
      getData();
    }
  }, [searchQuery]);
  const filterData = (query) => {
    if (!query) {
      getData();
      return;
    }

    const filteredData = data.filter((order) =>
      order.invoiceNumber.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Order`)
      .then((result) => {
        console.log(result.data.creationDate);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/Countries"
        );
        setCountries(response.data);
      } catch (error) {
        toast.error("Failed to load countries: " + error.message);
      }
    };

    if (show) {
      fetchCountries();
    }
  }, [show]);
  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/Discounts"
        );
        setDiscount(response.data);
      } catch (error) {
        toast.error("Failed to load Discount: " + error.message);
      }
    };

    if (show) {
      fetchDiscount();
    }
  }, [show]);

  //edit
  const handleEdit = (ordersId) => {
    handleShow();
    setEditOrdersId(ordersId);

    axios
      .get(`https://localhost:7061/api/Order/${ordersId}`)
      .then((result) => {
        console.log(result.data);
        const order = result.data;

        // Safely handle null or undefined dates
        setEditOrderDate(order.orderDate ? order.orderDate.split("T")[0] : "");
        setEditOrderShipDate(order.orderShipDate?.split("T")[0] || "");

        setEditOrdersId(order.ordersId);
        setEditAddress(order.address);
        setEditCity(order.city);
        setEditCountry(order.countryID);
        setEditZipCode(order.zipCode);
        setEditEmail(order.email);
        setEditDiscountID(order.discountID);
        setEditGiftCardID(order.giftCardID);
        setEditPaymentAmount(order.payment.amount);
        setEditPaymentMethod(order.payment.paymentMethod);
        setEditLastFourDigits(order.payment.lastFourDigits);
        setEditTransactionId(order.payment.transactionID);
        setEditTotalPrice(order.orderDetails.totalPrice);
        setEditInvoiceDate(order.orderDetails.invoiceDate);
        setEditInvoiceNumber(order.orderDetails.invoiceNumber);
        setEditCartItemIds(order.orderDetails.cartItemIds);
      })
      .catch((error) => {
        toast.error("Failed to get Orders: " + error.message);
      });
  };

  //delete
  const handleDelete = (ordersId) => {
    if (window.confirm("Are you sure you want to delete this Order") === true) {
      axios
        .delete(`https://localhost:7061/api/Order/${ordersId}`)
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

  const handleUpdate = () => {
    const url = `https://localhost:7061/api/Order/${editOrdersId}`;
    const data = {
      OrdersId: editOrdersId,
      OrderDate: editOrderDate,
      OrderShipDate: editOrderShipDate,
      Address: editAddress,
      City: editCity,
      CountryID: selectedCountry,
      ZipCode: editZipCode,
      Email: editEmail,
      DiscountID: editDiscountID,
      GiftCardID: editGiftCardID,
      Payment: {
        amount: editPaymentAmount,
        paymentMethod: editPaymentMethod || "",
        lastFourDigits: editLastFourDigits || "",
        transactionID: editTransactionId || "",
      },
      OrderDetails: {
        totalPrice: editTotalPrice,
        invoiceDate: editInvoiceDate || "",
        invoiceNumber: editInvoiceNumber || "",
        cartItemIds: editCartItemIds || [],
      },
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        toast.success("Order has been updated");
      })
      .catch((error) => {
        toast.error("Failed to edit Order: " + error.message);
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
            <th>User</th>
            <th>Order Date</th>
            <th>Ship Date</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Zip Code</th>
            <th>Total Price</th>
            <th>Invoice Date</th>
            <th>Invoice Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={item.orderId}>
                    <td>{index + 1}</td>
                    <td>{item.userFirstName}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.orderShipDate}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.countryName}</td>
                    <td>{item.zipCode}</td>
                    <td>{item.totalPrice}</td>
                    <td>{item.invoiceDate}</td>
                    <td>{item.invoiceNumber}</td>
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
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="fromCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    value={editCity}
                    onChange={(e) => setEditCity(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.countryID} value={country.countryID}>
                        {country.countryName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="fromZipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter ZipCode"
                    value={editZipCode}
                    onChange={(e) => setEditZipCode(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDiscount">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedDiscount}
                    onChange={(e) => setSelectedDiscount(e.target.value)}
                  >
                    <option value="">Select Discount</option>
                    {discount.map((discounts) => (
                      <option
                        key={discounts.discountID}
                        value={discounts.discountID}
                      >
                        {discounts.discountAmount}
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
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Orders;
