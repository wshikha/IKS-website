import React from "react";

const Vision = () => {
  return (
    <section
      data-aos="fade-up"
      className="px-4 py-12 font-serif text-black bg-amber-50 md:px-10 lg:px-24"
    >
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        {/* Heading */}
        <h2 className="inline-block pb-2 text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
          Vision
        </h2>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed text-justify md:text-xl">
          To establish <strong>IIT Kanpur</strong> as a global leader in{" "}
          <strong>Bhāratīya-Jñānaparamparā</strong> (Indian Knowledge System)
          studies—revitalizing, integrating, and disseminating the profound
          wisdom of Bhārata.
          <br />
          <br />
          <strong>ŚIKṢĀ</strong> aspires to foster interdisciplinary excellence
          by drawing from timeless disciplines:
        </p>

        {/* List of Disciplines */}
        <ul className="text-lg leading-loose text-left text-gray-800 list-disc list-inside md:text-xl">
          <li>
            <strong>Ārogya</strong> (Health & Wellness)
          </li>
          <li>
            <strong>Gaṇita-Jyotiṣa</strong> (Mathematics & Astronomy)
          </li>
          <li>
            <strong>Saṃskṛta-Bhāṣāśāstra</strong> (Sanskrit & Linguistics)
          </li>
          <li>
            <strong>Purātan-Dhātuśāstra & Dravyavijñāna</strong>{" "}
            (Archaeo-metallurgy & Materials)
          </li>
          <li>
            <strong>Dhvani-vijñāna & Saṃgīta</strong> (Acoustics & Music)
          </li>
          <li>
            <strong>Darśana</strong> (Philosophy)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Vision;
