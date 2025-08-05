import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  return (
    <div className="px-2 my-12 bg-gray-100 lg:px-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="px-8 py-8 border rounded-lg shadow-2xl bg-amber-50 md:m-5">
          <div className="space-y-6">
            <div className="mt-7">
              <h1 className="mb-4 text-2xl font-bold underline text-amber-900">
                Unveiling the Treasures:
              </h1>
              <ul className="text-lg font-medium text-amber-900 mb-7">
                <li className="py-2 text-xl font-semibold">
                  1. Borrowing Privileges
                </li>
                <ol className="pl-5 list-disc">
                  <li>Faculty (1 month)</li>
                  <li>Students (15 days)</li>
                  <li>Others (15 days)</li>
                </ol>
                <li className="py-2 text-xl font-semibold">
                  2. Browse the Collection:
                </li>
                <p>
                  Our well-organised shelves and online catalogue will guide
                  you.
                </p>
                <li className="py-2 text-xl font-semibold">
                  3. Seek Assistance:
                </li>
                <p>
                  Our friendly staff is always happy to help you locate specific
                  materials or answer your research questions.
                </p>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-10 border rounded-lg shadow-2xl py-7 bg-amber-50 md:m-5">
          <div className="space-y-6">
            <div className="mt-7">
              <h1 className="mb-4 text-2xl font-bold underline text-amber-900">
                Timings
              </h1>
              <p className="text-amber-900">
                The library is open to the public:
              </p>
              <ul className="text-lg font-medium text-amber-800 mb-7">
                <li className="py-1 text-xl font-semibold">
                  1. Weekdays: 10:00 AM – 5:00 PM
                </li>
                <p>(Lunch break: 01:00 PM to 02:00 PM)</p>
                <li className="py-1 text-xl font-semibold">
                  2. Weekends: Library is closed
                </li>
                <p>
                  Library is closed on gazetted holidays like Republic Day,
                  Holi, Independence Day, Gandhi Jayanti, Dussehra, Diwali, and
                  Christmas Day.
                </p>
                <li className="py-1 text-xl font-semibold">
                  3. Seek Assistance:
                </li>
                <p>
                  Our friendly staff is always happy to help you locate specific
                  materials or answer your research questions.
                </p>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-8 border rounded-lg shadow-2xl px-9 bg-amber-50 md:m-5">
          <div className="space-y-6">
            <div className="mt-5">
              <h1 className="mb-2 text-2xl font-bold underline text-amber-900">
                Exploring the Collection
              </h1>
              <p className="text-amber-800">
                The library houses a diverse range of materials, including:
              </p>
              <ul className="text-lg font-medium text-amber-900 mb-7">
                <li className="pb-1 text-xl font-semibold">
                  1. Primary Texts:
                </li>
                <p>
                  Explore the foundational works of Indian philosophy, religion,
                  literature, and science.
                </p>
                <li className="py-2 text-xl font-semibold">
                  2. Secondary Sources:
                </li>
                <p>
                  Gain in-depth understanding with scholarly articles,
                  monographs, and critical analyses.
                </p>
                <li className="text-xl font-semibold">3. Reference Section:</li>
                <p>
                  This cornerstone of the library offers a wealth of information
                  with dictionaries, encyclopaedias, and manuscript catalogues
                  to aid your research journey.
                </p>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
