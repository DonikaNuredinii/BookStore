import React, { useState, useEffect } from 'react';

export const useEvents = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addToEvents = (event) => {
    setEvents((prevEvents) => {
      if (!Array.isArray(prevEvents)) {
        console.error('Events is not an array');
        return [event];
      }
      return [...prevEvents, event];
    });
  };

  const removeFromEvents = (eventID) => {
    setEvents((prevEvents) => {
      if (!Array.isArray(prevEvents)) {
        console.error('Events is not an array');
        return [];
      }
      return prevEvents.filter((event) => event.EventID !== eventID); // Ensure EventID matches the property name
    });
  };

  const clearEvents = () => {
    setEvents([]);
    localStorage.removeItem('events');
  };

  const isEventInEvents = (eventID) => {
    if (!Array.isArray(events)) {
      console.error('Events is not an array');
      return false;
    }
    return events.some((event) => event.EventID === eventID); // Ensure EventID matches the property name
  };

  return {
    events,
    addToEvents,
    removeFromEvents,
    clearEvents,
    isEventInEvents,
  };
};
