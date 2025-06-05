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
    <div className="px-2 my-12 lg:px-8">
      <h2 className="mb-2 text-3xl font-bold leading-snug text-center">
        Review
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="px-8 py-8 border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-7">
                <h1 className="mb-4 text-2xl font-bold underline text-blue-950">
                  Unveiling the Treasures:
                </h1>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="py-2 pb-2 text-xl font-semibold">
                    1.Borrowing Privileges
                  </li>
                  <ol className="px-4 text-lg">
                    <li> a. Faculty (1 month)</li>
                    <li> b. Students (15 days)</li>
                    <li> c. Others (15 days)</li>
                  </ol>
                  <li className="py-2 pb-2 text-xl font-semibold">
                    2. Browse the Collection:
                  </li>
                  <p className="text-lg">
                    Our well-organised shelves and online catalogue will guide
                    you.{" "}
                  </p>
                  <p className="mb-5 text-xl">Visit [172.20.170.71:8080]</p>
                  <li className="py-2 pb-2 text-xl font-semibold">
                    3. Seek Assistance:
                  </li>
                  <p className="text-lg">
                    Our friendly staff is always happy to help you locate
                    specific materials or answer your research questions.
                  </p>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-10 border rounded-lg shadow-2xl py-7 bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-7">
                <h1 className="mb-4 text-2xl font-bold underline text-blue-950">
                  Timings
                </h1>
                <p>The library is open to the public:</p>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="py-1 pb-2 text-xl font-semibold">
                    1.Weekdays:10:00 AM – 5:00 PM
                  </li>
                  <p>(Lunchbreak: 01:00 PM to 02:00 PM)</p>
                  <li className="py-1 pb-2 text-xl font-semibold">
                    2. Weekends: Iks library is closed.
                  </li>
                  <p className="text-lg">
                    Library is closed on gazetted holidays like Republic Day,
                    Holi, Independence Day, Gandhi Jayanti, Dussehra, Diwali,
                    and Christmas Day.
                  </p>
                  <p className="text-lg">Visit [172.20.170.71:8080]</p>
                  <li className="py-1 pb-2 text-xl font-semibold">
                    3. Seek Assistance:
                  </li>
                  <p className="my-6 text-lg">
                    Our friendly staff is always happy to help you locate
                    specific materials or answer your research questions.
                  </p>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-9 bg-orange-50 md:m-5">
            <div className="space-y-6">
              {/* text*/}
              <div className="mt-5">
                <h1 className="mb-2 text-2xl font-bold underline text-blue-950">
                  Exploring the Collection
                </h1>
                <p>
                  The library houses a diverse range of materials, including:
                </p>
                <ul className="font-medium text-blue-900 mb-7 ">
                  <li className="py-2 pb-2 text-xl font-semibold">
                    1.Primary Texts:
                  </li>
                  <p>
                    Explore the foundational works of Indian philosophy,
                    religion, literature, and science.
                  </p>
                  <li className="py-2 pb-2 text-xl font-semibold">
                    2. Secondary Sources:
                  </li>
                  <p className="text-lg">
                    Gain in-depth understanding with scholarly articles,
                    monographs, and critical analyses.
                  </p>
                  <p className="text-lg">Visit [172.20.170.71:8080]</p>
                  <li className="py-2 pb-2 text-xl font-semibold">
                    3. Reference Section:
                  </li>
                  <p className="text-lg">
                    This cornerstone of the library offers a wealth of
                    information with dictionaries, encyclopaedias, and
                    manuscript catalogues to aid your research journey.
                  </p>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-14 bg-blue-50 md:m-5">
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
