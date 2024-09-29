import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../App.css";
import EbookLoan from "../Main/EbookLoan";
const AddLoans = () => {
  const [show, setShow] = useState(false);
  const [ebookLoanID, setEbookLoanID] = useState("");
  const [EbookID, setEbookID] = useState("");
  const [UserID, setUserID] = useState("");
  const [LoanStartDate, setLoanStartDate] = useState("");
  const [LoanDueDate, setLoanDueDate] = useState("");
  const [IsReturned, setIsReturned] = useState(false);
  const [ebooks, setEbooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    getEbooks();
    getUsers();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7061/api/EbookLoans`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getEbooks = () => {
    axios
      .get(`https://localhost:7061/api/Ebooks`)
      .then((result) => {
        setEbooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    axios
      .get(`https://localhost:7061/api/User`)
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoanStartDateChange = (e) => {
    const startDate = e.target.value;
    setLoanStartDate(startDate);

    if (startDate) {
      const dueDate = new Date(startDate);
      dueDate.setDate(dueDate.getDate() + 14);
      setLoanDueDate(dueDate.toISOString().split("T")[0]);
    } else {
      setLoanDueDate("");
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    const url = "https://localhost:7061/api/EbookLoans";
    const data = {
      ebookID: EbookID,
      userID: UserID,
      loanStartDate: LoanStartDate,
      loanDueDate: LoanDueDate,
      isReturned: IsReturned,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Ebook Loan has been added successfully");
      })
      .catch((error) => {
        toast.error("Failed to add author: " + error.message);
      });
  };

  const clear = () => {
    setEbookLoanID("");
    setEbookID("");
    setUserID("");
    setLoanStartDate("");
    setLoanDueDate("");
    setIsReturned(false);
  };

  const handleClear = () => {
    clear();
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="ebookID">
            <Form.Label>Ebook Title</Form.Label>
            <Form.Control
              as="select"
              value={EbookID}
              onChange={(e) => setEbookID(e.target.value)}
            >
              <option value="">Select Ebook</option>
              {ebooks.map((ebook) => (
                <option key={ebook.bookID} value={ebook.bookID}>
                  {ebook.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="userID">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              as="select"
              value={UserID}
              onChange={(e) => setUserID(e.target.value)}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.userID} value={user.userID}>
                  {user.firstName} <p> </p>
                  {user.lastName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="loanStartDate">
            <Form.Label>Loan Start Date</Form.Label>
            <Form.Control
              type="date"
              value={LoanStartDate}
              onChange={handleLoanStartDateChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="loanDueDate">
            <Form.Label>Loan Due Date</Form.Label>
            <Form.Control type="date" value={LoanDueDate} readOnly />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group controlId="isReturned">
          <Form.Check
            type="checkbox"
            label="Is Returned"
            checked={setIsReturned}
            onChange={(e) => setIsReturned(e.target.checked)}
            readOnly
          />
        </Form.Group>
        <Col>
          <Link to="../loans">
            <Button variant="dark" className="btn-add" onClick={handleSave}>
              Add Ebook Loan
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

export default AddLoans;
