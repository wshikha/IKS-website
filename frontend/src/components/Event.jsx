import React, { useEffect, useState } from "react";
import EventsCards from "./EventsCards";
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allevents")
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 12)));
  }, []);

  return (
    <div className="p-10">
      <div className="mb-3 text-center">
        <h1 className="p-1 text-2xl font-semibold bg-gradient-to-l from-orange-300 via-orange-50 to-orange-200 lg:px-24 md:text-4xl">
          Recent Events
        </h1>
      </div>
      <div className="py-1">
        <EventsCards events={events} />
      </div>
    </div>
  );
};

export default Event;
