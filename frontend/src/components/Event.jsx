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
      <div className="text-center mb-7">
        <h1 className="p-1 text-2xl font-semibold bg-gradient-to-l from-blue-300 via-slate-100 to-blue-100 lg:px-24 md:text-4xl">
          Latest Events
        </h1>
      </div>
      <div className="py-1">
        <EventsCards events={events} />
      </div>
    </div>
  );
};

export default Event;
