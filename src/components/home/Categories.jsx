import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Male Wellness",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Digestive Wellness",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Weight Gain",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Weight Maintenance",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Women Wellness",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Diabetic Care",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Immunity Booster",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Hair Care",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Skin Care",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    title: "Heart Care",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&auto=format&fit=crop&q=80",
  },
];

function Categories() {
  return (
    <section className="w-full py-14 md:py-16 lg:py-12 bg-[#FCFAF1]">
      {/* Container */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading font-bold text-green-700 text-4xl lg:text-5xl">
            Top Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Shop according to your health concern
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-6
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {categories.map((item) => (
            <Link
              key={item.id}
              to="/products"
              className="group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[180px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105

                    sm:h-[220px]
                    lg:h-[250px]
                  "
                />

                <div className="absolute bottom-0 left-0 right-0 bg-[#33925F] py-4">
                  <h3 className="px-2 text-center text-sm font-semibold text-white lg:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
