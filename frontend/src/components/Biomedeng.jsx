import React from "react";

function Biomedeng() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen px-6 py-12 md:px-24">
      <div className="max-w-4xl mx-auto text-[#11747C]">
        {/* BioMedEng25 Section */}
        <section className="mb-16">
          <h2 className="mb-4 text-4xl font-bold">BioMedEng25</h2>
          <p className="mb-4 text-xl text-black">
            BioMedEng25, the UK’s largest gathering of Biomedical Engineers,
            Medical Engineers and Bioengineers, will be hosted by the
            <strong>
              {" "}
              University of Strathclyde and University of Glasgow
            </strong>
            , at the Technology and Innovation Centre in Glasgow, Scotland on
            <strong> 4th – 5th September 2025</strong>, please save the date.
          </p>
          <p className="text-xl text-black">
            More information and details of the call for abstract is available
            on the BioMedEng25 conference website –
            <a
              href="https://www.biomedeng25.com"
              className="text-[#11747C] underline ml-1 hover:text-[#0e5c5f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              BioMedEng25 | Strathclyde and Glasgow
            </a>
          </p>
        </section>

        {/* Upcoming Conferences */}
        <section className="mb-16">
          <h2 className="mb-4 text-3xl font-bold">Upcoming Conferences</h2>
          <p className="text-xl text-black">
            An Expression of Interests call for BioMedEng26 and BioMedEng27 will
            be circulated shortly.
          </p>
        </section>

        {/* Previous Conferences */}
        <section>
          <h2 className="mb-4 text-3xl font-bold">Previous Conferences</h2>
          <p className="text-xl text-black">
            For more information about our previous conferences,
            <a
              href="https://www.biomedeng.com/previous-conferences"
              className="text-[#11747C] underline ml-1 hover:text-[#0e5c5f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
export default Biomedeng;
