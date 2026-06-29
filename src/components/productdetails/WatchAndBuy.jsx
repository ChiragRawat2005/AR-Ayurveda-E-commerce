import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const videos = [
  {
    id: 1,
    thumbnail:
      "https://www.arayurveda.shop/cdn/shop/files/kajal_copy_1.jpg?v=1779105470&width=600",
  },
  {
    id: 2,
    thumbnail:
      "https://www.arayurveda.shop/cdn/shop/files/preview_images/hft-rajpal2-copy-69cbafa9e4f42_1.webp?v=1776850318&width=1946",
  },
  {
    id: 3,
    thumbnail:
      "https://www.arayurveda.shop/cdn/shop/files/03_1.jpg?v=1755856043&width=360",
  },
  {
    id: 4,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1chFyB9vorgjIcIn-LG1R0ybaKM64QwoMCg&s",
  },
];

export default function WatchAndBuy() {
  return (
    <section className="bg-[#FFFDF8] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-green-900 md:text-5xl">
            Watch & Buy
          </h2>

          <p className="mt-4 text-gray-600">
            Discover our products through short videos
          </p>
        </div>

        {/* Videos */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          loop
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 1.6,
            },
            640: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Play Button */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-2xl text-green-700 shadow-xl transition duration-300 group-hover:scale-110">
                      <FaPlay className="ml-1" />
                    </div>
                  </div>

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}