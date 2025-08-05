import React from "react";

const About = () => {
  return (
    <div className="px-5 py-20 mt-12 font-serif bg-amber-50">
      {/* Our Goals Section */}
      <section
        data-aos="fade-up"
        className="px-4 py-12 font-serif text-black bg-amber-50 md:px-10 lg:px-24"
      >
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          {/* Heading */}
          <h2 className="inline-block pb-2 text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
            Our Goals
          </h2>
        </div>

        <div className="px-4 py-10 mx-auto mt-10 bg-white rounded-lg shadow-md md:px-16 lg:px-24">
          <p className="text-lg leading-relaxed text-justify text-gray-800">
            We are committed to achieving several key objectives:
            <ul className="pl-5 mt-4 space-y-2 list-disc">
              <li>
                <b>Research:</b> Defining the state of the art in Indian
                Knowledge System through integration of science and technology.
                This includes exploring modern methodologies to enhance heritage
                conservation.
              </li>
              <li>
                <b>Training:</b> Developing human resources rooted in the Indian
                Knowledge System to empower individuals to contribute to
                holistic societal advancement and research.
              </li>
              <li>
                <b>Content Development & Outreach:</b> Supporting researchers by
                creating pedagogically relevant materials from Indian traditions
                and Sanskrit sources. These resources enable effective
                integration with science, technology, and outreach.
              </li>
            </ul>
            <br />
            Through these goals, ŚIKṢĀ strives to build a sustainable framework
            that preserves and promotes India’s scientific, philosophical,
            cultural, and literary heritage for future generations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        data-aos="fade-up"
        className="px-4 py-12 font-serif text-black bg-amber-50 md:px-10 lg:px-24"
      >
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          {/* Heading */}
          <h2 className="inline-block pb-2 text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
            About ŚIKṢĀ: Centre for IKS
          </h2>
        </div>

        <div className="px-4 py-10 mx-auto mt-10 bg-white rounded-lg shadow-md md:px-16 lg:px-24">
          <p className="text-lg leading-relaxed text-justify text-gray-800">
            ŚIKṢĀ: Study Centre for Indian Knowledge System for Holistic
            Advancement at IIT Kanpur is dedicated to exploring and revitalizing
            India's rich heritage through traditional knowledge systems. Our
            primary focus spans Bhāratīya Bhāṣā (Indian Languages), Gaṇita
            (Mathematics), Darśana (Philosophy), Nīti (Ethics), Kalā (Art), and
            Āyurveda (Traditional Medicine).
            <br />
            <br />
            By developing reference materials rooted in primary Sanskrit texts,
            we aim to integrate these themes into diverse research and outreach
            initiatives at IIT Kanpur. Collaborating with mentors, participants
            engage with original texts to curate significant references that
            bridge ancient knowledge with modern applications.
            <br />
            <br />
            ŚIKṢĀ aspires to inspire creativity, critical thinking, and ethical
            reasoning. Our ultimate mission is to connect India's timeless
            wisdom with contemporary challenges, ensuring its enduring relevance
            and impact on future generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
