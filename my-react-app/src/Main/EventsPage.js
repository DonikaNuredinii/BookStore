import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import { useEvents } from "../Components/Events"; // Adjust the import path

const EventsPage = ({ addToCalendar }) => {
  const { events, addToEvents, removeFromEvents, clearEvents, isEventInEvents } = useEvents();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Event");
      console.log("API Response:", response.data); // Log API response to verify
      if (Array.isArray(response.data) && response.data.length > 0) {
        response.data.forEach(event => {
          if (!isEventInEvents(event.EventID)) {
            addToEvents(event);
          }
        });
      } else {
        console.warn("No events found or invalid data format.");
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error("There was an error fetching the events!", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [addToEvents, isEventInEvents]);

  const handleButtonClick = (event) => {
    addToCalendar(event);
    removeFromEvents(event.EventID);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="events-page">
      <Link to="/categories" className="continue-shopping-cart">
        Continue Shopping
      </Link>
      <h2>Upcoming Events</h2>
      {Array.isArray(events) && events.length > 0 ? (
        events.map((event, index) => (
          <div key={`${event.EventID}-${index}`} className="event-item">
            <div className="event-details">
              <h4>{event.eventName || "Unnamed Event"}</h4>
              <p>Location: {event.location || "Unknown"}</p>
              <p>Date: {event.date || "TBD"}</p>
              <p>Time: {event.time || "TBD"}</p>
              <p>Description: {event.description || "No description available"}</p>
              <div className="event-actions">
                  <a
                    href="https://www.facebook.com"
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
