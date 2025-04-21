import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/prof1.jpg";
import proPic2 from "../assets/prof2.jpg";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="px-4 my-12 lg:px-24">
      <h2 className="mb-2 text-3xl font-bold leading-snug text-center">
        Review
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-14 bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-7">
                <h1 className="mb-4 text-2xl font-bold underline text-blue-950">
                  Services
                </h1>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="pb-2 text-1xl">
                    {" "}
                    1. <Link TO="Subject List">Subject List</Link>
                  </li>
                  <li className="pb-2 text-1xl">2. E-Library</li>
                  <li className="pb-2 text-1xl">3. Library consultation</li>
                  <li className="pb-2 text-1xl">4. Inter-library request</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-14 bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-7">
                <h1 className="mb-4 text-2xl font-bold underline text-blue-950">
                  My Library
                </h1>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="pb-2 text-1xl"> 1. Login library account</li>
                  <li className="pb-2 text-1xl">2. Forgot library account</li>
                  <li className="pb-2 text-1xl">3. Reserver/Hold a book</li>
                  <li className="pb-2 text-1xl">4. Renew books</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-14 bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-7">
                <h1 className="mb-4 text-2xl font-bold underline text-blue-950">
                  Search
                </h1>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="pb-2 text-1xl"> 1. Library Catalog (OPAC)</li>

                  <li className="pb-2 text-1xl">2. Borrowing privileges</li>
                  <li className="pb-2 text-1xl">3. Resources research</li>
                  <li className="pb-2 text-1xl">4. How to locate a book</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-14 bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-7">
                <h1 className="mb-4 text-2xl font-bold underline text-blue-950">
                  Facilities
                </h1>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="pb-2 text-1xl"> 1. Resources gateway</li>

                  <li className="pb-2 text-1xl">2. Library consultation</li>
                  <li className="pb-2 text-1xl">3. Inter-library request</li>
                  <li className="pb-2 text-1xl">4. How to locate a book</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
