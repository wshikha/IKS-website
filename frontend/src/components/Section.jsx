import React from "react";
import Favimg from "../assets/favimg.jpg";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-between gap-12 px-4 my-8 goals lg:px-24 fex-col md:flex-row"
    >
      <div className="space-y-6 goals-area md:w-1/3">
        <img
          src={Favimg}
          alt=""
          className="object-cover px-4 py-5 mx-auto duration-300 rounded-tl-lg rounded-br-lg cursor-pointer shadow-7xl md:m-5 md:h-80"
        />
      </div>
      <div className="font-serif md:w-1/2">
        <h2 className="my-2 text-3xl font-bold leading-snug text-center text-black md:w-4/5">
          Our Focus
        </h2>
        <p className="text-xl text-justify mb-7">
          Our Focus At ŚIKṢĀ, our activities center around the innovative
          application of Science and Technology to facilitate Holistic
          Advancement. We draw inspiration from the traditional and sustainable
          methods of ancient India, adapting these practices to modern contexts
          in collaboration with various stakeholders including technologists,
          scientists, entrepreneurs, and professional researchers.
        </p>
        <Link to="/about" className="block">
          <button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-900 rounded hover:bg-black">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
