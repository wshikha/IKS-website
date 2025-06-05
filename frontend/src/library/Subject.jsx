import React from "react";
import { Link } from "react-router-dom";
import Favimg from "../assets/banner/banner1.jpg";
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import SubjectList from "./SubjectList";
const Subject = () => {
  return (
    <div className="flex items-center bg-gradient-to-l from-blue-300 via-slate-100 to-blue-100 mb-14">
      <div className="flex flex-col items-center w-full py-10 md:flex-row justify between">
        <div className="text-lg contact-col lg:px-32">
          <h3 className="text-xl font-bold color-black">
            Send us a message <img src={msg_icon} alt=" " />
          </h3>
          <p className="justify-center text-black">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important below. Your feedback, questions, and suggestions are
            important to us as we strive to provide excetional service to our
            university community.
          </p>
          <ul className="text-black">
            <li>
              <img src={mail_icon} alt="" />
              iks_library@iitk.ac.in
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +915126797650
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" />
              Indian Institute of Technology Kalyanpur Kanpur-208016 INDIA
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="mb-3 text-3xl font-bold leading-snug">
            शिक्षा-ग्रन्थालय
          </h2>
          <p className="text-lg text-justify">
            We are honoured to announce the opening of a new haven for scholars
            and seekers of knowledge – a specialised library established by
            ŚIKṢĀ: Study Centre for Indian Knowledge Systems at IIT Kanpur. This
            curated collection aligns with ŚIKṢĀ's mission to promote,
            facilitate, and benefit from IKS-related studies, research, content
            development, and outreach.
          </p>
          <Link to="/subject-list" className="block mt-12">
            <button className="px-5 py-2 font-semibold text-white transition-all duration-200 bg-blue-700 rounded hover:bg-black">
              Subject List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subject;
