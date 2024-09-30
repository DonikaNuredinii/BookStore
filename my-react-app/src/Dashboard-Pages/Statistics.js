import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Pie, Doughnut, Bar } from "react-chartjs-2";
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
  BarElement,
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
  BarElement,
  ArcElement
);

const ALBANIAN_CATEGORIES = [
  "Anektoda & Thënje",
  "Arkeologji",
  "Arkitekturë",
  "Art",
  "Biografi",
  "Ekonomi",
  "Enciklopedi",
  "Fantashkencë",
  "Filozofi",
  "Gjuhësi",
  "Histori",
  "Klasike",
  "Kritikë",
  "Mister",
  "Muzikë",
  "Novela Grafike",
  "Poezi",
  "Psikologji",
  "Romancë",
  "Shkencë",
  "Shkenca Natyrore",
  "Shkenca Teknike",
  "Sociologji",
  "Sport",
  "Teatër & Kinematografi",
];
const generateColors = (count) => {
  const pastelColors = [
    "#A8DADC",
    "#F4A261",
    "#E76F51",
    "#2A9D8F",
    "#E9C46A",
    "#F0B7A4",
    "#CDB4DB",
    "#BDE0FE",
    "#FFB4A2",
    "#FEC5BB",
    "#B5E48C",
    "#9AD1D4",
    "#E3D5CA",
    "#FFDDD2",
    "#FFE5EC",
    "#A0C4FF",
    "#B8E2FF",
    "#FFF3B0",
    "#FFCAD4",
    "#D3F8E2",
    "#B6CCFE",
    "#FED7C3",
    "#E0BBE4",
    "#D8C3A5",
    "#C8A2C8",
  ];
  return pastelColors.length >= count
    ? pastelColors.slice(0, count)
    : pastelColors;
};

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
  const [orderData, setOrderData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [ebookLoans, setActiveLoans] = useState(0);
  const [events, setEvents] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [growthPercentage, setGrowthPercentage] = useState(0);
  const [monthlyUserCounts, setMonthlyUserCounts] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bestCustomers, setBestCustomers] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);
  const [weeklySalesData, setWeeklySalesData] = useState([]);
  const [ordersSummary, setOrdersSummary] = useState({
    bookOrders: 0,
    accessoriesOrders: 0,
    ebookLoans: 0,
  });
  const [topAuthorsData, setTopAuthorsData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Books",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  const [genreChartData, setGenreChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fetchGenreData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/CategoryBooks/genre-distribution"
      );

      const genres = response.data.map((item) => item.genre || item.Genre);
      const counts = response.data.map(
        (item) => item.bookCount || item.BookCount
      );

      const albanianGenres = genres.filter((genre) =>
        ALBANIAN_CATEGORIES.includes(genre)
      );
      const albanianCounts = counts.filter((_, index) =>
        ALBANIAN_CATEGORIES.includes(genres[index])
      );

      const colors = generateColors(albanianGenres.length);

      setGenreChartData({
        labels: albanianGenres,
        datasets: [
          {
            data: albanianCounts,
            backgroundColor: colors,
            hoverBackgroundColor: colors.map((color) =>
              color.replace(")", ", 0.8)").replace("rgb", "rgba")
            ),
            borderColor: "#fff",
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching genre data:", error);
    }
  };
  useEffect(() => {
    const fetchTopAuthors = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7061/api/BookAuthors/api/BookAuthors/top-authors"
        );
        const authors = response.data;

        const authorNames = authors.map((author) => author.authorName);
        const bookCounts = authors.map((author) => author.bookCount);

        setTopAuthorsData({
          labels: authorNames,
          datasets: [
            {
              label: "Number of Books",
              data: bookCounts,
              backgroundColor: generateColors(authorNames.length),
              borderColor: "rgba(255, 255, 255, 1)",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching top authors data:", error);
      }
    };

    fetchTopAuthors();
  }, []);

  useEffect(() => {
    fetchGenreData();
  }, []);

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
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
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
      setTotalUsers(response.data);
    } catch (error) {
      console.error("Error fetching total users:", error);
    }
  };

  const fetchUserGrowth = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/User/growth"
      );
      setGrowthPercentage(response.data);
    } catch (error) {
      console.error("Error fetching user growth percentage:", error);
    }
  };

  const fetchGiftCardStats = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/GiftCard/counts"
      );
      console.log("API Response:", response.data);

      setActiveCount(response.data.activeGiftCardCount || 0);
      setInactiveCount(response.data.inactiveGiftCardCount || 0);
    } catch (error) {
      console.error("Error fetching gift card statistics:", error);
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

  const fetchOrdersSummary = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7061/api/Order/orders-summary"
      );
      console.log(response.data);
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
    fetchGiftCardStats();
    fetchOrderData();
    fetchOrdersSummary();
    fetchActiveLoans();
    fetchUserGrowth();
    fetchEvents();
    fetchMonthlyUserCounts();
  }, []);
  const isActiveGreater = activeCount > inactiveCount;
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

  const barData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Gift Cards",
        data: [activeCount, inactiveCount],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        barThickness: 50,
      },
    ],
  };

  const optionsB = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 0,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Gift Card Status",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const growthColor = growthPercentage >= 0 ? "#4db8b8" : "#dc3545";

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
              <div className="stat-card p-4 rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people display-4 me-3"></i>
                  <h4 className="mb-0">Total Users</h4>
                </div>
                <h2 className="mb-0">{totalUsers}</h2>
                <div className="d-flex flex-column align-items-center mt-4">
                  <p> </p>
                  <p> </p>
                  <p></p>
                  <h4 className="mb-0 text-center">
                    Growth Percentage:{" "}
                    <span style={{ color: growthColor }}>
                      {growthPercentage.toFixed(2)}%
                    </span>
                  </h4>
                </div>
                <div className="mt-4 w-100">
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${growthPercentage}%`,
                        backgroundColor:
                          growthPercentage >= 0 ? "#77d9d9" : "#dc3545",
                      }}
                      aria-valuenow={growthPercentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
                <p> </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <div style={{ height: "250px", width: "100%" }}>
                  <h4>Gift Card Statistics</h4>
                  <Bar data={barData} options={optionsB} />
                </div>
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
          <div className="card-dashboard p-4 mt-3 rounded shadow-sm">
            <h4>Ebook Loans</h4>
            <h2>{ordersSummary.ebookLoans}</h2>
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
          {bestCustomers.length > 0 && (
            <div className="best-customers-card p-4 rounded shadow-sm">
              <h4 className="mb-3">Top 5 Customers</h4>
              <ul className="list-unstyled">
                {bestCustomers.map((customer) => (
                  <li key={customer.id} className="mb-3 border-bottom pb-2">
                    <strong className="d-block">{customer.name}</strong>
                    <div>Total Spent: {customer.totalSpent.toFixed(2)}€</div>
                    <div>Order Count: {customer.orderCount}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="row mt-4">
        <div
          className="d-flex justify-content-between align-items-start"
          style={{ width: "100%", gap: "20px" }}
        >
          <div style={{ flex: 1 }}>
            <h4>Top 10 Authors by Number of Books</h4>
            <div
              style={{
                height: "400px",
                background: "#f7f9fc",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Bar
                data={topAuthorsData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                    },
                    tooltip: {
                      backgroundColor: "#333",
                      titleColor: "#fff",
                      bodyColor: "#fff",
                      borderColor: "#fff",
                      borderWidth: 1,
                      callbacks: {
                        label: function (tooltipItem) {
                          return ` ${tooltipItem.label}: ${tooltipItem.raw} books`;
                        },
                      },
                    },
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Authors",
                      },
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Number of Books",
                      },
                      beginAtZero: true,
                      grid: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "500px",
                background: "#f7f9fc",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ height: "100%", width: "60%" }}>
                <Pie
                  data={genreChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: true,
                        backgroundColor: "#333",
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        borderColor: "#fff",
                        borderWidth: 1,
                        callbacks: {
                          label: function (tooltipItem) {
                            return ` ${tooltipItem.label}: ${tooltipItem.raw} books`;
                          },
                        },
                      },
                    },
                    animation: {
                      animateRotate: true,
                      animateScale: true,
                    },
                  }}
                />
              </div>
              <div style={{ height: "100%", width: "35%", overflowY: "auto" }}>
                <div className="custom-legend p-2 border rounded shadow-sm">
                  <h6 className="mb-1">Albanian Genres</h6>
                  <ul className="list-unstyled">
                    {genreChartData.labels.map((label, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center mb-1"
                        style={{
                          backgroundColor:
                            hoveredIndex === index ? "#eaf2f8" : "transparent",
                          padding: hoveredIndex === index ? "5px" : "2px",
                          borderRadius: "4px",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "12px",
                            height: "12px",
                            backgroundColor:
                              genreChartData.datasets[0].backgroundColor[index],
                            marginRight: "8px",
                            borderRadius: "50%",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                          }}
                        ></span>
                        <span>
                          {label}
                          {hoveredIndex === index && (
                            <strong
                              style={{ marginLeft: "4px", color: "#333" }}
                            >
                              - {genreChartData.datasets[0].data[index]} books
                            </strong>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
