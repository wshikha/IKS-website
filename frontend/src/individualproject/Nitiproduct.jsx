import React from "react";
import { Link } from "react-router-dom";
import Picture1 from "../assets/niti/mahabharat.webp";
import Img1 from "../assets/niti/adiparva.webp";
import Img2 from "../assets/niti/sabhaparva.jpg";
import Img3 from "../assets/niti/vanaparva.jpg";
import Img4 from "../assets/niti/udyogparva.jpg";
import Img5 from "../assets/niti/dronaparva.jpg";
import Img6 from "../assets/niti/karmaparva.jpg";
import Img7 from "../assets/niti/striparva.jpg";
import Img8 from "../assets/niti/shantiparva.jpg";

const NitiData = [
  {
    id: 1,
    img: Img1,
    title: "Adi Parva",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Sabha Parva",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Vana Parva",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Udyog Parva",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Drona Parva",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Karma Parva",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Stri Parva",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "Shanti Parva",
    aosDelay: "0",
  },
];

function Nitiproduct() {
  return (
    <div>
      <div className="flex items-center justify-between gap-12 px-4 my-8 goals lg:px-36 fex-col md:flex-row">
        <div className="space-y-4 rounded-sm goals-area md:w-1/2">
          <img
            src={Picture1}
            alt=""
            className="object-cover  mx-auto duration-300 rounded-tl-full rounded-br-full cursor-pointer max-h-[450px] bg-top-right w-100 shadow-7xl md:m-5"
          />
        </div>
        <div className="font-serif md:w-full">
          <h1 className="my-2 text-5xl font-bold leading-snug text-center text-black md:w-full">
            Importance of Revisiting the Mahābhārata:
          </h1>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            Exploring the untold stories of the Mahābhārata provides a holistic
            understanding of the epic, beyond its popular narrative. These
            stories present nuanced perspectives on virtues, vices, and the
            consequences of human actions, serving as invaluable moral
            guideposts for children. By delving into the complexities of
            characters' dilemmas and decisions, children gain insights into
            ethical dilemmas and moral reasoning.
          </p>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            The untold stories offer a diverse array of moral lessons, from the
            importance of honesty and integrity to the consequences of hubris
            and greed. Each narrative presents opportunities for school children
            to reflect on their own behavior and cultivate virtues that
            contribute to personal growth and societal harmony.
          </p>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            Moreover, the Mahābhārata's rich cultural and historical context
            provides a unique lens through which children can explore Indian
            heritage and values. By engaging with these stories, children not
            only enrich their moral compass but also develop cross-cultural
            empathy and understanding.
          </p>
        </div>
      </div>
      {/* Header section*/}
      {/* Body section */}
      <div className="p-5 mt-10 mb-12 font-serif bg-gray-100 md:w-full">
        <h1 className="my-2 text-4xl font-bold leading-snug text-center text-black md:w-full">
          Report Structure:
        </h1>
        <p className="text-2xl font-semibold leading-snug text-center text-black md:w-full">
          In the current comprehensive reading, eight Parvas were covered.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-5 mb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
        {/* card section */}
        {NitiData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="mb-20 space-y-3"
          >
            <img
              src={data.img}
              alt=""
              className="h-[220px] w-[250px] object-cover rounded-tl-lg"
            />
            <div className="px-10 py-2 text-white bg-red-800 rounded-tl-lg rounded-br-lg">
              <Link
                to="https://iitk.ac.in/iks/docs/ayurveda.pdf"
                className="block"
              >
                <h3 className="text-xl font-bold ">{data.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nitiproduct;
