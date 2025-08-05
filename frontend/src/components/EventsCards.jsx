import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

function EventsCards({ headline, events }) {
  return (
    <section className="px-4 py-10 font-serif text-gray-900 bg-gray-50 lg:px-20">
      {/* Headline */}
      {headline && (
        <h2 className="mb-10 text-3xl font-bold text-center text-amber-800 sm:text-4xl">
          {headline}
        </h2>
      )}

      {/* Cards */}
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {events.map((event) => (
          <SwiperSlide key={event._id}>
            <Link
              to={`/events/${event._id}`}
              className="block h-full overflow-hidden transition-transform duration-300 transform bg-white shadow-md rounded-xl hover:scale-105"
            >
              <div className="h-[260px] w-full">
                <img
                  src={event.image_url}
                  alt={event.name}
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 h-[120px] flex flex-col justify-center items-start">
                <h3 className="text-lg font-semibold text-amber-700">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default EventsCards;
