import React from "react";
import { Link } from "react-router-dom";

import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";

const Subject = () => {
  return (
    <section className="px-6 py-12 font-serif bg-gray-100 lg:px-24">
      <div className="flex flex-col gap-12 mx-auto max-w-7xl md:flex-row md:items-start md:justify-between">
        {/* Contact Info */}
        <div className="space-y-6 md:w-1/2">
          <h3 className="flex items-center gap-3 text-3xl font-bold text-amber-800">
            Send us a message
            <img src={msg_icon} alt="Message Icon" className="w-10 h-10" />
          </h3>
          <p className="text-xl text-black ">
            Feel free to reach out to us for any queries or feedback.
          </p>
          <ul className="space-y-3 text-xl text-black">
            <li className="flex items-center gap-2">
              <img src={mail_icon} alt="Email Icon" className="w-9 h-9" />
              <span>iks_library@iitk.ac.in</span>
            </li>
            <li className="flex items-center gap-2 text-xl">
              <img src={phone_icon} alt="Phone Icon" className="w-9 h-9" />
              <span>+91-512-6797650</span>
            </li>
            <li className="flex items-start gap-2">
              <img
                src={location_icon}
                alt="Location Icon"
                className="mt-1 w-7 h-7"
              />
              <span>
                RM 608, Rajeev Motwani Building, <br />
                Indian Institute of Technology Kanpur, <br />
                Kalyanpur, Kanpur – 208016, U.P. (INDIA)
              </span>
            </li>
          </ul>
        </div>

        {/* Library Info */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-4xl font-bold text-amber-800">
            शिक्षा-ग्रन्थालय
          </h2>
          <p className="text-xl leading-relaxed text-justify text-black">
            We are honoured to announce the opening of a new haven for scholars
            and seekers of knowledge – a specialised library established by
            ŚIKṢĀ: Study Centre for Indian Knowledge Systems at IIT Kanpur. This
            curated collection aligns with ŚIKṢĀ's mission to promote,
            facilitate, and benefit from IKS-related studies, research, content
            development, and outreach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subject;
