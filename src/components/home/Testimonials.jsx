import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    city: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    review:
      "I've been using Horse Fire Tablets for almost 2 months now. The quality is excellent, delivery was quick, and I can genuinely feel the difference. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Kapoor",
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    review:
      "Honestly, I wasn't expecting such premium quality. Packaging was beautiful and the products feel completely authentic. Will definitely order again.",
  },
  {
    id: 3,
    name: "Rohit Verma",
    city: "Jaipur",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/329/467/small/attractive-happy-north-indian-young-man-in-traditional-dress-with-isolated-on-transparent-background-cut-out-free-png.png",
    review:
      "Bahut acha experience raha. Delivery time par mil gayi aur product ki quality bhi kaafi acchi lagi. Worth every rupee.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    city: "Lucknow",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=80",
    review:
      "I've tried many Ayurvedic brands before, but AR Ayurveda feels much more genuine. My family has started using it too.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    city: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&auto=format&fit=crop&q=80",
    review:
      "Packaging premium thi aur customer support bhi kaafi helpful tha. Definitely recommend karunga apne friends ko.",
  },
  {
    id: 6,
    name: "Ananya Mehta",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    review:
      "Loved everything—from ordering to delivery. Products are fresh, original and exactly as shown on the website.",
  },
  {
    id: 7,
    name: "Karan Malhotra",
    city: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    review:
      "Bro, sach bolu to pehle thoda doubt tha 😂 but after using the products for a month, I'm genuinely impressed. Amazing quality!",
  },
  {
    id: 8,
    name: "Riya Arora",
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&auto=format&fit=crop&q=80",
    review:
      "Very happy with my purchase. Natural ingredients, beautiful packaging and timely delivery. Exactly what I was looking for.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8FAF7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="font-bold text-5xl uppercase tracking-[4px] text-green-700">
            Reviews
          </span>

          <h2 className="mt-3 font-semibold text-[#184E2C]">
            Loved by Thousands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Real experiences from customers who trust AR Ayurveda for their
            wellness journey.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4500}
          spaceBetween={30}
          grabCursor={true}
          allowTouchMove={true}
          watchSlidesProgress={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex h-full flex-col rounded-3xl border border-[#E6E9E5] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Stars */}

                <div className="mb-6 flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>

                {/* Review */}

                <p className="flex-1 leading-8 text-gray-600">
                  "{item.review}"
                </p>

                {/* User */}

                <div className="mt-8 flex items-center gap-4 border-t pt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-[#184E2C]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Verified Buyer • {item.city}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
