import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Pie } from "react-chartjs-2";
import { FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement,} from "chart.js";

ChartJS.register( CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,ArcElement);

const Statistics = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const [orderData, setOrderData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [activeLoans, setActiveLoans] = useState(0);
  const [events, setEvents] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [ordersSummary, setOrdersSummary] = useState({
    bookOrders: 0,
    accessoriesOrders: 0,
    ebookLoans: 0,
  });

 
  const fetchTotalSales = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/Order/total-earnings"
      );
      setTotalSales(response.data);
    } catch (error) {
      console.error("Error fetching total sales:", error);
    }
  };

  const fetchTotalContacts = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/ContactUs/total-contacts"
      );
      setTotalContacts(response.data);
    } catch (error) {
      console.error("Error fetching total contacts:", error);
    }
  };

  
  const fetchTotalUsers = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/User/count");
      setTotalUsers(response.data);
    } catch (error) {
      console.error("Error fetching total users:", error);
    }
  };


  const fetchCartValue = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/CartItems/total-value"
      );
      setCartValue(response.data);
    } catch (error) {
      console.error("Error fetching cart value:", error);
    }
  };


  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/Order/timeline"
      );
      setOrderData(response.data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

 
  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/CategoryBooks/earnings-by-category"
      );
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  
  const fetchOrdersSummary = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/Order/orders-summary"
      );
      setOrdersSummary(response.data);
    } catch (error) {
      console.error("Error fetching orders summary:", error);
    }
  };

 
  const fetchActiveLoans = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/EbookLoans/active"
      );
      setActiveLoans(response.data);
    } catch (error) {
      console.error("Error fetching active loans:", error);
    }
  };

  
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/Event/upcoming"
      );
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  
  useEffect(() => {
    fetchTotalContacts();
    fetchTotalSales();
    fetchTotalUsers();
    fetchCartValue();
    fetchOrderData();
    fetchCategoryData();
    fetchOrdersSummary();
    fetchActiveLoans();
    fetchEvents();
  }, []);

  const ordersChartData = {
    labels: orderData.map((order) => order.date),
    datasets: [
      {
        label: "Orders Over Time",
        data: orderData.map((order) => order.count),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const earningsChartData = {
    labels: categoryData.map((cat) => cat.Category),
    datasets: [
      {
        data: categoryData.map((cat) => cat.Earnings),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="dashboard-container container-fluid">
     
      <div className="row dashboard-stats mb-4">
        <div className="col-md-3">
          <div className="stat-card bg-info text-white p-4 rounded shadow-sm">
            <i className="bi bi-envelope-fill"></i> 
            <h4> Contacts</h4>
            <h2>{totalContacts}</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card bg-info text-white p-4 rounded shadow-sm">
            <i className="bi bi-currency-dollar"></i>
            <h4>Total Sales</h4>
            <h2>{totalSales ? totalSales.toFixed(2) : 0}€</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card bg-primary text-white p-4 rounded shadow-sm">
            <i className="bi bi-people"></i>
            <h4>Total Users</h4>
            <h2>{totalUsers}</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card bg-danger text-white p-4 rounded shadow-sm">
            <i className="bi bi-cart"></i>
            <h4>Cart Value</h4>
            <h2>${cartValue ? cartValue.toFixed(2) : 0}</h2>
          </div>
        </div>
      </div>

    
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="stat-card bg-warning text-white p-4 rounded shadow-sm">
            <h4>Book Orders</h4>
            <h2>{ordersSummary.bookOrders}</h2>
          </div>
          <div className="stat-card bg-secondary text-white p-4 mt-3 rounded shadow-sm">
            <h4>Accessories Orders</h4>
            <h2>{ordersSummary.accessoriesOrders}</h2>
          </div>
          <div className="stat-card bg-light text-dark p-4 mt-3 rounded shadow-sm">
            <h4>Ebook Loans</h4>
            <h2>{activeLoans}</h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="events-card bg-dark text-white p-4 rounded shadow-sm">
            <h4>Upcoming Events</h4>
            <ul className="events-list list-unstyled">
              {events.map((event) => (
                <li key={event.eventId} className="mb-2">
                  {event.eventName} -{" "}
                  {new Date(event.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="chart-card p-4 rounded shadow-sm">
            <h4>Orders Over Time</h4>
            <Line data={ordersChartData} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart-card p-4 rounded shadow-sm">
            <h4>Earnings by Category</h4>
            <Pie data={earningsChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
