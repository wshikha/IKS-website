import React, { useEffect, useState } from "react";
import EventsCards from "./EventsCards";
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allevents")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <EventsCards events={events} headline="Events & Activities" />
    </div>
  );
};

export default Event;
