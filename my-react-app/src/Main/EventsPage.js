import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "../App.css";

// Assuming images are stored locally
const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const preprocessImagePath = (path) => {
  if (!path) {
    console.error("No path provided for the image.");
    return "/images/placeholder.jpg";
  }

  try {
    const imageName = path.split("/").pop();
    const imagePath = images(`./${imageName}`);
    return imagePath.default || imagePath;
  } catch (err) {
    console.error(`Image not found: ${path}`);
    return "/images/placeholder.jpg";
  }
};

const EventsPage = ({ addToCalendar }) => {
  const [events, setEvents] = React.useState([
    {
      EventID: 1,
      EventName: "Book Reading",
      Location: "City Library",
      Date: "2024-10-10",
      Time: "10:00 AM",
      Description: "Join us for a book reading event.",
      Image: "event1.jpg",
      Authors: [
        { AuthorID: 1, Name: "John Doe" },
        { AuthorID: 2, Name: "Jane Smith" }
      ],
      FacebookLink: "https://www.facebook.com/"
    },
    {
      EventID: 2,
      EventName: "Author Meet & Greet",
      Location: "Downtown Bookstore",
      Date: "2024-10-15",
      Time: "2:00 PM",
      Description: "Meet your favorite authors.",
      Image: "event2.jpg",
      Authors: [
        { AuthorID: 3, Name: "Alice Johnson" },
        { AuthorID: 4, Name: "Bob Brown" }
      ],
      FacebookLink: "https://www.facebook.com/", 
    },
  ]);

  const handleButtonClick = (event) => {
    addToCalendar(event);
    removeFromEvents(event.EventID);
  };

  const removeFromEvents = (eventID) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.EventID !== eventID));
  };

  return (
    <div className="events-page">
      <Link to="/categories" className="continue-shopping-cart">
        Continue Shopping
      </Link>
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.EventID} className="event-item">
            <img
              src={preprocessImagePath(event.Image)}
              alt={event.EventName}
              className="event-image"
            />
            <div className="event-details">
              <h4>{event.EventName}</h4>
              <p>Location: {event.Location}</p>
              <p>Date: {event.Date}</p>
              <p>Time: {event.Time}</p>
              <p>Description: {event.Description}</p>
              <p>Authors: {event.Authors.map(author => author.Name).join(', ')}</p>
              <div className="event-actions">
                <a
                  href={event.FacebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-event-button"
                >
                  View Event
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-events">No upcoming events.</p>
      )}
    </div>
  );
};


export default EventsPage;
