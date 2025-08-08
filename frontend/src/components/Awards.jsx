import React from "react";

const Awards = () => {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto leading-relaxed text-gray-800">
      {/* Main Awards Heading */}
      <h2 className="mb-4 text-4xl font-bold" style={{ color: "#11747C" }}>
        Awards
      </h2>

      {/* Awards Description */}
      <p className="mb-4 text-xl">
        The BioMedEng Association usually offers a range of awards at its annual
        conference:
      </p>

      {/* Award List */}
      <ul className="mb-8 text-xl list-disc list-inside">
        <li>The BioMedEng Legacy Prize</li>
        <li>The BioMedEng Innovation Prize</li>
        <li>Early Career Researcher Award</li>
        <li>Best Student Talk</li>
        <li>Best Poster Award</li>
        <li>Best Rapid Fire Presentation</li>
        <li>Best Project Presentation Award</li>
      </ul>

      {/* Previous Awards Info */}
      <p className="mb-4 text-xl">Details of previous award recipients:</p>

      {/* BioMedEng19 Award Recipients */}
      <h3 className="mb-2 text-2xl font-bold" style={{ color: "#11747C" }}>
        BioMedEng19 Award Recipients –
      </h3>
      <ul className="mb-8 text-xl list-disc list-inside">
        <li>The 2019 BioMedEng Legacy Prize – Professor Lionel Tarassenko</li>
        <li>The 2019 BioMedEng Innovation Prize – Dr Katerina Spranger</li>
        <li>
          Early Career Researcher Award – Simao Laranjeira, University College
          London
        </li>
        <li>Best Student Talk – Vanessa Mancini, University of Leeds</li>
        <li>Best Poster Award – Sander R Holthof, University of Warwick</li>
        <li>
          Best Rapid Fire Presentation – Zubia A Khan, King’s College London
        </li>
        <li>
          Best UG / MSc Project Presentation Award – Sean S Cullen, Brunel
          University
        </li>
      </ul>

      {/* BioMedEng19 – BHF Travel Award Recipients */}
      <h3 className="mb-2 text-2xl font-bold" style={{ color: "#11747C" }}>
        BioMedEng19 – BHF Travel Award Recipients –
      </h3>
      <ul className="text-xl list-disc list-inside">
        <li>Alex Ainscough – Imperial College London</li>
        <li>Esfandiar Khaleghi – Kingston University</li>
        <li>Gareth Jones – Swansea University</li>
      </ul>
    </div>
  );
};

export default Awards;
