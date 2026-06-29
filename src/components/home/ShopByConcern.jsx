import { useState } from "react";
import { Link } from "react-router-dom";

import concern from "../../data/concern.js";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(concern[0]);

  const currentProducts = activeCategory.products;

  return (
    <section className="bg-[#FCF2D9] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="font-heading text-5xl font-bold text-green-900">
            Shop By Concern
          </h2>

          <p className="mt-3 text-gray-600">
            Find Solutions Tailored To Your Unique Needs
          </p>
        </div>

        {/* Category Pills */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {concern.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition

      ${
        activeCategory.id === category.id
          ? "bg-green-800 text-white"
          : "bg-white border border-gray-300 hover:bg-green-50"
      }

      `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products */}

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => {
            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100,
            );

            return (
              <Link
                key={product.id}
                to="/products"
                className="group overflow-hidden rounded-3xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}

                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Discount */}

                  <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {discount}% OFF
                  </div>
                </div>

                {/* Body */}

                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold">
                    {product.name}
                  </h3>

                  {/* Rating */}

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>

                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews} Reviews)
                    </span>
                  </div>

                  {/* Price */}

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-800">
                      ₹{product.price}
                    </span>

                    <span className="text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-6 w-full rounded-full bg-green-800 py-3 font-semibold text-white transition hover:bg-green-900">
                    Add To Cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
