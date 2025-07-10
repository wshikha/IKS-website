import React from "react";
import BannerCard from "../home/BannerCard";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Banner() {
  const [typeEffect] = useTypewriter({
    words: [""],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div className="flex items-center bg-amber-600 lg:px-20">
      <div className="flex flex-col items-center w-full gap-10 py-16 md:flex-row justify between">
        {/* left side */}
        <div className="h-full space-y-3 md:w-3/2">
          <h2
            data-aos="fade-up"
            className="px-4 font-serif text-5xl font-semibold leading-snug text-center text-white"
          >
            ŚIKṢĀ: Study Centre for Indian Knowledge System
            <span className="px-2 font-semibold">(IKS)</span>
          </h2>

          <p
            data-aos="fade-up"
            className="px-4 font-serif text-2xl font-semibold leading-snug text-center text-black "
          >
            ŚIKṢĀ at IIT Kanpur is dedicated to exploring and revitalizing
            India's rich heritage through the lens of traditional knowledge
            systems. Our focus encompasses major themes such as Bhāratīya Bhāṣā
            (Indian Languages), Gaṇita (Mathematics), Darśana (Philosophy), Nīti
            (Ethics), Kalā (Art), and Āyurveda (Traditional Medicine).
          </p>
        </div>

        {/* right side */}
      </div>
    </div>
  );
}

export default Banner;
