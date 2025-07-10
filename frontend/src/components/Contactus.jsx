import React from "react";
import "./Contact.css";

import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";

const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
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
    <div className="contact ">
      <div className="p-20 rounded-tr-xl rounded-b-xl contact-col bg-amber-600 lg:px-24 m-7 rounded-l-xl ">
        <h3>
          Send us a message <img src={msg_icon} alt=" " />
        </h3>
        <p className="text-black">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important below. Your feedback, questions, and suggestions are
          important to us as we strive to provide excetional service to our
          university community.
        </p>
        <ul>
          <li className="text-black">
            <img src={mail_icon} alt="" className="text-black" />
            head_iks@iitk.ac.in
          </li>
          <li className="text-black">
            <img src={phone_icon} alt="" className="text-black" />
            +915126797650
          </li>
          <li className="text-black">
            {" "}
            <img src={location_icon} alt="" className="text-black" />
            Indian Institute of Technology Kalyanpur Kanpur-208016 INDIA
          </li>
          "
        </ul>
      </div>
      <div className="m-20 contact-col ">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="enter your message"
            required
          ></textarea>
          <button className="px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 hover:bg-black">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contactus;
