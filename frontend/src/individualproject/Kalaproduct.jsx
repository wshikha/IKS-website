import React from "react";
import { Link } from "react-router-dom";
import Picture1 from "../assets/niti/Picture12.png";
import Picture2 from "../assets/niti/picture14.png";
import Img1 from "../assets/niti/picture15.jpg";
import Img2 from "../assets/niti/picture16.jpg";
import Img3 from "../assets/niti/picture17.jpg";
import Img4 from "../assets/niti/picture18.jpg";
import Img5 from "../assets/niti/picture19.jpg";
import Img6 from "../assets/niti/picture20.jpg";

const KalaData = [
  {
    id: 1,
    img: Img1,
    title: "Sangitha from Bharatiya perspective ",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: " Sound from modern scientific perspective ",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: " Tata vadya, the stringed instrument ",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Avanaddha vadya, the drums ",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Sushira vadya, the wind instrument ",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Ghana vadya- solid bodied instruments ",
    aosDelay: "0",
  },
];

function Kalaproduct() {
  return (
    <div>
      <div className="flex items-center justify-between gap-12 px-4 my-8 goals lg:px-36 fex-col md:flex-row">
        <div className="space-y-4 rounded-sm goals-area md:w-1/2">
          <img
            src={Picture1}
            alt=""
            className="object-cover object-center mx-auto duration-300  cursor-pointer max-h-[550px] bg-top-right w-100 shadow-7xl md:m-5 pe-20"
          />
          <img
            src={Picture2}
            alt=""
            className="object-cover  mx-auto duration-300  cursor-pointer max-h-[550px] bg-top-right w-100 shadow-7xl md:m-5 pe-20"
          />
        </div>
        <div className="font-serif md:w-full">
          <h1 className="my-2 text-4xl font-bold leading-snug text-center text-black md:w-full">
            Kala – Science behind Indian musical instruments
          </h1>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            Working of Veena As string is plucked it vibrates with the
            particular frequency.It gets transferred to bridge, top plate and
            resonator causing vibration of much greater surface area.This
            generates much amplified sound by moving the significant amount of
            air. Musical notes are produced by plucking the string near the
            bridge by maintaining the distance by pressing the string on the
            corresponding fret.
          </p>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            Mentions in Natyashastra about – In the production of the notes, the
            rise or fall of pitch is caused by various defects of the strings or
            of the pegs where the strings are tied, or by the defects in the
            body of a vīņā, or by defects or the lack of training of fingers or
            voice of these notes. This shows that the ancient innovators had
            clearly identified the factors that distinguish the build quality of
            musical instruments based on various scientific concepts.
          </p>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            The Mridangam is a traditional Indian percussion instrument that
            holds a significant place in the world of classical music,
            particularly in the Carnatic music tradition of South India. It is a
            doubleheaded drum with a distinctive shape and sound that adds
            rhythmic depth and complexity to various musical compositions. The
            construction of the Mridangam is a meticulous and intricate process,
            with specific materials and techniques employed to create this
            unique instrument.
          </p>
        </div>
      </div>
      {/* Header section*/}
      {/* Body section */}
      <div className="p-5 mt-10 mb-12 font-serif bg-gray-100 md:w-full">
        <h1 className="my-2 text-4xl font-bold leading-snug text-center text-orange-700 md:w-full">
          Indian musical instruments
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-5 mb-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center">
        {/* card section */}
        {KalaData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="mb-20 space-y-3"
          >
            <img
              src={data.img}
              alt=""
              className="h-[220px] w-[370px] object-cover rounded-tl-lg"
            />
            <div className="py-2 text-white bg-orange-600 rounded-tl-lg rounded-br-lg px-7">
              <Link
                to="https://iitk.ac.in/iks/docs/ayurveda.pdf"
                className="block"
              >
                <h3 className="text-lg font-bold ">{data.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kalaproduct;
