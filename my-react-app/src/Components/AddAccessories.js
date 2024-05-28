import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddAccessories = () => {
  // const [AccessoriesID, setAccessoriesID] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [description, setDescription] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [price, setPrice] = useState("");
  const [dateOfaddition, setDateOfAddition] = useState("");
  // const [stock, setStock] = useState("");
  // const [success, setSuccess] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Accessories`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
    // axios
    //   .get(
    //     `https://localhost:7061/api/Stock`
    //   )
    //   .then((result) => {
    //     setStock(result.data);
    //   })
    //   .catch((error) => {
    //     toast.error("Failed to get Stock: "+error.message);
    //   });
  };

  const handleSave = () => {
    const url = `https://localhost:7061/api/Accessories`;
    const data = {
      // AccessoriesID: AddAccessories,
      Image: image,
      Name: name,
      Seller: seller,
      Description: description,
      Dimensions: dimensions,
      Price: price,
      DateOfaddition: dateOfaddition,
      // Stock: Stock,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Accessory has been added");
        // setSuccess(true);
      })
      .catch((error) => {
        toast.error("Failed to add Accessory: " + error.message);
      });
  };
  const clear = () => {
    // setAccessoriesID("");
    setImage("");
    setName("");
    setSeller("");
    setDescription("");
    setDimensions("");
    setPrice("");
    setDateOfAddition("");
    // setStock("");
  };
  const handleClear = () => {
    clear();
  };
  return (
    <Form className="AccessoriesForm ">
      <ToastContainer></ToastContainer>
      <Row>
        {/* <Col> */}
          {/* <Form.Group controlId="formAccessoriesID">
            <Form.Label>AccessoriesID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Accessories ID"
              name="AccessoriesID"
              value={AccessoriesID}
              onChange={(e) => setAccessoriesID(e.target.value)}
            />
          </Form.Group>
        </Col> */}
        <Col>
          <Form.Group controlAccessoriesID="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlAccessoriesID="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlAccessoriesID="formSeller">
            <Form.Label>Seller</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Seller"
              name="Seller"
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlAccessoriesID="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlAccessoriesID="formDimensions">
            <Form.Label>Dimensions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Dimensions"
              name="Dimensions"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlAccessoriesID="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Price"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
        <Form.Group controlAccessoriesID="formDateOfAddition">
          <Form.Label>Date of Addition</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of addition"
            name="DateOfAddition"
            value={dateOfaddition}
            onChange={(e) => setDateOfAddition(e.target.value)}
          />
        </Form.Group>
      </Col>
      
      </Row>

    {/*   <Row>
      <Col>
          <Form.Group controlAccessoriesID="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Stock"
              name="Stock"
              value={Stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row> */}

      <Row>
        {" "}
        <Col>
          <Link to="../Accessories">
            <Button
              variant="dark"
              className="btn-addAccessories"
              onClick={handleSave}>
              Add
            </Button>
          </Link>
        </Col>

        <Col>
          <Button
            variant="dark"
            className="btn-addAccessories"
            onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default AddAccessories;
