import React from "react";
import { Link } from "react-router-dom";
import book from "../assets/banner/book.png";
const Section2 = () => {
  return (
    <div className="px-4 py-10 mt-5 bg-amber-600 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-3 text-2xl font-bold leading-snug">
            Indian Knowledge System E-Library:
          </h2>
          <p className="text-xl text-justify">
            The ancient land of Bharat, steeped in antiquity, boasts an
            unparalleled wealth of knowledge spanning Philosophy, Science,
            Mathematics, Medicine, Arts, and more. To preserve, promote, and
            disseminate this invaluable heritage, an Indian Knowledge System
            (IKS) E-library emerges as a digital repository.
          </p>

          <Link to="/about" className="block mt-10">
            <button className="px-5 py-2 font-semibold text-white transition-all duration-200 bg-blue-700 rounded hover:bg-black">
              Explore More
            </button>
          </Link>
        </div>
        <div>
          <img src={book} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
