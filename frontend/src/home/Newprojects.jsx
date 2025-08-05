import React, { useState } from "react";
import { Link } from "react-router-dom";

function Newprojects() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <section data-aos="fade-up" className="px-4 py-8 text-black bg-gray-100">
      <div className="max-w-5xl mx-auto space-y-4 text-center">
        {/* Notification Badge */}
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex w-4 h-4 rounded-full opacity-75 bg-amber-600 animate-ping"></span>
            <span className="relative inline-flex w-4 h-4 rounded-full bg-amber-600"></span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-lg font-medium uppercase text-amber-800">
          Upcoming Event
        </h2>

        {/* Event Details */}
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            SANSKRIT WEEK CELEBRATION
          </h1>
          <p className="text-lg font-semibold md:text-xl">
            Centre for Sanskrit Studies, IIT Kanpur
          </p>
          <p className="text-base md:text-xl">11 August 2025</p>
          <p className="text-base md:text-xl">06:15 P.M. – 08:15 P.M.</p>
          <p className="text-base md:text-xl">
            Room 101, Rajeev Motwani Building
          </p>
        </div>

        {/* CTA Button */}
        <Link to="/upcomingevents">
          <button className="px-6 py-2 mt-4 text-base font-semibold text-white transition-all duration-300 rounded-md shadow bg-amber-700 hover:bg-amber-800">
            Click Here to Know More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Newprojects;
