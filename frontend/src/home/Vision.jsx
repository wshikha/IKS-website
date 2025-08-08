import React from "react";

const Vision = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans text-[#222]">
      <h1 className="text-2xl md:text-3xl font-bold text-[#11747C] mb-4">
        Welcome to The BioMedEng Association
      </h1>

      <p className="mb-4">
        The Association of Biomedical Engineers, Medical Engineers and
        Bioengineers (BioMedEng Association) represents a remarkably broad field
        of multidisciplinary activity that uses engineering tools and techniques
        to solve problems arising in biology and medicine. The Association is a
        registered charity (RCN 1191005) and currently has approximately 1500
        members from academia, industry and healthcare.
      </p>

      <p className="mb-4">
        The organisation has held the annual UK bioengineering conference for
        over ten years. These meetings have grown to become the UK’s largest
        gathering of Biomedical Engineers, Medical Engineers and Bioengineers.
        Our next conference,{" "}
        <a href="#" className="font-semibold text-[#11747C] hover:underline">
          BioMedEng25
        </a>
        , will take place at <strong>University of Strathclyde, Glasgow</strong>{" "}
        from 4th – 5th September 2025.
      </p>

      <p className="mb-4">
        We also have a dedicated{" "}
        <a href="#" className="font-semibold text-[#11747C] hover:underline">
          website for Early Career Researchers
        </a>{" "}
        from across all parts of the association (academic, industry, and wider
        stakeholders).
      </p>

      <p className="mb-4">
        Members can join the Association from Industry, Academic Institutions
        and Research Centres, Clinical Establishments and Hospitals, and
        Governmental and Non-Governmental Organisations. We are pleased to offer
        reduced membership costs for UK students. We actively welcome new
        members to help to create an active and vibrant multidisciplinary
        community supporting research and education in biomedical engineering.{" "}
        <a href="#" className="font-semibold text-[#11747C] hover:underline">
          Click here to join the BioMedEng Association
        </a>
      </p>

      <p className="mb-4">
        We have a range of sponsorship options available for companies:{" "}
        <a href="#" className="font-semibold text-[#11747C] hover:underline">
          Click here to find out more about sponsorship of the Association
        </a>
      </p>

      <div className="mt-8">
        <img
          src="banner1.jpg"
          alt="BioMedEng Event"
          className="object-cover w-full rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default Vision;
