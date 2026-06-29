import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ProductCard from "./ProductCard";
import products from "../../data/products";

import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#effbe8] py-15 overflow-hidden">
      <div className="mx-auto max-w-[1800px]">

        <div className="mb-16 text-center">
          <h2 className="font-heading text-5xl font-bold text-green-900">
            Our Products
          </h2>

          <p className="mt-4 text-gray-600">
            Discover nature's remedies in our Ayurvedic and herbal product range
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          centeredSlides
          loop
          speed={700}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3.4,
              spaceBetween: 40,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}