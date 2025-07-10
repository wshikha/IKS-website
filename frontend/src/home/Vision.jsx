import React from "react";
import vision from "../assets/vision.jpg";

const Vision = () => {
  return (
    <div data-aos="fade-up" className="bg-amber-600 vision-area lg:px-24">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="font-serif md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold leading-snug ">Vision</h2>
          <p className="text-xl text-justify ">
            The vision of the Centre is to establish IITK at the forefront of
            IKS studies in the world. In his speech, Prof. Karandikar mentioned
            that the centre's goal is to start an academic program in IKS and
            create a significant impact in the field. The centre will conduct
            research in various domains, including Health & Wellness,
            Mathematics & Astronomy, Sanskrit & Linguistic studies,
            Consciousness studies, Archaeo-metallurgy & Materials, Darsanas,
            Acoustics & Music, and Water management systems.
          </p>
        </div>
        <div className="px-4 py-8 mx-auto duration-300 border rounded-lg cursor-pointer shadow-7xl md:m-5 md:h-80">
          <img src={vision} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
