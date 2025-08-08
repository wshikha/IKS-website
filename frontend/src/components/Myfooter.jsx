import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaKey } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#11747C] text-white px-4 md:px-20 py-10 overflow-hidden">
      {/* Social Icons */}
      <div className="flex justify-end mb-6 space-x-6 text-3xl">
        <FaLinkedin className="cursor-pointer hover:text-gray-300" />
        <FaTwitter className="cursor-pointer hover:text-gray-300" />
        <FaEnvelope className="cursor-pointer hover:text-gray-300" />
        <FaKey className="cursor-pointer hover:text-gray-300" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 space-y-1 text-lg ">
        <p>
          <span className="font-semibold underline cursor-pointer">
            Contact BioMedEng
          </span>{" "}
          | <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
        <p>Registered Charity Number 1191005</p>
        <p>
          The BioMedEng Association, Department of Bioengineering, Imperial
          College London, Bessemer Building, London, UK, SW7 2AZ.
        </p>
        <p>
          Content © 2025 The BioMedEng Association and contributors, as
          indicated.
        </p>
        <p className="mt-2 text-xs">
          Designed by{" "}
          <a
            href="#"
            className="font-semibold text-blue-300 underline hover:text-white"
          >
            Shikha Shukla
          </a>{" "}
          in 2025
        </p>
      </div>

      {/* Background BioMedEng Text */}
      <div className="absolute bottom-10 right-5 text-[80px] md:text-[130px] font-semibold text-[#0F5A61] opacity-30 select-none pointer-events-none">
        BioMedEng
      </div>

      {/* PDF Icon Button (optional if needed) */}
      <div className="absolute flex items-center justify-center w-8 h-8 text-red-600 bg-white rounded-full shadow-lg bottom-10 right-2 md:w-10 md:h-10">
        <span className="text-xl">📄</span>
      </div>
    </footer>
  );
};

export default Footer;
