import React from "react";

const About = () => {
  return (
    <div className="px-5 py-20 mt-12 font-sans bg-white">
      {/* About the Association */}
      <section className="px-4 text-black py-7 md:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11747C]">
            Association of Biomedical Engineers, Medical Engineers and
            Bioengineers
          </h2>
          <p className="text-xl leading-relaxed text-justify text-gray-800">
            The BioMedEng Association is a not-for-profit organisation that
            advances education and knowledge transfer in Biomedical Engineering,
            Medical Engineering and Bioengineering. Under a variety of similar
            names, the organisation has held the annual UK bioengineering
            conference for over ten (10) years. These meetings have grown to
            become the UK’s largest gathering of Biomedical Engineers, Medical
            Engineers and Bioengineers.
          </p>
        </div>
      </section>

      {/* About the Conference */}
      <section className="px-4 py-12 text-black md:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11747C]">
            About the Conference Series
          </h2>
          <p className="text-xl leading-relaxed text-justify text-gray-800">
            The conference was initiated in 2008 at Imperial College London as
            ‘Bioengineering08’, since there was not a UK conference suitable for
            the breadth of academic bioengineering research being conducted at
            the time.
            <br />
            <br />
            It has been held every year since then – at the University of Oxford
            (3x), University of Nottingham (1x), Leeds University (1x),
            Strathclyde University (1x), Queen Mary University London (1x),
            King’s College London (1x), and Imperial College London (4x).
            <br />
            <br />
            It was hosted at Imperial College in 2014 as ‘MECBioeng14’,
            following a rebranding to include the annual meetings of the
            EPSRC/Wellcome Trust Medical Engineering Centres. It was
            subsequently held at the University of Oxford in 2015, University of
            Leeds in 2016 and King’s College London in 2017. In order to be as
            inclusive as possible and cover all areas of the ever-growing
            discipline, the conference was rebranded in 2018 to start the
            BioMedEng series.
            <br />
            <br />
            The conference delivers an extensive scientific programme that
            combines plenary lectures by world-class experts from Industry and
            Academia, with keynote addresses from leading academics. It also
            includes a series of oral and poster presentations from students and
            Early Career Researchers and a range of interesting workshops. The
            workshops allow an in-depth exploration of subject-specific topics
            as well as the opportunity to engage the community with panel
            discussions on topics including – translating research beyond
            academia, celebrating the contributions of women in changing the
            innovation landscape in the UK, research funding support for Early
            Career Researchers, amongst others.
          </p>
        </div>
      </section>

      {/* Extended About the Association */}
      <section className="px-4 py-12 text-black md:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11747C]">
            More About the Association
          </h2>
          <p className="text-xl leading-relaxed text-justify text-gray-800">
            The conferences have been an excellent opportunity to bring the UK
            Bioengineering, Biomedical Engineering and Medical Engineering
            community together, and share advances in the discipline. Beyond the
            successful conferences we have optimised and formalised our
            processes in order to build and support the ever-increasing
            community further.
            <br />
            <br />
            We initially formed the BioMedEng Council, comprised of leading
            academics from 20 different UK universities and institutions that
            offer qualifications in the discipline, to serve as the leadership
            unit and steering committee of the formal body. We have also
            developed an extensive governing document which has been approved by
            the Charity Commission to serve as the legal framework for promoting
            the study and practice of the discipline. We have also introduced a
            strategic bidding process that allows the conference to be hosted by
            other engineering departments and universities across the UK.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
