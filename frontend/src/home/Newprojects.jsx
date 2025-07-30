import React, { useState } from "react";
import { Link } from "react-router-dom";

function Newprojects() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div
      data-aos="fade-up"
      className="items-center justify-between px-10 goals lg:px-24 "
    >
      {/* Left: Text Content */}
      <div className="px-64 text-center text-justify bg-gray-100 rounded-tr-3xl rounded-bl-3xl md:w-fullv-mt-8">
        <span className="relative flex pt-5 mb-4 ml-40 pl-7 size-3">
          <span className="absolute inline-flex w-full h-full text-red-800 bg-red-900 rounded-full animate-ping "></span>
          <span className="relative inline-flex bg-red-600 rounded-full size-3 ">
            <button className="h-8 p-1 text-red-600 rounded">
              <b className="font-serif">Upcoming Events</b>
            </button>
          </span>
        </span>
        <h2 className="font-serif text-3xl font-bold leading-snug text-center text-black md:w-full text-amber-900">
          SANSKRIT WEEK CELEBRATION <br />
          Centre for Sanskrit Studies, IITK <br />
          11 August 2025
          <br />
          06.15 Ρ.Μ.- 08.15 P.M.
          <br />
          RM 101 (Rajeev Motwani Building)
        </h2>

        <div className="mt-3 text-center">
          <Link to="/upcomingevents" className="block">
            <button className="px-10 py-2 mb-10 font-semibold text-white transition-all duration-300 bg-blue-700 rounded-tl-lg rounded-br-lg hover:bg-black">
              Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Newprojects;
