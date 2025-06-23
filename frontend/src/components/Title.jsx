import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Title() {
  return (
    <div className="flex flex-col items-center justify-between mb-0 lg:px-20 md:flex-row bg-gradient-to-l from-orange-200 via-orange-50 to-orange-100 ">
      <div className="md:w-1/2">
        <img src={logo} alt="" className="rounded-full w-28" />
      </div>
    </div>
  );
}

export default Title;
