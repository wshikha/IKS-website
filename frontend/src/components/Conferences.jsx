import React from "react";

const Conferences = () => {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto text-center text-gray-800">
      {/* BioMedEng25 Section */}
      <h2 className="mb-4 text-4xl font-bold" style={{ color: "#11747C" }}>
        BioMedEng25
      </h2>
      <p className="mb-4 text-xl">
        BioMedEng25, the UK’s largest gathering of Biomedical Engineers, Medical
        Engineers and Bioengineers, will be hosted by the{" "}
        <strong>University of Strathclyde and University of Glasgow</strong>, at
        the Technology and Innovation Centre in Glasgow, Scotland on{" "}
        <strong>4th – 5th September 2025</strong>, please save the date.
      </p>
      <p className="mb-12 text-xl">
        More information and details of the call for abstract is available on
        the BioMedEng25 conference website –{" "}
        <a
          href="#"
          className="font-semibold underline"
          style={{ color: "#11747C" }}
        >
          BioMedEng25 | Strathclyde and Glasgow
        </a>
      </p>

      {/* Upcoming Conferences */}
      <h2 className="mb-2 text-4xl font-bold" style={{ color: "#11747C" }}>
        Upcoming Conferences
      </h2>
      <p className="mb-12 text-xl">
        An Expression of Interests call for BioMedEng26 and BioMedEng27 will be
        circulated shortly.
      </p>

      {/* Previous Conferences */}
      <h2 className="mb-2 text-4xl font-bold" style={{ color: "#11747C" }}>
        Previous Conferences
      </h2>
      <p className="text-xl">
        For more information about our previous conferences, click{" "}
        <a
          href="#"
          className="font-semibold underline"
          style={{ color: "#11747C" }}
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Conferences;
