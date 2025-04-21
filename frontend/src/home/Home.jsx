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
const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <Marquee pauseOnHover>
          <div className="image_wrapper">
            <img src={mg1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={mg8} alt="" />
          </div>
        </Marquee>
      </div>
      <Event />
      <Section />
      <Vision />
      <Review />
    </div>
  );
};

export default Home;
