import React from "react";
import { Link } from "react-router-dom";
import Picture1 from "../assets/niti/darshan.png";
import Img1 from "../assets/niti/pic1.webp";
import Img2 from "../assets/niti/pic2.jpg";
import Img3 from "../assets/niti/pic3.jpg";
import Img4 from "../assets/niti/pic4.jpg";
import Img5 from "../assets/niti/pic5.jpg";
import Img6 from "../assets/niti/pic6.jpg";
import Img7 from "../assets/niti/pic7.jpg";
import Img8 from "../assets/niti/pic8.jpg";
import Img9 from "../assets/niti/pic9.jpg";

const DarsanaData = [
  {
    id: 1,
    img: Img1,
    title: "Sāṃkhya Darśana ",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Nyāya-Vaiśeṣika",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Upaniṣads/Purana ",
    aosDelay: "0",
  },
];
const DarsanaData2 = [
  {
    id: 4,
    img: Img4,
    title: "Sāṃkhya Darśana",

    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Nyāya-Vaiśeṣika",

    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Upaniṣads/Purana ",
    aosDelay: "0",
  },
];
const DarsanaData3 = [
  {
    id: 7,
    img: Img7,
    title: "Sāṃkhya Darśana",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "Nyāya-Vaiśeṣika",
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img9,
    title: "Upaniṣads/Purana",
    aosDelay: "0",
  },
];

function Darsanaproduct() {
  return (
    <div>
      <div className="flex items-center justify-between gap-12 px-4 my-8 goals lg:px-36 fex-col md:flex-row">
        <div className="space-y-4 rounded-sm goals-area md:w-1/2">
          <img
            src={Picture1}
            alt=""
            data-aos="fade-up"
            className="object-cover  mx-auto duration-300   cursor-pointer max-h-[450px] bg-top-right w-100 shadow-7xl md:m-5"
          />
        </div>
        <div className="font-serif md:w-1/2">
          <h1 className="my-2 text-5xl font-bold leading-snug text-center text-black md:w-full">
            darśana Theme
          </h1>
          <p data-aos="fade-up" className="mb-5 text-xl text-justify">
            The project undertaken within the Darśana theme at the ŚIKṢĀ Centre,
            IIT Kanpur, was orchestrated by team members: Dr Kamini Taneja, Dr
            Niharika Sharma, Dr Pankaj Kumar Jha, Dr Arka Pratim Mukhoty,
            Prashanth Nayak, and Basu Saraswat; mentored by Dr Lalit Saraswat.
            This thematic exploration aimed to elucidate the intricate theories
            and concepts of Sāṃkhya, Nyāya-Vaiśeṣika Darśana, and Upaniṣads,
            with a particular emphasis on rendering these philosophical
            constructs comprehensible to school children. It fosters a culture
            of knowledge dissemination tailored to the needs of the younger
            generation. The work consists of three distinct domains—Sāṃkhya,
            Nyāya-Vaiśeṣika Darśana, and Upaniṣads— in facilitating a focused
            and nuanced examination of each philosophical tradition.
          </p>
          <p data-aos="fade-up" className="text-xl text-justify ">
            The Sāṃkhya part endeavours across three chapters, wherein
            foundational aspects such as the goal of Sāṃkhya darśana, the
            historical lineage and canonical texts, types of dukkha, and an
            introductory exposition on dualism were meticulously examined.
            Additionally, the work delved into the intricate realms of Prakṛti,
            Guṇas, Puruṣa, Satkāryavāda, the evolution of 25 Tatvas,
            manifestation of the world, Pramanas, and Liberation, elucidating
            these complex concepts with scholarly rigour and precision.
          </p>
        </div>
      </div>
      {/* Header section*/}
      {/* Body section */}
      <div className="mt-10 mb-12 font-serif md:w-full">
        <p
          data-aos="fade-up"
          className="pl-20 pr-20 my-2 text-xl leading-snug text-center text-justify text-black md:w-full "
        >
          Similarly, the Nyāya-Vaiśeṣika Darśana part navigates through the
          philosophical landscape, delving into profound topics such as reality
          (Tattva), creation of the world, cognition, causality, types of
          causes, the Nyāya theory of illusion, and liberation, with a keen
          focus on analytical clarity and conceptual coherence. Concurrently,
          the Upaniṣads/Puranas part embarks on exploring the intricacies of
          Vedic concepts, Vedantic theories of creation, and discussions on
          prana (life force) and liberation, thereby unravelling the profound
          insights encapsulated within these ancient texts and traditions. This
          work is divided in three sections (on reality, creation, and
          knowledge/liberation) containing three chapters each from Sāṃkhya,
          Nyāya-Vaiśeṣika, and Upaniṣads/Puranas. In summary, the Darśana theme
          at the ŚIKṢĀ Centre presents these concepts in a manner accessible and
          engaging to young learners, thereby nurturing a deeper appreciation
          for India's rich philosophical heritage among the next generation.
        </p>
        <div>
          <h1
            data-aos="fade-up"
            className="my-2 mt-10 mb-10 text-5xl font-bold leading-snug text-center text-black md:w-full "
          >
            Section- 1- Theories of Reality
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 p-10 mb-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center">
          {/* card section */}
          {DarsanaData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[320px] w-[450px] object-cover rounded-md"
              />
              <div className="px-10 py-2 text-white bg-pink-600 ">
                <h3 className="text-xl font-bold ">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1
            data-aos="fade-up"
            className="my-2 mt-10 mb-10 text-5xl font-bold leading-snug text-center text-black md:w-full "
          >
            Section- 2- Theories of Creation
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 p-10 mb-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center">
          {/* card section */}
          {DarsanaData2.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[320px] w-[450px] object-cover rounded-md"
              />
              <div className="px-10 py-2 text-white bg-pink-600 ">
                <h3 className="text-xl font-bold ">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1
            data-aos="fade-up"
            className="my-2 mt-10 mb-10 text-5xl font-bold leading-snug text-center text-black md:w-full "
          >
            Section- 3- Theories of Epistemology and Liberation
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 p-10 mb-20 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center">
          {/* card section */}
          {DarsanaData3.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[320px] w-[450px] object-cover rounded-md"
              />
              <div className="px-10 py-2 text-white bg-pink-600 ">
                <h3 className="text-xl font-bold ">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Darsanaproduct;
