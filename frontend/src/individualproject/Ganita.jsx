import React from "react";
import image1 from "../assets/niti/math3.webp";
import Ganitaproduct from "./Ganitaproduct";
function Ganita() {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[450px] sm:min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {" "}
        {/* background pattern */}
        <div className="h-[650px] w-[650px] bg-red-700 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
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
                  className="mt-20 text-5xl font-bold text-red-700 sm:text-4xl lg:text-6xl"
                >
                  गणित (gaṇita)
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-xl font-semibold text-justify text-red-700"
                >
                  Gaṇita, the Sanskrit term for mathematics, holds a profound
                  place in India’s intellectual heritage. It was not merely a
                  tool for calculation but a disciplined path to logical
                  thinking and truth. Ancient Indian scholars like Āryabhaṭa,
                  Bhāskara, and Brahmagupta made remarkable contributions in
                  arithmetic, algebra, and geometry under the umbrella of
                  Gaṇita. It played a crucial role in astronomy, architecture,
                  and even philosophy. Rooted in precision and reasoning, Gaṇita
                  reflected a harmonious blend of utility and spiritual insight.
                </p>
              </div>
              {/* image section */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  <img
                    src={image1}
                    alt=""
                    className="w-[550px] h-[550px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto pe-52"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Ganitaproduct />
      </div>
    </div>
  );
}

export default Ganita;
