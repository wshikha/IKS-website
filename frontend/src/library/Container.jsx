import React from "react";
import Favimg from "../assets/banner/banner1.jpg";
const Container = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 px-4 py-10 my-10 lg:px-24 md:flex-row">
      <div className="md:w-1/2">
        <img src={Favimg} alt="" className="w-10/12 rounded-full" />
      </div>
      <div className="space-y-6 md:w-1/2">
        <h2 className="my-5 text-2xl font-bold leading-snug md:w-3/4">
          {" "}
          About <span className="text-blue-700">ŚIKṢĀ: Centre for IKS!</span>
        </h2>
        <p className="mb-10 text-lg text-justify md:w-5/6">
          ŚIKṢĀ: Study Centre for Indian Knowledge Systems We are honoured to
          announce the opening of a new haven for scholars and seekers of
          knowledge – a specialised library established by ŚIKṢĀ: Study Centre
          for Indian Knowledge Systems at IIT Kanpur. This curated collection
          aligns with ŚIKṢĀ's mission to promote, facilitate, and benefit from
          IKS-related studies, research, content development, and outreach.
        </p>
      </div>
    </div>
  );
};

export default Container;
