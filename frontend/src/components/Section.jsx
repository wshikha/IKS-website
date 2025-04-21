import React from "react";
import Favimg from "../assets/favimg.jpg";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className="flex items-center justify-between gap-12 px-4 my-16 goals lg:px-24 fex-col md:flex-row">
      <div className="space-y-6 goals-area md:w-1/2">
        <img src={Favimg} alt="" className="rounded md:w-10/11" />
      </div>
      <div className="md:w-1/2">
        <h2 className="my-5 text-2xl font-bold leading-snug text-center text-black underline md:w-3/5">
          Our Goals
        </h2>
        <p className="mb-10 text-justify">
          We are committed to achieving several key objectives: Research: We aim
          to define the state of the art in traditional Indian Knowledge System
          activities through the integration of science and technology. This
          involves exploring new methodologies and technologies that can enhance
          heritage conservation efforts. Training: We focus on training human
          resources rooted in the Indian Knowledge System. By equipping
          individuals with the necessary skills and knowledge, we enhance their
          capacity to contribute effectively to holistic advancement of our .
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
