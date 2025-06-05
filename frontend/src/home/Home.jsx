import React from "react";
import Marquee from "react-fast-marquee";
import mg1 from "../assets/mg1.png";
import mg2 from "../assets/mg2.png";
import mg3 from "../assets/mg3.png";
import mg4 from "../assets/mg4.png";
import mg5 from "../assets/mg5.png";
import mg6 from "../assets/mg6.png";
import mg7 from "../assets/mg7.png";
import mg8 from "../assets/mg8.png";
import "./Home.css";
import Banner from "../components/Banner";
import BannerCard from "./BannerCard";
import Vision from "./Vision";
import Section from "../components/Section";
import Review from "./Review";
import Event from "../components/Event";
import Title from "../components/Title";
const Home = () => {
  return (
    <div>
      <Title />
      <Banner />
      <div className="mt-8 text-white bg-blue-700 h-9">
        <Marquee direction="left" width="100% ">
          <h1 className="text-2xl font-bold">
            Please contact a faculty member from the IKS Centre before applying
            for Post-Doctoral Fellowship
          </h1>
        </Marquee>
      </div>
      <Event />
      <Vision />

      <Section />

      <Review />
    </div>
  );
};

export default Home;
