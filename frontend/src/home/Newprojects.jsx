import React from "react";
import { Link } from "react-router-dom";
import Picture1 from "../assets/niti/mahabharat.webp";
import Img1 from "../assets/niti/picpro1.jpg";
import Img2 from "../assets/niti/picpro2.jpg";
import Img3 from "../assets/niti/picpro3.jpg";
import Img4 from "../assets/niti/picpro4.jpg";
import Img5 from "../assets/niti/dronaparva.jpg";
import Img6 from "../assets/niti/karmaparva.jpg";
import Img7 from "../assets/niti/striparva.jpg";
import Img8 from "../assets/niti/shantiparva.jpg";

const NitiData = [
  {
    id: 1,
    img: Img1,
    title: "आयुर्विज्ञान",
    aosDelay: "0",
    link: "/project/ayurveda",
  },
  {
    id: 2,
    img: Img2,
    title: "कला",
    aosDelay: "0",
    link: "/project/kala",
  },
  {
    id: 3,
    img: Img3,
    title: "दर्शन",
    aosDelay: "0",
    link: "/project/darsana",
  },
  {
    id: 4,
    img: Img4,
    title: "गणित",
    aosDelay: "0",
    link: "/project/ganita",
  },
  {
    id: 5,
    img: Img5,
    title: "नीति",
    aosDelay: "0",
    link: "/project/niti",
  },
];

function Newprojects() {
  return (
    <div>
      <div className="px-16 pt-5 font-serif md:w-full">
        <h1 className="my-2 text-5xl font-bold leading-snug text-center text-black md:w-full">
          Ongoing Projects
        </h1>
        <p data-aos="fade-up" className="mb-5 text-xl text-justify">
          Exploring the untold stories of the Mahābhārata provides a holistic
          understanding of the epic, beyond its popular narrative. These stories
          present nuanced perspectives on virtues, vices, and the consequences
          of human actions, serving as invaluable moral guideposts for children.
          By delving into the complexities of characters' dilemmas and
          decisions, children gain insights into ethical dilemmas and moral
          reasoning.
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
              className="h-[220px] w-[300px] object-cover rounded-tl-lg"
            />
            <div className="px-10 py-2 text-white bg-green-600 rounded-tl-lg rounded-br-lg">
              <Link to={data.link} className="block">
                <h3 className="text-xl font-bold px-14 ">{data.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newprojects;
