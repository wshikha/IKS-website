import React from "react";
import { Link } from "react-router-dom";
import Picture1 from "../assets/niti/math.webp";
import Img1 from "../assets/niti/mpic1.jpg";
import Img2 from "../assets/niti/mpic2.jpg";
import Img3 from "../assets/niti/mpic3.jpg";
import Img4 from "../assets/niti/mpic4.jpg";
import Img5 from "../assets/niti/mpic5.jpg";

const GanitaData = [
  {
    id: 1,
    img: Img1,
    title: "Notation ",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Arithmetic",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Algebra ",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Geometry ",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Proofs ",
    aosDelay: "0",
  },
];

function Ganitaproduct() {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 px-4 my-8 goals lg:px-36 fex-col md:flex-row">
        <div className="space-y-4 rounded-sm rounded-t-xl rounded-b-xl goals-area md:w-1/2">
          <img
            src={Picture1}
            alt=""
            data-aos="fade-up"
            className="object-cover  mx-auto duration-300 px-10 py-20 cursor-pointer max-h-[450px] bg-top-right w-100 shadow-7xl md:m-5"
          />
        </div>
        <div className="font-serif md:w-3/4">
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
            className="my-2 mt-10 mb-10 text-6xl font-bold leading-snug text-center text-red-700 md:w-full "
          >
            Sections
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 p-10 mb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
          {/* card section */}
          {GanitaData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[250px] object-cover rounded-tl-lg"
              />
              <div className="px-10 py-2 text-white bg-red-700 ">
                <h3 className="text-xl font-bold ">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ganitaproduct;
