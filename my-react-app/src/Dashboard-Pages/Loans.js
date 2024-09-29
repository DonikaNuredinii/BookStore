import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Loans = ({ searchQuery }) => {
  const [show, setShow] = useState(false);
  const [editEbookLoanID, setEditEbookLoanID] = useState("");
  const [editEbookID, setEditEbookID] = useState("");
  const [editUserID, setEditUserID] = useState("");
  const [editLoanStartDate, setEditLoanStartDate] = useState("");
  const [editLoanDueDate, setEditLoanDueDate] = useState("");
  const [editIsReturned, setEditIsReturned] = useState(false);
  const [data, setData] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [users, setUsers] = useState([]);

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
      .get(`https://localhost:7061/api/Ebooks`) // Adjust according to your API
      .then((result) => {
        setEbooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    axios
      .get(`https://localhost:7061/api/User`) // Adjust according to your API
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditEbookLoanID("");
    setEditEbookID("");
    setEditUserID("");
    setEditLoanStartDate("");
    setEditLoanDueDate("");
    setEditIsReturned(false);
    setShow(true);
  };

  const handleEdit = (ebookLoanID) => {
    handleShow();
    setEditEbookLoanID(ebookLoanID);

    axios
      .get(`https://localhost:7061/api/EbookLoans/${ebookLoanID}`)
      .then((result) => {
        const loanData = result.data;
        setEditEbookID(loanData.ebookID);
        setEditUserID(loanData.userID);
        setEditLoanStartDate(
          new Date(loanData.loanStartDate).toISOString().slice(0, 16)
        );
        setEditLoanDueDate(
          new Date(loanData.loanDueDate).toISOString().slice(0, 16)
        );
        setEditIsReturned(loanData.isReturned);
      })
      .catch((error) => {
        toast.error("Failed to get Ebook Loan.");
        console.error("Error fetching Ebook Loan:", error);
      });
  };

  const filterData = (query) => {
    if (!query) {
      getData(); // Refetch data if query is empty
      return;
    }

    const filteredData = data.filter(
      (loan) =>
        loan.ebookID.toString().includes(query) ||
        loan.userID.toString().includes(query)
    );
    setData(filteredData);
  };

  useEffect(() => {
    if (searchQuery) {
      filterData(searchQuery);
    } else {
      getData();
    }
  }, [searchQuery]);

  const handleDelete = (ebookLoanID) => {
    if (window.confirm("Are you sure you want to delete this Ebook Loan?")) {
      axios
        .delete(`https://localhost:7061/api/EbookLoans/${ebookLoanID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Ebook Loan has been deleted");
            getData();
          }
        })
        .catch((error) => {
          toast.error("Failed to delete this Ebook Loan: " + error.message);
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7061/api/EbookLoans/${editEbookLoanID}`;
    const updatedLoan = {
      ebookLoanID: editEbookLoanID,
      ebookID: editEbookID,
      userID: editUserID,
      loanStartDate: editLoanStartDate,
      loanDueDate: editLoanDueDate,
      isReturned: editIsReturned,
    };

    axios
      .put(url, updatedLoan)
      .then((result) => {
        toast.success("Ebook Loan has been updated");
        getData();
        handleClose();
      })
      .catch((error) => {
        toast.error("Failed to update Ebook Loan: " + error.message);
      });
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="../add-loans">
          <Button variant="dark" className="btn-add">
            Add Loan
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Ebook Title</th>
            <th>User Name</th>
            <th>Loan Start Date</th>
            <th>Loan Due Date</th>
            <th>Is Returned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {ebooks.find((ebook) => ebook.bookID === item.ebookID)
                    ?.title || "Title Not Found"}
                </td>
                <td>
                  {users.find((user) => user.userID === item.userID)
                    ?.firstName || "Name Not Found"}
                </td>
                <td>{new Date(item.loanStartDate).toLocaleDateString()}</td>
                <td>{new Date(item.loanDueDate).toLocaleDateString()}</td>
                <td>{item.isReturned ? "Yes" : "No"}</td>
                <td colSpan={2} className="btn">
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.ebookLoanID)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.ebookLoanID)}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editEbookLoanID ? "Edit Ebook Loan" : "Add Ebook Loan"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ebookID">
              <Form.Label>Ebook Title</Form.Label>
              <Form.Control
                as="select"
                value={editEbookID}
                onChange={(e) => setEditEbookID(e.target.value)}
              >
                <option value="">Select Ebook</option>
                {ebooks.map((ebook) => (
                  <option key={ebook.bookID} value={ebook.bookID}>
                    {ebook.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="userID">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                as="select"
                value={editUserID}
                onChange={(e) => setEditUserID(e.target.value)}
              >
                <option value="">Select User</option>
                {users.map((user) => (
                  <option key={user.userID} value={user.userID}>
                    {user.firstName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="loanStartDate">
              <Form.Label>Loan Start Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={editLoanStartDate}
                onChange={(e) => setEditLoanStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="loanDueDate">
              <Form.Label>Loan Due Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={editLoanDueDate}
                onChange={(e) => setEditLoanDueDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="isReturned">
              <Form.Check
                type="checkbox"
                label="Is Returned"
                checked={editIsReturned}
                onChange={(e) => setEditIsReturned(e.target.checked)}
              />
            </Form.Group>
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

export default Loans;
