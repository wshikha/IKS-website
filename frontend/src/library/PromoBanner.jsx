import React from "react";
import logo2 from "../assets/logo.jpg";
import Favimg from "../assets/banner/banner1.jpg";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 px-2 py-5 my-5 lg:px-24 md:flex-row">
      <div className="md:w-1/2">
        <img src={logo2} alt="" className="w-96" />
      </div>
      <div className="space-y-6 md:w-3/2">
        <h2 className="my-5 text-3xl font-bold leading-snug md:w-3/4">
          {" "}
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg text-justify md:w-5/6">
          With Explainer, you can highlight any text to get an explanation
          generated with AWS generative AI. Learn new terms or product info—no
          searching required. To get started, turn on the Explainer toggle in
          the lower right.
        </p>
        <div className="flex flex-col justify-between gap-6 sm:flex-row md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">600+</h3>
            <p className="text-base">Book Listings</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">13+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
        <Link
          to="http://172.20.170.71:8081/cgi-bin/koha/opac-search.pl?advsearch=1&weight_search=1&do=Search&limit=mc-itype%2Cphr%3ABK&sort_by=relevance"
          className="block mt-12"
        >
          <button className="px-5 py-2 font-semibold text-white transition-all duration-200 bg-blue-700 rounded hover:bg-black">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
