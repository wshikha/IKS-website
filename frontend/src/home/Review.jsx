import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/prof1.jpg";
import proPic2 from "../assets/prof2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="px-4 my-12 lg:px-24">
      <h2 className="mb-10 text-4xl font-bold leading-snug text-center underline">
        Review
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
          <SwiperSlide className="px-4 py-8 text-black border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text*/}
              <div className="mt-7">
                <p className="mb-5 text-justify text-blue-900 ">
                  Prof. Abhay Karandikar, IIT Kanpur said, “Through the ŚIKṢĀ
                  Study Centre for Indian Knowledge System for Holistic
                  Advancement, we aim to integrate the vast knowledge system of
                  India into our academic curriculum and research, and make it
                  accessible to the world.
                </p>
                <Avatar
                  alt="avatar of Jese"
                  img={proPic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-justify text-blue-900 ">
                  {" "}
                  Prof. Abhay Karandikar
                </h5>
                <p className="text-base text-blue-900"> Prof. IIT Kanpur </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-4 py-8 border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text*/}
              <div className="mt-7">
                <p className="text-justify text-blue-900 mb-7 ">
                  Prof. Arnab Bhattacharya, gave an introduction about the
                  centre, mentioning that the mission is to promote, facilitate,
                  and benefit from IKS-related studies. With the inauguration of
                  the ŚIKṢĀ, IIT Kanpur.
                </p>
                <Avatar
                  alt="avatar of Jese"
                  img={proPic2}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-justify text-blue-900 ">
                  {" "}
                  Prof. Arnab Bhattacharya
                </h5>
                <p className="text-base text-blue-900">Prof. IIT Kanpur </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 py-8 border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text*/}
              <div className="mt-7">
                <p className="text-justify text-blue-900 mb-7 ">
                  Prof. Arnab Bhattacharya, gave an introduction about the
                  centre, mentioning that the mission is to promote, facilitate,
                  and benefit from IKS-related studies. With the inauguration of
                  the ŚIKṢĀ, IIT Kanpur.
                </p>
                <Avatar
                  alt="avatar of Jese"
                  img={proPic2}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-blue-900">
                  {" "}
                  Prof. Arnab Bhattacharya
                </h5>
                <p className="text-base text-blue-900">Prof. IIT Kanpur </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 py-8 border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text*/}
              <div className="mt-7">
                <p className="text-justify text-blue-900 mb-7 ">
                  Prof. Arnab Bhattacharya, gave an introduction about the
                  centre, mentioning that the mission is to promote, facilitate,
                  and benefit from IKS-related studies. With the inauguration of
                  the ŚIKṢĀ, IIT Kanpur.
                </p>
                <Avatar
                  alt="avatar of Jese"
                  img={proPic2}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-blue-900">
                  {" "}
                  Prof. Arnab Bhattacharya
                </h5>
                <p className="text-base text-blue-900">Prof. IIT Kanpur </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 py-8 border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text*/}
              <div className="mt-7">
                <p className="text-blue-900 mb-7">
                  Prof. Arnab Bhattacharya, gave an introduction about the
                  centre, mentioning that the mission is to promote, facilitate,
                  and benefit from IKS-related studies. With the inauguration of
                  the ŚIKṢĀ, IIT Kanpur.
                </p>
                <Avatar
                  alt="avatar of Jese"
                  img={proPic2}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-blue-900">
                  {" "}
                  Prof. Arnab Bhattacharya
                </h5>
                <p className="text-base text-blue-900">Prof. IIT Kanpur </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 py-8 border rounded-lg shadow-2xl bg-orange-50 md:m-5">
            <div className="space-y-6">
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text*/}
              <div className="mt-7">
                <p className="text-blue-900 mb-7">
                  Prof. Arnab Bhattacharya, gave an introduction about the
                  centre, mentioning that the mission is to promote, facilitate,
                  and benefit from IKS-related studies. With the inauguration of
                  the ŚIKṢĀ, IIT Kanpur.
                </p>
                <Avatar
                  alt="avatar of Jese"
                  img={proPic2}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium text-blue-900">
                  {" "}
                  Prof. Arnab Bhattacharya
                </h5>
                <p className="text-base text-blue-900">Prof. IIT Kanpur </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
