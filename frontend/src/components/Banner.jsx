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
    <div className="flex items-center bg-gradient-to-l from-orange-200 via-orange-50 to-orange-100 lg:px-20">
      <div className="flex flex-col items-center w-full gap-10 py-20 md:flex-row justify between">
        {/* left side */}
        <div className="h-full space-y-3 md:w-3/2">
          <h2 className="px-4 font-serif text-5xl font-semibold leading-snug text-center text-black">
            ŚIKṢĀ:
            <span className="px-2 font-semibold text-orange-900">
              Study Centre for Indian Knowledge System <span>{typeEffect}</span>
            </span>
          </h2>

          <p className="px-4 font-serif text-xl leading-snug text-center ">
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
