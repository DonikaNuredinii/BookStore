import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/Event`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7061/api/Event";
    const data = {
      EventName: eventName,
      Location: location,
      Date: date,
      Time: time,
      Description: description,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Event has been added successfully");
        setTimeout(() => {
          navigate("/dashboard/GiftCards");
        }, 2000);
      })
      .catch((error) => {
        toast.error("Failed to add event: " + error.message);
      });
  };

  const clear = () => {
    setEventName("");
    setLocation("");
    setDate("");
    setTime("");
    setDescription("");
  };

  const handleClear = () => {
    clear();
  };

  return (
    <Form className="eventForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="../Event">
            <Button variant="dark" className="btn-add" onClick={handleSave}>
              Add Event
            </Button>
          </Link>
        </Col>
        <Col>
          <Button variant="dark" className="btn-add" onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddEvent;
