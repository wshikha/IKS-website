import React from "react";
import image1 from "../assets/niti/Picture3.webp";
import Nitiproduct from "./Nitiproduct";
function Niti() {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {" "}
        {/* background pattern */}
        <div className="h-[650px] w-[650px] bg-red-800 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
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
                  className="mt-20 text-5xl font-bold text-red-800 sm:text-4xl lg:text-6xl"
                >
                  नीति (Nīti)
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-xl font-semibold text-justify text-red-800"
                >
                  The Indian Epic Mahābhārata stands as a timeless treasure
                  trove of wisdom, offering intricate narratives that delve into
                  the complexities of human nature, ethics, and morality. While
                  its overarching storyline is widely known, the untold stories
                  within the Mahābhārata carry invaluable lessons that are often
                  overlooked. Revisiting this epic opens doors to discovering
                  these lesser-known tales, which hold profound significance in
                  shaping moral values, particularly among children.
                </p>
              </div>
              {/* image section */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  <img
                    src={image1}
                    alt=""
                    className="w-[500px] h-[500px] sm:h-[550px] sm:w-[550px] sm:scale-125 object-contain mx-auto pe-52"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Nitiproduct />
      </div>
    </div>
  );
}

export default Niti;
