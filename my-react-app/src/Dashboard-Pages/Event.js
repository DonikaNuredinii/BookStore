import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Event = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [editEventID, setEditEventID] = useState("");
  const [editEventName, setEditEventName] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editDescription, setEditDescription] = useState("");
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

    const filteredData = data.filter((event) =>
      event.eventNamename.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Event`) // Update the endpoint to match your API
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (eventID) => {
    handleShow();
    setEditEventID(eventID);
    axios
      .get(`https://localhost:7061/api/Event/${eventID}`) // Update the endpoint to match your API
      .then((result) => {
        const eventData = result.data;
        setEditEventName(eventData.eventName);
        setEditLocation(eventData.location);
        setEditDate(eventData.date);
        setEditTime(eventData.time);
        setEditDescription(eventData.description);
      })
      .catch((error) => {
        toast.error("Failed to get Event: " + error.message);
      });
  };

  const handleDelete = (eventID) => {
    if (window.confirm("Are you sure you want to delete this Event")) {
      axios
        .delete(`https://localhost:7061/api/Event/${eventID}`) // Update the endpoint to match your API
        .then((result) => {
          if (result.status === 200) {
            toast.success("Event has been deleted");
            getData();
          }
        })
        .catch((error) => {
          toast.error("Failed to delete this Event: " + error.message);
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7061/api/Event/${editEventID}`; // Update the endpoint to match your API
    const eventData = {
      EventID: editEventID,
      EventName: editEventName,
      Location: editLocation,
      Date: editDate,
      Time: editTime,
      Description: editDescription,
    };
    axios
      .put(url, eventData)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Event has been updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to edit event: " + error.message);
      });
  };

  const clear = () => {
    setEditEventID("");
    setEditEventName("");
    setEditLocation("");
    setEditDate("");
    setEditTime("");
    setEditDescription("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="../add-events">
          <Button variant="dark" className="btn-add">
            Add Event
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.eventName}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.description}</td>
                <td className="btn">
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.eventID)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.eventID)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Loading...</td>
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
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <Row>
              <Col>
                <Form.Group controlId="formEventID">
                  <Form.Label>Event ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Event ID"
                    value={editEventID}
                    readOnly
                  />
                </Form.Group>
                <Form.Group controlId="formEventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Event Name"
                    value={editEventName}
                    onChange={(e) => setEditEventName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Location"
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Description"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Event;
