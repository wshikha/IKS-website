import React from "react";
import Favimg from "../assets/favimg.jpg";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className="flex items-center justify-between gap-12 px-4 my-16 goals lg:px-24 fex-col md:flex-row">
      <div className="space-y-6 goals-area md:w-1/3">
        <img src={Favimg} alt="" className="rounded md:w-10/11" />
      </div>
      <div className="font-serif md:w-1/2">
        <h2 className="my-5 text-2xl font-bold leading-snug text-center text-black md:w-4/5">
          Our Focus
        </h2>
        <p className="mb-10 text-justify">
          Our Focus At ŚIKṢĀ, our activities center around the innovative
          application of Science and Technology to facilitate Holistic
          Advancement. We draw inspiration from the traditional and sustainable
          methods of ancient India, adapting these practices to modern contexts
          in collaboration with various stakeholders including technologists,
          scientists, entrepreneurs, and professional researchers.
        </p>
        <Link to="/about" className="block">
          <button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded hover:bg-black">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
