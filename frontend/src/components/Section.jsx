import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section
      data-aos="fade-up"
      className="px-4 py-16 font-serif text-black bg-gray-100 lg:px-24"
    >
      <div className="max-w-5xl mx-auto space-y-8 text-center ">
        {/* Heading */}
        <h2 className="inline-block pb-2 text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
          Our Focus
        </h2>

        {/* Content */}
        <p className="text-lg leading-relaxed text-justify text-gray-800 md:text-xl">
          At <strong>ŚIKṢĀ</strong>, our activities center around the innovative
          application of science and technology to facilitate holistic
          advancement. We draw inspiration from the traditional and sustainable
          methods of ancient India, adapting these practices to modern contexts
          in collaboration with technologists, scientists, entrepreneurs, and
          professional researchers.
        </p>

        {/* CTA Button */}
        <div>
          <Link to="/about">
            <button className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg shadow bg-amber-700 hover:bg-amber-800">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
