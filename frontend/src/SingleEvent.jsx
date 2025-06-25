import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleEvent = () => {
  const { _id, name, image_url, description, date } = useLoaderData();

  return (
    <div className="flex items-center justify-between px-10 my-8 goals lg:px-24 fex-col md:flex-row ">
      <div className="pt-32 space-y-6 rounded-sm goals-area md:w-2/3">
        <img
          src={image_url}
          alt=""
          className="object-cover px-4 py-5 mx-auto duration-300 bg-orange-200 border rounded-lg cursor-pointer shadow-7xl md:m-5 md:h-100"
        />{" "}
      </div>
      <div className="px-20 font-serif md:w-4/5 ">
        <h2 className="my-0 text-4xl font-bold leading-snug text-center text-black md:w-full">
          {name} ({date})
        </h2>

        <div className="flex display ">
          <p className="w-full px-5 mt-10 text-xl leading-snug text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
