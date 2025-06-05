import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function EventsCards({ headline, events }) {
  return (
    <div className="px-4 my-16 font-serif lg:px-24">
      <h2 className="my-5 text-4xl font-bold text-center text-black">
        {headline}
      </h2>
      {/* cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="w-full h-full mySwiper"
        >
          {events.map((events) => (
            <SwiperSlide key={events._id}>
              <Link to={`/events/${events._id}`}>
                <div>
                  <img src={events.image_url} alt="" />
                </div>
                <div>
                  <div>
                    <h3>{events.name}</h3>
                    <h3>{events.date}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default EventsCards;
