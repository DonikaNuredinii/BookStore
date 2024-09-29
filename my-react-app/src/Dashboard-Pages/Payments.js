import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = () => {
    axios
      .get(`https://localhost:7061/api/Payments`)
      .then((result) => {
        setPayments(result.data);
      })
      .catch((error) => {
        toast.error("Failed to load payments: " + error.message);
      });
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="my-4">Payments</h2>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Last Four Digits</th>
            <th>Transaction ID</th>
            <th>Order ID</th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <tr key={payment.paymentID}>
                <td>{index + 1}</td>
                <td>{payment.amount}</td>
                <td>{payment.paymentMethod}</td>
                <td>
                  {payment.lastFourDigits
                    ? `*************${payment.lastFourDigits}`
                    : "-"}
                </td>
                <td>{payment.transactionID}</td>
                <td>{payment.ordersId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Payments;
