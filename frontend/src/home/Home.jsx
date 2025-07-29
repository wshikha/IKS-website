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
      <Banner />
      <div className="h-8 text-white bg-green-600 ">
        <Marquee direction="left" width="100% ">
          <h1 className="text-2xl font-bold">
            Please contact a faculty member from the IKS Centre before applying
            for Post-Doctoral Fellowship
          </h1>
        </Marquee>
      </div>
      <Newprojects />
      <EventDetail />
      <Vision />

      <Section />

      <Review />
    </div>
  );
};

export default Home;
