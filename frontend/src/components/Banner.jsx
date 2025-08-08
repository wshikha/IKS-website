import React, { useEffect, useState } from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const slides = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setSlideIn(true);
      }, 50);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setSlideIn(true);
    }, 50);
  };

  const prevSlide = () => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setSlideIn(true);
    }, 50);
  };

  return (
    <section className="relative w-full h-[20vh] overflow-hidden md:h-[50vh]">
      <img
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
        className={`w-full h-full object-cover object-top transition-all duration-500 ${
          slideIn ? "animate-slideInTop" : ""
        }`}
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute bottom-10 right-5 text-[80px] md:text-[130px] font-semibold text-[#0F5A61] opacity-60 select-none pointer-events-none">
          BioMedEng
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg bg-[#11747C]/70 px-6 py-2 rounded-lg">
          BioMedEng
        </h1>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow left-6 top-1/2 bg-opacity-70 hover:bg-opacity-100"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow right-6 top-1/2 bg-opacity-70 hover:bg-opacity-100"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-3 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index ? "bg-[#11747C]" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Banner;
