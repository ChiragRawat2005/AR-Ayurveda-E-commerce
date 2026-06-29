import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import HeroSlide from "./HeroSlide";
import heroSlides from "../../data/heroData";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to="/products/1">
              <HeroSlide slide={slide} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
