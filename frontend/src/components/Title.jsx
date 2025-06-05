import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Title() {
  return (
    <div className="flex flex-col items-center justify-between mb-0 lg:px-24 md:flex-row bg-gradient-to-l from-blue-300 via-blue-100 to-blue-200 ">
      <div className="md:w-1/2">
        <img src={logo} alt="" className="rounded-full w-28" />
      </div>
    </div>
  );
}

export default Title;
