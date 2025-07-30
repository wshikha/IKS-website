import React from "react";

import { Link } from "react-router-dom";
function Upcomingevents() {
  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-between gap-16 px-4 my-8 mt-20 goals lg:px-24 fex-col md:flex-row"
    >
      <div className="space-y-6 goals-area md:w-1/2">
        <h2 className="my-2 ml-5 text-4xl font-bold leading-snug text-center text-black md:w-4/5">
          SANSKRIT WEEK CELEBRATION
        </h2>
        <p className="text-xl text-justify mb-7">
          The Sanskrit Week Celebration, organized by the Centre for Sanskrit
          Studies, IIT Kanpur, is scheduled to be held on{" "}
          <span className="text-red-900">
            <b>
              11th August 2025 from 6:15 PM to 8:15 PM at Room 101, Rajeev
              Motwani Building.
            </b>
          </span>{" "}
          As part of the सप्तसप्ताहसमारोहः initiative, and under the broader
          vision of ŚIKṢĀ: Study Centre for Indian Knowledge System for Holistic
          Advancement, the event will feature a culturally rich evening titled
          बालप्रस्तुतिः, comprising लघुनाटिका (short plays), पाठाभिनयः (dramatic
          readings), and अभिनयगीतम् (musical performances). Highlights of the
          evening also include सभाषितान्ताक्षरी and संस्तुतिसङ्गीता, reflecting
          the depth and elegance of Sanskrit's literary and oral traditions.
          Coordinated by Prof. Arnab Bhattacharya and Prof. Nachiketa Tiwari,
          this celebration offers an immersive experience into the beauty of
          India’s classical language. All are cordially invited to join this
          vibrant and intellectually engaging evening.
        </p>
      </div>
      <div className="font-serif md:w-1/2">
        <img
          src="img1 copy.jpg"
          alt=""
          className="object-cover px-4 py-5 mx-auto duration-300 rounded-tl-lg rounded-br-lg cursor-pointer shadow-7xl md:m-5 md:h-1/2"
        />
      </div>
    </div>
  );
}

export default Upcomingevents;
