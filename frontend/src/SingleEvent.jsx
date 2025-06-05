import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleEvent = () => {
  const { _id, name, image_url, description, date } = useLoaderData();
  return (
    <div className="flex mt-40">
      <div className="px-20 goals-area md:w-5/2">
        <img src={image_url} alt="" className="px-12 md:w-1/3 h-3/2" />
        <h2 className="mt-5 text-4xl font-bold leading-snug text-center text-black md:w-1/3">
          {name} ({date})
        </h2>
        <p className="w-full px-10 mt-10 text-xl leading-snug text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleEvent;
