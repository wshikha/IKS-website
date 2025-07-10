import React, { useEffect, useState } from "react";
import EventsCards from "./EventsCards";
const EventDetail = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allevents")
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 12)));
  }, []);

  return (
    <div data-aos="fade-up" className="p-10">
      <div className="mb-3 text-center">
        <h1
          data-aos="fade-up"
          className="p-1 text-2xl font-semibold text-white bg-gray-700 lg:px-24 md:text-4xl"
        >
          Recent Events
        </h1>
      </div>
      <div data-aos="fade-up" className="py-1">
        <EventsCards events={events} />
      </div>
    </div>
  );
};

export default EventDetail;
