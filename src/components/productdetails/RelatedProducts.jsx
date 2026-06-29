import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../home/ProductCard";
import products from "../../data/products";

export default function RelatedProducts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="font-heading text-4xl font-bold text-green-900 md:text-5xl">
            Related Products
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Customers also bought these Ayurvedic products
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
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