import React from "react";
import Marquee from "react-fast-marquee";

import "./Home.css";
import Banner from "../components/Banner";

import Vision from "./Vision";
import Section from "../components/Section";
import Review from "./Review";
import Title from "../components/Title";
import EventDetail from "../components/EventDetail";
import Newprojects from "./Newprojects";
const Home = () => {
  return (
    <div>
      <Title />

      <div className="mt-5 bg-amber-700">
        <Marquee direction="left" speed={50} gradient={false}>
          <h1 className="px-4 text-lg font-semibold tracking-wide text-white md:text-xl lg:text-2xl">
            Please contact a faculty member from the IKS Centre before applying
            for Post-Doctoral Fellowship
          </h1>
        </Marquee>
      </div>

      <Banner />

      <Newprojects />
      <EventDetail />
      <Vision />

      <Section />

      <Review />
    </div>
  );
};

export default Home;
