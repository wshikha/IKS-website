import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleEvent = () => {
  const { _id, name, image_url, description, date } = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-between px-4 my-8 md:flex-row lg:px-24">
      <div className="w-full px-4 pt-10 space-y-6 md:w-2/3 md:pt-32">
        {image_url ? (
          <img
            src={image_url}
            alt={name}
            className="w-full h-auto max-h-[500px] object-cover border rounded-lg shadow-lg"
          />
        ) : (
          <p className="text-red-600">Image not available</p>
        )}
      </div>

      <div className="w-full px-4 font-serif md:w-4/5 md:px-20">
        <h2 className="text-3xl font-bold text-center text-black md:text-4xl">
          {name} ({date})
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-black md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleEvent;
