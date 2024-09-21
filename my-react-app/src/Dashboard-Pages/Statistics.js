import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import styled from "styled-components";
import Calendar from "react-calendar";
import MapChart from "../Components/MapChart";
import "react-calendar/dist/Calendar.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const StyledCalendar = styled(Calendar)`
  background-color: #f0f8ff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-top: 40px;

  .react-calendar__month-view__days__day {
    color: #333;
  }

  .react-calendar__tile {
    border-radius: 8px;
    transition: background-color 0.2s;

    &:enabled:hover {
      background-color: #e0f7fa;
    }

    &.react-calendar__tile--highlighted {
      background-color: #007bff;
      color: white;
    }

    &.react-calendar__tile--active {
      background-color: #0056b3;
      color: white;
    }
  }

  .react-calendar__navigation button {
    color: #0056b3;
  }

  .react-calendar__navigation__label {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const Statistics = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const [orderData, setOrderData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [activeLoans, setActiveLoans] = useState(0);
  const [events, setEvents] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [growthPercentage, setGrowthPercentage] = useState(0);
  const [monthlyUserCounts, setMonthlyUserCounts] = useState([]);
  const [previousUserCount, setPreviousUserCount] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bestCustomers, setBestCustomers] = useState([]);
  const [weeklySalesData, setWeeklySalesData] = useState([]);
  const [ordersSummary, setOrdersSummary] = useState({
    bookOrders: 0,
    accessoriesOrders: 0,
    ebookLoans: 0,
  });
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const colors = [
    "rgba(54, 162, 235, 0.6)", // General Inquiry
    "rgba(255, 206, 86, 0.6)", // Support
    "rgba(75, 192, 192, 0.6)", // Feedback
    "rgba(153, 102, 255, 0.6)", // Other
  ];

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });
  const fetchTotalContacts = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/ContactUs/doughnut-data"
      );

      const contactsData = response.data;

      const dataMap = new Map();

      contactsData.forEach((item) => {
        if (dataMap.has(item.label)) {
          dataMap.set(item.label, dataMap.get(item.label) + item.value);
        } else {
          dataMap.set(item.label, item.value);
        }
      });

      const dataValues = Array.from(dataMap.values());
      const labels = Array.from(dataMap.keys());

      setTotalContacts(dataValues.reduce((acc, val) => acc + val, 0));

      setChartData({
        labels: labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: colors.slice(0, labels.length),
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching total contacts:", error);
    }
  };

  useEffect(() => {
    fetchTotalContacts();
  }, []);

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

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/Order/order-counts"
        );
        const transformedData = response.data.map((order) => ({
          id: order.countryName,
          value: order.totalOrders,
        }));
        setCountryData(transformedData);
      } catch (err) {
        console.error(
          "Error fetching country data:",
          err.response ? err.response.data : err.message
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    fetchTotalContacts();
  }, []);

  const fetchTotalUsers = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/User/count");
      const newUserCount = response.data;

      console.log("New User Count:", newUserCount);

      if (previousUserCount > 0) {
        const growth =
          ((newUserCount - previousUserCount) / previousUserCount) * 100;

        if (!isNaN(growth)) {
          setGrowthPercentage(growth.toFixed(2));
          console.log("Growth Percentage:", growth);
        }
      } else {
        setGrowthPercentage("N/A");
      }
      setPreviousUserCount(newUserCount);
      setTotalUsers(newUserCount);
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
  const fetchMonthlyUserCounts = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/User/monthly-count"
      );
      setMonthlyUserCounts(response.data);
    } catch (error) {
      console.error("Error fetching monthly user counts:", error);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTotalUsers();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

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
    fetchMonthlyUserCounts();
  }, []);
  useEffect(() => {
    const fetchWeeklySales = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/Order/weekly-sales"
        );
        const data = response.data;

        const sales = data.map((week) => week.totalSales);
        const labels = data.map((week) => week.week);

        setWeeklySalesData(sales);
      } catch (error) {
        console.error("Error fetching weekly sales:", error);
      }
    };

    fetchWeeklySales();
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

  useEffect(() => {
    const fetchTopCustomers = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/Order/top-customers"
        );
        setBestCustomers(response.data);
      } catch (error) {
        console.error("Error fetching top customers:", error);
      }
    };

    fetchTopCustomers();
  }, []);

  return (
    <div className="dashboard-container container-fluid">
      <div className="row dashboard-stats mb-4">
        <div className="col-md-6 mb-4 ">
          <h4>Dashboard Statistics</h4>
          <hr className="event-hr" />

          <div className="eventS">
            <StyledCalendar
              value={selectedDate}
              tileClassName={({ date }) =>
                events.some(
                  (event) =>
                    new Date(event.date).toDateString() === date.toDateString()
                )
                  ? "highlight"
                  : null
              }
              className="calendar"
            />
            <div className="events-card p-3 rounded shadow-sm h-100">
              <h4>Upcoming Events</h4>
              <ul className="events-list list-unstyled mt-3">
                {events.length > 0 ? (
                  events.map((event) => (
                    <li key={event.eventId} className="mb-2 border-bottom pb-2">
                      <div className="event-date">
                        {new Date(event.date).getDate()}
                      </div>
                      <div>
                        <strong>{event.eventName}</strong> -{" "}
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No upcoming events</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="row">
            <h1></h1>
            <div className="col-md-6 mb-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <i className="bi bi-envelope-fill fs-1"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4>Contacts</h4>
                    <h2>{totalContacts}</h2>
                  </div>
                  <div style={{ height: "100px", width: "100px" }}>
                    <Doughnut data={chartData} options={options} />
                  </div>
                </div>

                <div className="mt-3">
                  {chartData.labels.map((label, index) => (
                    <div className="d-flex align-items-center mb-1" key={index}>
                      <div
                        className="me-2"
                        style={{
                          width: "15px",
                          height: "15px",
                          backgroundColor: colors[index],
                        }}
                      ></div>
                      <span style={{ fontSize: "0.85em" }}>
                        {label}: {chartData.datasets[0].data[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="stat-card  p-4 rounded shadow-sm">
                <i className="bi bi-currency-dollar"></i>
                <h4>Total Sales</h4>
                <h2>{totalSales ? totalSales.toFixed(2) : 0}€</h2>
                <div style={{ height: "95px", width: "100%" }}>
                  <Line
                    data={{
                      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
                      datasets: [
                        {
                          label: "Weekly Sales",
                          data: weeklySalesData,
                          backgroundColor: "rgba(54, 162, 235, 0.2)",
                          borderColor: "rgba(54, 162, 235, 1)",
                          borderWidth: 2,
                          marginTop: "30px",
                          fill: true,
                          tension: 0.3,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          beginAtZero: true,
                          display: false,
                        },
                      },
                    }}
                    height={50}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="stat-card  p-4 rounded shadow-sm  d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people display-4 me-3"></i>
                  <h4 className="mb-0">Total Users</h4>
                </div>
                <h2 className="mb-0">{totalUsers}</h2>

                <h4 className="mb-0 text-center">
                  Growth Percentage:{" "}
                  {typeof growthPercentage === "number"
                    ? growthPercentage.toFixed(2)
                    : "N/A"}
                  %
                </h4>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="stat-card  p-4 rounded shadow-sm">
                <i className="bi bi-cart"></i>
                <h4>Cart Value</h4>
                <h2>${cartValue ? cartValue.toFixed(2) : 0}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-dashboard-start">
        <div className="second-col">
          <div className="card-dashboard  p-4  mt-3 rounded shadow-sm">
            <h4>Book Orders</h4>
            <h2>{ordersSummary.bookOrders}</h2>
          </div>
          <div className="card-dashboard  p-4 mt-3 rounded shadow-sm">
            <h4>Accessories Orders</h4>
            <h2>{ordersSummary.accessoriesOrders}</h2>
          </div>
          <div className="card-dashboard text-dark p-4 mt-3 rounded shadow-sm">
            <h4>Ebook Loans</h4>
            <h2>{activeLoans}</h2>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <MapChart data={countryData} />
          <div
            style={{
              marginTop: "20px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              padding: "10px",
            }}
          >
            {countryData.map((country) => {
              const color =
                country.value > 0
                  ? `rgba(29, 106, 150, ${Math.min(country.value / 200, 1)})`
                  : "rgba(29, 106, 150, 0.3)";

              return (
                <div
                  key={country.id}
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(176, 216, 230, 0.5)",
                    padding: "10px 15px",
                    borderBottom: "3px solid ${color}",
                    borderLeft: "2px solid ${color}",
                    color: "#061639",
                    marginRight: "10px",
                    minWidth: "120px",
                    textAlign: "center",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {country.id}: {country.value} orders
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="best-customers-card p-4 rounded shadow-sm">
            <h4>Top 5 Customers</h4>
            <ul className="list-unstyled mt-3">
              {bestCustomers.map((customer) => (
                <li key={customer.id} className="mb-2 border-bottom pb-2">
                  <strong>{customer.name}</strong>
                  <div>Total Spent: ${customer.totalSpent}</div>
                  <div>Order Count: {customer.orderCount}</div>
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
