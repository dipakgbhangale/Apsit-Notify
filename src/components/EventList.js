import React, { useEffect, useState } from "react";
import { fetchEvents } from "../api/api";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };
    getEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.title}</strong> - {event.date} {event.time}
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
