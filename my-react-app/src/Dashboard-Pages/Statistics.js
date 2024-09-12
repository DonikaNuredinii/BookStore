import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // Make sure the styles are added here
import { FaEnvelope, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from "chart.js";

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

function Statistics() {
  const [totalContacts, setTotalContacts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [orderSummary, setOrderSummary] = useState({
    bookOrders: 0,
    accessoriesOrders: 0,
    ebookLoans: 0,
  });
 

  useEffect(() => {
    axios
      .get("https://localhost:7061/api/ContactUs/total-contacts")
      .then((response) => setTotalContacts(response.data))
      .catch((error) => console.error("Error fetching total contacts:", error));

    axios
      .get("https://localhost:7061/api/User/total-users")
      .then((response) => setTotalUsers(response.data))
      .catch((error) => console.error("Error fetching total users:", error));

    axios
      .get("https://localhost:7061/api/Order/total-earnings")
      .then((response) => setTotalEarnings(response.data))
      .catch((error) => console.error("Error fetching total earnings:", error));

    axios
      .get("https://localhost:7061/api/Order/orders-summary")
      .then((response) => setOrderSummary(response.data))
      .catch((error) => console.error("Error fetching order summary:", error));
  }, []);

  const orderData = {
    labels: ["Books", "Accessories", "Ebook Loans"],
    datasets: [
      {
        label: "Books",
        data: [orderSummary.bookOrders, null, null],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "Accessories",
        data: [null, orderSummary.accessoriesOrders, null],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Ebook Loans",
        data: [null, null, orderSummary.ebookLoans],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return value * 100 + "%";
          },
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
      </div>
      <div className="statistics-cards">
        <div className="stat-card">
          <FaEnvelope className="icon" />
          <div className="stat-info">
            <h3>{totalContacts}</h3>
            <p>Email Sent</p>
          </div>
        </div>
        <div className="stat-card">
          <FaUsers className="icon" />
          <div className="stat-info">
            <h3>{totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="stat-card">
          <FaMoneyBillWave className="icon" />
          <div className="stat-info">
            <h3>{totalEarnings}€</h3>
            <p>Total Earnings</p>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <Line data={orderData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Statistics;
