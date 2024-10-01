import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Event = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [editEventsID, setEditEventsID] = useState("");
  const [editEventName, setEditEventName] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [data, setData] = useState([]);
  const adminToken = localStorage.getItem("adminToken");
  console.log("Admin Token: ", adminToken);

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
    const filteredData = data.filter((event) =>
      event.eventName.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };
  const getData = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Event");
      console.log("API Response:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error(
        "Failed to get events: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handleClose = () => {
    setShow(false);
    clear(); // Clear form values when modal is closed
  };

  const handleShow = () => setShow(true);

  const handleEdit = (EventsID) => {
    handleShow();
    setEditEventsID(EventsID); // Set the ID for editing
    axios
      .get(`https://localhost:7061/api/Event/${EventsID}`,{
        headers: {
          Authorization: `Bearer ${adminToken}`, 
        },
      })
      .then((result) => {
        const eventData = result.data;
        setEditEventName(eventData.eventName); // Ensure correct capitalization
        setEditLocation(eventData.location);
        setEditDate(eventData.date);
        setEditTime(eventData.time);
        setEditDescription(eventData.description);
      })
      .catch((error) => {
        toast.error("Failed to get Event: " + error.message);
      });
  };

  const handleDelete = async (EventsID) => {
    const adminToken = localStorage.getItem("token"); 
    if (window.confirm("Are you sure you want to delete this Event?")) {
      try {
        await axios.delete(`https://localhost:7061/api/Event/${EventsID}`, {
          headers: {
            Authorization: `Bearer ${adminToken}`, 
          },
        })
        toast.success("Event has been deleted");
        getData(); // Refresh the table data after deletion
      } catch (error) {
        toast.error(
          "Failed to delete this Event: " +
            (error.response?.data?.message || error.message)
        );
      }
    }
  };

  const handleUpdate = async (e) => {
    const adminToken = localStorage.getItem("token"); 
    e.preventDefault();
    console.log("Edit id:", editEventsID);

    const data = {
      eventsID: editEventsID, // Corrected key name
      eventName: editEventName || "string",
      location: editLocation || "string",
      date: editDate,
      time: editTime,
      description: editDescription || "string",
    };

    console.log("Data being sent:", data);

    try {
      await axios.put(
        `https://localhost:7061/api/Event/${editEventsID}`, 
        data, 
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );
      handleClose();
      getData();
      toast.success("Event has been updated successfully!");
    } catch (error) {
      let errorMessage = "Unknown error";

      if (error.response && error.response.data) {
        if (typeof error.response.data === "object") {
          const errorData = error.response.data;

          if (errorData.errors) {
            // Extract validation errors
            const validationErrors = Object.entries(errorData.errors)
              .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
              .join(" | ");

            errorMessage = `Validation error(s): ${validationErrors}`;
          } else {
            errorMessage = errorData.title || JSON.stringify(errorData);
          }
        } else {
          errorMessage = error.response.data;
        }
      } else {
        errorMessage = error.message;
      }

      toast.error(`Failed to edit event: ${errorMessage}`);
    }
  };

  const clear = () => {
    setEditEventsID("");
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
        <Link to="../add-Event">
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
                    onClick={() => handleEdit(item.eventsID)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.eventsID)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Events Available.</td>
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
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="formEventsID">
                  <Form.Label>Event ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Event ID"
                    value={editEventsID}
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
            <Button variant="dark" type="submit">
              Update Event
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Event;
