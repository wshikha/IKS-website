import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
function Title() {
  return (
    <div className="flex flex-col items-center justify-between mb-0 bg-amber-600 lg:px-20 md:flex-row">
      <div className="md:w-1/2">
        <img src={logo} alt="" className="rounded-full w-28" />
      </div>
    </div>
  );
}

export default Title;
