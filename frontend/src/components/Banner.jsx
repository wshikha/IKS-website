import React from "react";

function Banner() {
  return (
    <section className="px-4 py-12 font-serif text-black sm:px-6 lg:px-12 bg-amber-50">
      {/* Top: Logo + Headings in same row */}
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center md:gap-6">
        {/* Logo */}
        <img
          src="logo (2).jpg"
          alt="ŚIKṢĀ Logo"
          className="rounded-md w-30 sm:w-32 md:w-36"
        />

        {/* Headings */}
        <div className="text-center md:text-center">
          <h2 className="text-4xl font-bold leading-snug sm:text-4xl lg:text-5xl text-amber-800">
            समग्रविकासार्थं भारतीयज्ञानपरम्परायाः अध्ययनकेन्द्रम्
          </h2>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            ŚIKṢĀ :{" "}
            <span className="text-amber-900">
              Study Centre for Indian Knowledge System for Holistic Advancement
            </span>
          </h2>
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="max-w-6xl px-2 mx-auto mt-6 text-justify sm:px-4">
        <p className="text-lg leading-relaxed text-center text-gray-800 sm:text-xl">
          <strong>ŚIKṢĀ</strong> at IIT Kanpur is dedicated to exploring and
          revitalizing India's rich heritage through the lens of traditional
          knowledge systems. Our focus encompasses major themes such as{" "}
          <em>Bhāratīya Bhāṣā</em> (Indian Languages), <em>Gaṇita</em>{" "}
          (Mathematics), <em>Darśana</em> (Philosophy), <em>Nīti</em> (Ethics),{" "}
          <em>Kalā</em> (Art), and <em>Āyurveda</em> (Traditional Medicine).
        </p>
      </div>
    </section>
  );
}

export default Banner;
