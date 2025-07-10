import React from "react";
import { Link } from "react-router-dom";
import Picture1 from "../assets/RA/Picture1.png";
import Img1 from "../assets/RA/sesame-seeds.jpg";
import Img2 from "../assets/RA/turmeric.jpg";
import Img3 from "../assets/RA/ginger.jpg";
import Img4 from "../assets/RA/mustard.jpg";
import Img5 from "../assets/RA/garlic.jpg";
import Img6 from "../assets/RA/carom.jpg";
import Img7 from "../assets/RA/asfoetida.jpg";
import Img8 from "../assets/RA/cumin.jpg";
import Img9 from "../assets/RA/fennel seed.jpg";
import Img10 from "../assets/RA/pepper.jpg";
import Img11 from "../assets/RA/cinnamon.jpg";
import Img12 from "../assets/RA/bayleaves.jpg";
import Img13 from "../assets/RA/cardmon.jpg";
import Img14 from "../assets/RA/mint.jpg";
import Img15 from "../assets/RA/clove.jpg";
import Img16 from "../assets/RA/saffron.jpg";
import Img17 from "../assets/RA/chilli.jpg";
import Img18 from "../assets/RA/nut.jpg";
import Img19 from "../assets/RA/curry leaves.jpg";
import Img20 from "../assets/RA/Fenugreek.jpg";
import Img21 from "../assets/RA/Mace.jpg";
import Img22 from "../assets/RA/Black Stone Flower.jpeg";
import Img23 from "../assets/RA/Star anise.jpg";
import Img24 from "../assets/RA/Coriander.jpg";
import Img25 from "../assets/RA/Long pepper.jpg";

const AyurvedaData = [
  {
    id: 1,
    img: Img1,
    title: "Adi Parva ",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Turmeric",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Ginger",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Mustard",

    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Garlic",

    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Carom Seeds",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Asfoetida",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "Cumin Seeds",
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img9,
    title: "Fennel Seeds",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img10,
    title: "Black Pepper",
    aosDelay: "0",
  },
  {
    id: 11,
    img: Img11,
    title: "Cinnamon",
    aosDelay: "0",
  },
  {
    id: 12,
    img: Img12,
    title: "Bay Leaves",
    aosDelay: "0",
  },
  {
    id: 13,
    img: Img13,
    title: "Cardamom",
    aosDelay: "0",
  },
  {
    id: 14,
    img: Img14,
    title: "Mint Leaves",
    aosDelay: "0",
  },
  {
    id: 15,
    img: Img15,
    title: "Clove",
    aosDelay: "0",
  },
  {
    id: 16,
    img: Img16,
    title: "Saffron",
    aosDelay: "0",
  },
  {
    id: 17,
    img: Img17,
    title: "Chilli",
    aosDelay: "0",
  },
  {
    id: 18,
    img: Img18,
    title: "Nutmeg",
    aosDelay: "0",
  },
  {
    id: 19,
    img: Img19,
    title: "Curry Leaves",
    aosDelay: "0",
  },
  {
    id: 20,
    img: Img20,
    title: "Fenugreek Seeds",
    aosDelay: "0",
  },

  {
    id: 21,
    img: Img21,
    title: "Mace",
    aosDelay: "0",
  },
  {
    id: 22,
    img: Img22,
    title: "Black Stone Flower",
    aosDelay: "0",
  },
  {
    id: 23,
    img: Img23,
    title: "Star anise",
    aosDelay: "0",
  },
  {
    id: 24,
    img: Img24,
    title: "Coriander",
    aosDelay: "0",
  },
  {
    id: 25,
    img: Img25,
    title: "Long Pepper",
    aosDelay: "0",
  },
];

function Ayurvedaproduct() {
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
            Āyurveda
          </h1>
          <p data-aos="fade-up" className="mb-10 text-xl text-justify">
            The overall aim of the Āyurveda theme was to present a compilation
            on correlation between traditional kitchen spices and materials used
            in Indian homes, use in Āyurvedic practices and recently being
            investigated and established by modern medicinal approaches. The
            origin of this compilation resides in the fact that the biggest
            strength of the Indian medicinal system, Āyurveda, has been its long
            span of human use case and its incorporation in components of daily
            use including food ingredients viz. spices. It is in common public
            knowledge that seasonal fruits, vegetables, food grains and Indian
            kitchen products, individually or in combinations, have been
            beneficial to keep individuals healthy and sometimes even help
            recover from disease conditions. This knowledge, sadly, is getting
            lost or given less importance in modern days. A reference material,
            which connects Indian kitchen products, along with its’ associated
            health benefits and encompassed medicinal active components, could
            be an important starting point for various Āyurveda researchers and
            practicing groups. Often, accounts of these kitchen items are found
            in various local languages which researchers and practitioners find
            difficult to associate with and even difficult to find references in
            modern medicinal research repositories. Hence, we have created a
            compendium of names of Indian kitchen products from different parts
            of India and in various Indian languages, with description of
            medicinal active agent and use cases, as available in previous
            records of ayurvedic practices and modern medicinal research, to
            make it easily available for end users, ayurveda researchers and
            modern medicine scholars to create a robust alternative medicine
            system in country. Initiation of the process started with tabulating
            the names of various kitchen spices with their names in different
            Indian languages and in ayurvedic literature with the source of
            information (Table 1).
          </p>
        </div>
      </div>
      {/* Header section*/}
      {/* Body section */}
      <div className="mt-10 mb-12 font-serif md:w-full">
        <h1 className="my-2 text-3xl font-bold leading-snug text-center text-black md:w-full">
          Detailed Description of Some representative identified Kitchen
          materials/spices:
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-5 mb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
        {/* card section */}
        {AyurvedaData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="space-y-3"
          >
            <img
              src={data.img}
              alt=""
              className="h-[220px] w-[250px] object-cover rounded-md"
            />
            <div className="px-10 py-2 text-white bg-green-600">
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

export default Ayurvedaproduct;
