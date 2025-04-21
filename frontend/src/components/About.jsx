import React from "react";
import Favimg from "../assets/banner3.jpg";

const About = () => {
  return (
    <div className="bg-gradient-to-l from-orange-300 via-slate-100 to-orange-100">
      <div className="flex items-center px-4 lg:px-24 "></div>
      <div className="flex items-center justify-between gap-12 px-4 my-16 space-y-6 bg-white lg:px-24 fex-col md:flex-row ">
        <div className="space-y-6 md:w-1/2 ">
          <img
            src={Favimg}
            alt=""
            className="my-20 rounded md:w-10/15 size-30"
          />
        </div>
        <div className="py-10 md:w-3/2">
          <h2 className="my-2 text-4xl font-semibold leading-snug text-center text-black md:w-3/5">
            Our Focus
          </h2>
          <p className="text-justify mb-15 md:w-5/6">
            At ŚIKṢĀ, our activities center around the innovative application of
            Science and Technology to facilitate Holistic Advancement. We draw
            inspiration from the traditional and sustainable methods of ancient
            India, adapting these practices to modern contexts in collaboration
            with various stakeholders including technologists, scientists,
            entrepreneurs, and professional researchers.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mb-24 my-30 py-15 lg:px-14 bg-gradient-to-l from-orange-300 via-slate-100 to-orange-100 ">
        <h2 className="text-4xl font-semibold leading-snug text-center text-black md:w-full">
          About ŚIKṢĀ: Centre for IKS
        </h2>
        <p className="px-4 py-10 text-justify mb-15 md:w-5/6">
          ŚIKṢĀ: Study Centre for Indian Knowledge System for Holistic
          Advancement at IIT Kanpur is dedicated to exploring and revitalizing
          India's rich heritage through the lens of traditional knowledge
          systems. Our focus encompasses major themes such as Bhāratīya Bhāṣā
          (Indian Languages), Gaṇita (Mathematics), Darśana (Philosophy), Nīti
          (Ethics), Kalā (Art), and Āyurveda (Traditional Medicine). These
          themes are essential for fostering a comprehensive understanding of
          Indian culture and its relevance in contemporary society. We aim to
          develop reference materials that draw from primary Sanskrit texts,
          enabling easy integration into various initiatives at IIT Kanpur. This
          integration supports a wide range of projects, from interdisciplinary
          research to community engagement efforts, ensuring that the insights
          from Indian Knowledge Systems can be applied effectively across
          different fields. In collaboration with mentors, participants will
          systematically review original texts related to their assigned themes,
          leading to a curated list of references that highlight significant
          concepts. This initiative not only promotes the preservation of
          traditional knowledge but also encourages innovative applications in
          modern contexts. By harnessing the depth of IKS, ŚIKṢĀ seeks to
          contribute to the holistic advancement of society, fostering
          creativity, critical thinking, and ethical reasoning among researchers
          and practitioners alike. Our goal is to bridge the gap between ancient
          wisdom and contemporary challenges, ensuring that India's cultural
          heritage continues to inform and inspire future generations.
        </p>
      </div>
    </div>
  );
};

export default About;
