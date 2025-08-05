import React from "react";

import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone.jpg";
import location_icon from "../assets/location-icon.png";

const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "7513fd6b-690a-4045-adf6-ef9b28fee574");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col gap-10 px-6 py-12 pt-20 my-12 shadow-lg md:flex-row md:px-20 bg-orange-50 rounded-xl">
      {/* Left Column */}
      <div className="flex-1 p-8 text-black shadow-md bg-amber-50 rounded-xl">
        <h3 className="flex items-center gap-3 mb-4 text-2xl font-bold text-blue-950">
          Send us a message <img src={msg_icon} alt="msg" className="w-8 h-8" />
        </h3>
        <p className="mb-6">
          Feel free to reach out to us for any queries or feedback.
        </p>

        <ul className="space-y-6 text-lg">
          <li className="flex items-center gap-3">
            <img src={mail_icon} alt="mail" className="w-8 h-8" />
            head_iks@iitk.ac.in
          </li>
          <li className="flex items-center gap-3">
            <img src={phone_icon} alt="phone" className="w-8 h-8" />
            +91-512-6797650
          </li>
          <li className="flex items-start gap-3">
            <img src={location_icon} alt="location" className="w-8 h-8 mt-1" />
            <div>
              RM 607, Rajeev Motwani Building, <br />
              Indian Institute of Technology Kanpur, <br />
              Kalyanpur, Kanpur-208016, U.P. (INDIA)
            </div>
          </li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-8 bg-white shadow-md rounded-xl">
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-amber-900">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-amber-900">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-amber-900">
              Write your message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition-all rounded bg-amber-700 hover:bg-black"
          >
            Submit Now
          </button>
        </form>
        <p className="mt-4 font-medium text-green-700">{result}</p>
      </div>
    </div>
  );
};

export default Contactus;
