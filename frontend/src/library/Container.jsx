import React from "react";

const Container = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 px-4 py-5 lg:px-24 md:flex-row bg-amber-700">
      <div className="md:w-1/2">
        <h2 className="my-2 text-4xl font-bold leading-snug text-white md:w-3/4">
          तद्दिव्यमव्ययं धाम सारस्वतमुपास्महे। <br />
          यत्प्रसादात्प्रलीयन्ते मोहान्धतमसच्छटाः॥
        </h2>
        <p className="text-2xl text-justify text-white md:w-5/6">
          That divine abode of knowledge, we revere,
          <br />
          by whose grace the dense darkness of delusion dissolves.
        </p>
      </div>
      <div className="space-y-6 md:w-1/2">
        <img
          src="banner/banner3.jpg"
          alt=""
          className="w-10/12 rounded-full h-60"
        />
      </div>
    </div>
  );
};

export default Container;
