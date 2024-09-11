import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const image = require.context(
  "../Images/ImazhetAksesorie",
  false,
  /\.(png|jpe?g|svg)$/
);
const Accessories = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [editAccessoriesID, setEditAccessoriesID] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editName, setEditName] = useState("");
  const [editSeller, setEditSeller] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDimensions, setEditDimensions] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDateOfAddition, setEditDateOfAddition] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [stockList, setStockList] = useState([]);
  const [editStock, setEditStock] = useState("");
  const [editAccessories, setEditAccessories] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    getStocks();
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

    const filteredData = data.filter((accessories) =>
      accessories.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/Accessories"
      );
      console.log("API Response:", response.data);

      setData(response.data);
    } catch (error) {
      console.error("Error fetching accessories:", error);
      toast.error(
        "Failed to get accessories: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

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

  //Edit
  const handleEdit = (accessoriesID) => {
    handleShow();

    axios
      .get(`https://localhost:7061/api/Accessories/${editAccessoriesID}`)
      .then((result) => {
        const accessoriesData = result.data;

        setEditAccessoriesID(accessoriesID);
        setEditImage(accessoriesData.image);
        setEditName(accessoriesData.name);
        setEditSeller(accessoriesData.seller);
        setEditDescription(accessoriesData.description);
        setEditDimensions(accessoriesData.dimensions);
        setEditPrice(accessoriesData.price);
        setEditDateOfAddition(accessoriesData.dateOfAddition);
        setEditStock(accessoriesData.Stock);
        setSelectedStock(accessoriesData.Stock?.stockId || "");
      })

      .catch((error) => {
        toast.error("Failed to get Accessory: " + error.message);
      });
  };

  //Delete
  const handleDelete = async (accessoriesID) => {
    if (
      window.confirm("Are you sure you want to delete this Accessory item?")
    ) {
      try {
        await axios.delete(
          `https://localhost:7061/api/Accessories/${accessoriesID}`
        );
        toast.success("Accessory item has been deleted");
        getData();
      } catch (error) {
        toast.error("Failed to delete Accessory item: " + error.message);
      }
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Edit id:", editAccessoriesID);

    const stockId = parseInt(selectedStock) || null;

    const data = {
      accessoriesID: editAccessoriesID,
      image: editImage || "string",
      name: editName || "string",
      description: editDescription || "string",
      dimensions: editDimensions || "string",
      price: parseFloat(editPrice) || 0.0,
      dateOfAddition: editDateOfAddition || new Date().toISOString(),
      stockId: stockId,
    };

    console.log("Data being sent:", data);

    axios
      .put(`https://localhost:7061/api/Accessories/${editAccessoriesID}`, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Accessory has been updated successfully!");
      })
      .catch((error) => {
        toast.error(
          "Failed to edit Accessory: " + error.response
            ? error.response.data
            : error.message
        );
        const errorMessage =
          error.response?.data?.name || error.message || "Unknown error";
        toast.error(`Failed to edit Accessory: ${errorMessage}`);
      });
  };

  const handleClose = () => {
    setShow(false);
    setEditAccessories({});
  };

  const clear = () => {
    setEditImage("");
    setEditName("");
    setEditSeller("");
    setEditDimensions("");
    setEditDescription("");
    setEditPrice("");
    setEditDateOfAddition("");
    setEditStock("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditAccessories({ ...editAccessories, [name]: value });
  };

  const preprocessImagePath = (path) => {
    if (!path) return null;
    const imageName = path.split("/").pop();
    try {
      return image(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
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
            <th>Image</th>
            <th>Name</th>
            <th>Seller</th>
            <th>Description</th>
            <th>Dimensions</th>
            <th>Price</th>
            <th>Date Of Addition</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              const imagePath = preprocessImagePath(item.image);
              const Stock = item.Stock || {};

              return (
                <tr key={item.accessoriesID}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={imagePath || "/Images/placeholder.jpg"}
                      alt="Accessory Item"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "110px",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.seller}</td>
                  <td style={{ width: "900px" }}>{item.description}</td>
                  <td>{item.dimensions}</td>
                  <td>{item.price}</td>
                  <td>{item.dateOfAddition}</td>
                  <td>
                    {stockList.find((Stock) => Stock.stockId === item.stockId)
                      ?.quantity || "-"}
                  </td>
                  <td colSpan={2} className="btn">
                    <Button
                      variant="outline-dark"
                      className="btn-edit"
                      onClick={() => handleEdit(item.accessoriesID)}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </Button>
                    <Button
                      variant="outline-dark"
                      className="btn-delete"
                      onClick={() => handleDelete(item.accessoriesID)}
                    >
                      <i class="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="13" className="text-center">
                No Accessories Available!
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
                    readOnly
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
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formStock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedStock}
                    onChange={(e) => setSelectedStock(e.target.value)}
                  >
                    <option value="">Select Stock</option>
                    {stockList.map((Stock) => (
                      <option key={Stock.stockId} value={Stock.stockId}>
                        {Stock.quantity}
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
