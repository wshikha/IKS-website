import React from "react";
import image1 from "../assets/niti/Picture6.png";

import Ayurvedaproduct from "./Ayurvedaproduct";
function Ayurveda() {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {" "}
        {/* background pattern */}
        <div className="h-[650px] w-[650px] bg-green-600 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/*text content section*/}
              <div className="relative z-10 flex flex-col justify-center order-2 gap-4 text-center pt-17 sm:pt-0 sm:text-left sm:order-1">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mt-20 text-5xl font-bold text-green-900 sm:text-4xl lg:text-6xl"
                >
                  आयुर्विज्ञान (āyurvijñāna)
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-xl font-semibold text-justify text-green-900"
                >
                  Ayurveda, the ancient Indian system of medicine, offers a
                  holistic approach to health by balancing the body, mind, and
                  spirit. Rooted in nature, it emphasizes prevention over cure,
                  using herbs, diet, lifestyle, and meditation. Unlike modern
                  medicine’s focus on symptoms, Ayurveda seeks to address the
                  root cause of illness. It honors the uniqueness of every
                  individual through personalized treatment. In a world rushing
                  toward quick fixes, Ayurveda invites us to slow down and heal
                  in harmony with nature.
                </p>
              </div>
              {/* image section */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  <img
                    src={image1}
                    alt=""
                    className="w-[650px] h-[500px] sm:h-[500px] sm:w-[650px] sm:scale-125 object-contain mx-auto pe-52 pt-18"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Ayurvedaproduct />
      </div>
    </div>
  );
}

export default Ayurveda;
