import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../App.css";

const AddOrders = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orderDate, setOrderDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [orderShipDate, setOrderShipDate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [countryID, setCountryID] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [countries, setCountries] = useState([]);
  const [discountID, setDiscountID] = useState(null);
  const [giftCardID, setGiftCardID] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [lastFourDigits, setLastFourDigits] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString());
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [discount, setDiscount] = useState([]);
  const [cartItemIds, setCartItemIds] = useState([]);
  const [giftCards, setGiftCards] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    fetchCountries();
    fetchGiftCards();
    fetchDiscount();
  }, []);
  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Countries");
      console.log(response.data); // Log the response data to the console
      if (Array.isArray(response.data)) {
        setCountries(response.data);
      } else {
        toast.error("Countries data is not an array.");
      }
    } catch (error) {
      toast.error("Failed to load countries: " + error.message);
    }
  };

  const fetchDiscount = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Discounts");
      setDiscount(response.data);
    } catch (error) {
      toast.error("Failed to load Discount: " + error.message);
    }
  };
  const fetchGiftCards = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/GiftCard");
      if (Array.isArray(response.data)) {
        setGiftCards(response.data);
      } else {
        toast.error("Gift cards data is not an array.");
      }
    } catch (error) {
      toast.error("Failed to load gift cards: " + error.message);
    }
  };

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Order`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };
  const handleSave = () => {
    const url = "https://localhost:7061/api/Order";
    const data = {
      ordersId: 0,
      orderDate: orderDate,
      orderShipDate: orderShipDate,
      address: address,
      city: city,
      countryID: selectedCountry,
      zipCode: zipCode,
      email: email,
      discountID: selectedDiscount,
      giftCardID: giftCardID,
      payment: {
        amount: paymentAmount,
        paymentMethod: paymentMethod,
        lastFourDigits: lastFourDigits,
        transactionID: transactionID,
      },
      orderDetails: {
        totalPrice: totalPrice,
        invoiceDate: invoiceDate,
        orderShipDate: orderShipDate,
        invoiceNumber: invoiceNumber,
        cartItemIds: cartItemIds,
      },
      userID: 3, // Replace with the actual user ID
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Orders have been added successfully");
      })
      .catch((error) => {
        toast.error("Failed to add orders: " + error.message);
      });
  };

  const clear = () => {
    setOrderDate(new Date().toISOString().split("T")[0]); // Reset to current date
    setOrderShipDate("");
    setAddress("");
    setCity("");
    setCountryID("");
    setZipCode("");
    setEmail("");
    setDiscountID(null);
    setGiftCardID(null);
    setPaymentAmount(0);
    setPaymentMethod("Credit Card");
    setLastFourDigits("");
    setTransactionID("");
    setTotalPrice(0);
    setInvoiceDate(new Date().toISOString());
    setInvoiceNumber("");
    setCartItemIds([]);
  };

  const handleClear = () => {
    clear();
  };

  return (
    <Form className="ordersForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formOrderDate">
            <Form.Label>Order Date</Form.Label>
            <Form.Control
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formOrderShipDate">
            <Form.Label>Order Ship Date</Form.Label>
            <Form.Control
              type="date"
              value={orderShipDate}
              onChange={(e) => setOrderShipDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
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
        <Col>
          <Form.Group controlId="formZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                <option key={discounts.discountID} value={discounts.discountID}>
                  {discounts.discountAmount}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formGiftCardID">
            <Form.Label>Gift Card</Form.Label>
            <Form.Control
              as="select"
              value={giftCardID}
              onChange={(e) => setGiftCardID(e.target.value)}
            >
              <option value="">Select Gift Card</option>
              {giftCards.map((giftCard) => (
                <option key={giftCard.giftCardID} value={giftCard.giftCardID}>
                  {giftCard.code} - {giftCard.amount}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formPaymentAmount">
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Payment Amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPaymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Cash On Delivery">Cash On Delivery</option>
              {/* Add more payment methods as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formLastFourDigits">
            <Form.Label>Last Four Digits</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Four Digits"
              value={lastFourDigits}
              onChange={(e) => setLastFourDigits(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formTransactionID">
            <Form.Label>Transaction ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Transaction ID"
              value={transactionID}
              onChange={(e) => setTransactionID(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>{" "}
      <Row>
        <Col>
          <Form.Group controlId="formTotalPrice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Total Price"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formInvoiceDate">
            <Form.Label>Invoice Date</Form.Label>
            <Form.Control
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formInvoiceNumber">
            <Form.Label>Invoice Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Invoice Number"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formCartItemIds">
            <Form.Label>Cart Item IDs</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Cart Item IDs (comma separated)"
              value={cartItemIds}
              onChange={(e) =>
                setCartItemIds(e.target.value.split(",").map((id) => id.trim()))
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Link to="../Orders">
        <Button variant="dark" className="btn-add" onClick={handleSave}>
          Add Orders
        </Button>
      </Link>
      <Button variant="dark" className="btn-add" onClick={handleClear}>
        Clear
      </Button>
    </Form>
  );
};

export default AddOrders;
