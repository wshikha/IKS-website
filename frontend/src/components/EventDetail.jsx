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
    <section
      data-aos="fade-up"
      className="px-4 py-16 md:px-10 lg:px-24 bg-gray-50"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-amber-800 sm:text-4xl"
        >
          Recent Events
        </h1>
        <p className="mt-2 text-xl text-gray-600 ">
          Explore highlights from our latest activities and gatherings.
        </p>
        <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-amber-800"></div>
      </div>

      {/* Event Cards */}
      <div data-aos="fade-up">
        <EventsCards events={events} />
      </div>
    </section>
  );
};

export default EventDetail;
