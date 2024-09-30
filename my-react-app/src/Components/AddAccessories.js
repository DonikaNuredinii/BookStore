import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddAccessories = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [description, setDescription] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [price, setPrice] = useState("");
  const [dateOfaddition, setDateOfAddition] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [stockList, setStockList] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    getStocks();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    const requestData = {
      Image: image,
      Name: name,
      Seller: seller,
      Description: description,
      Dimensions: dimensions,
      Price: parseFloat(price), // Convert to number
      DateOfaddition: dateOfaddition,
      StockId: selectedStock,
    };

    console.log("Request Data:", requestData);

    try {
      const url = `https://localhost:7061/api/Accessories`;

      const response = await axios.post(url, requestData);

      clear();
      toast.success("Accessory has been added.");
      setTimeout(() => {
        navigate("/dashboard/Accessories");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to add Accessory";
      toast.error(`Failed to add Accessory: ${errorMessage}`);
    }
  };

  const clear = () => {
    setImage("");
    setName("");
    setSeller("");
    setDescription("");
    setDimensions("");
    setPrice("");
    setDateOfAddition("");
    setSelectedStock("");
  };

  const handleClear = () => {
    clear();
  };

  return (
    <Form className="AccessoriesForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formSeller">
            <Form.Label>Seller</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Seller"
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
            />
          </Form.Group>
        </Col>

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
          <Form.Group controlId="formDimensions">
            <Form.Label>Dimensions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Dimensions"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
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
              value={dateOfaddition}
              onChange={(e) => setDateOfAddition(e.target.value)}
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
          <Link to="../Accessories">
            <Button
              variant="dark"
              className="btn-addAccessories"
              onClick={handleSave}
            >
              Add Accessory
            </Button>
          </Link>
        </Col>

        <Col>
          <Button
            variant="dark"
            className="btn-addAccessories"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddAccessories;
