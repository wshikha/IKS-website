import React from "react";
import { Link } from "react-router-dom";

function Upcomingevents() {
  return (
    <div data-aos="fade-up" className="px-4 py-12 mt-10 bg-white lg:px-24">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
        {/* Text Section */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 md:text-4xl md:text-left">
            Sanskrit Week Celebration
          </h2>
          <p className="text-lg leading-relaxed text-justify text-gray-700">
            The <b>Sanskrit Week Celebration</b>, organized by the{" "}
            <b>Centre for Sanskrit Studies, IIT Kanpur</b>, is scheduled to be
            held on{" "}
            <span className="font-semibold text-red-800">
              11th August 2025 from 6:15 PM to 8:15 PM at Room 101, Rajeev
              Motwani Building.
            </span>{" "}
            <br />
            <br />
            As part of the <b>संस्कृतसप्ताहसमारोहः</b> initiative and under the
            broader vision of{" "}
            <b>
              ŚIKṢĀ: Study Centre for Indian Knowledge System for Holistic
              Advancement
            </b>
            , the event will feature a culturally rich evening titled{" "}
            <b>बालप्रस्तुतिः</b>, comprising
            <i>लघुनाटिका</i> (short plays), <i>पात्राभिनयः</i> (dramatic
            readings), and <i>अभिनयगीतम्</i>
            (musical performances).
            <br />
            <br />
            Highlights of the evening also include <b>
              सुभाषितान्ताक्षरी
            </b> and <b>संस्तुतिसङ्गीता</b>, reflecting the depth and elegance
            of Sanskrit's literary and oral traditions. Coordinated by{" "}
            <b>Prof. Arnab Bhattacharya</b> and <b>Prof. Nachiketa Tiwari</b>,
            this celebration offers an immersive experience into the beauty of
            India’s classical language.
            <br />
            <br />
            <b className="text-blue-700">
              All are cordially invited to join this vibrant and intellectually
              engaging evening.
            </b>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="img1 copy.jpg"
            alt="Sanskrit Week"
            className="w-full max-w-md transition-transform duration-300 shadow-xl rounded-tl-2xl rounded-br-2xl hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Upcomingevents;
