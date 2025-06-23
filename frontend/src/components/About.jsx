import React from "react";

const About = () => {
  return (
    <div className="container px-5 py-24 mx-auto mt-12">
      <div className="mb-12 font-serif text-center">
        <h1 className="p-2 font-serif text-2xl font-semibold bg-gradient-to-l from-orange-300 via-orange-50 to-orange-200 lg:px-24 md:text-4xl">
          Our Goals
        </h1>
      </div>
      <div className="bg-gradient-to-l from-orange-300 via-orange-50 to-orange-200">
        <div className="flex items-center justify-between gap-16 px-2 my-10 space-y-6 bg-white lg:px-24 fex-col md:flex-row ">
          <p className="pb-12 mb-10 font-serif text-lg text-justify ">
            We are committed to achieving several key objectives:
            <li>
              Research: We aim to define the state of the art in traditional
              Indian Knowledge System activities through the integration of
              science and technology. This involves exploring new methodologies
              and technologies that can enhance heritage conservation efforts.
            </li>
            <li>
              Training: We focus on training human resources rooted in the
              Indian Knowledge System. By equipping individuals with the
              necessary skills and knowledge, we enhance their capacity to
              contribute effectively to holistic advancement of our .
            </li>
            <li>
              Content Development and Outreach: We strive to support researchers
              by developing pedagogically relevant resource materials rooted in
              the Indian tradition and primary references available in
              Sanskrit.that enables researchers to create a perfect समन्वय
              between science and technology and scale up their operations and
              serve their customers more effectively. This includes creating
              tools and resources that facilitate better engagement with
              heritage assets.
            </li>
            Through these initiatives, ŚIKṢĀ seeks to create a sustainable
            framework for the preservation and promotion of India's rich
            Scientific, Philosophical, Cultural and Literary heritage, ensuring
            that it continues to thrive for future generations.
          </p>
        </div>
      </div>
      <div className="mb-12 font-serif text-center">
        <h2 className="py-2 font-serif font-semibold bg-white lg:px-14 md:text-4xl bg-gradient-to-l from-orange-300 via-orange-50 to-orange-200">
          About ŚIKṢĀ: Centre for IKS
        </h2>{" "}
      </div>

      <div className="flex items-center justify-between gap-16 my-10 space-y-6 bg-white lg:px-24 fex-col md:flex-row ">
        <p className="py-10 mb-20 font-serif text-lg text-justify ">
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
