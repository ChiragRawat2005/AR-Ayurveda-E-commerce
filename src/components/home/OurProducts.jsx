import { Link } from "react-router-dom";
import products from "../../data/products";

export default function OurProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="font-heading text-5xl font-bold text-[#184E2C]">
            Our Products
          </h2>

          <p className="mt-4 text-gray-600">
            Discover nature's remedies in our Ayurvedic and herbal product range
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            );

            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="overflow-hidden bg-[#EDF4F1] transition duration-300 hover:-translate-y-1"
              >
                {/* Image */}

                <div className="h-[280px] bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Body */}

                <div className="p-4">
                  <h3 className="line-clamp-2 text-[18px] leading-7 text-gray-900">
                    {product.name}
                  </h3>

                  {/* Rating */}

                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="text-green-700">★★★★★</span>

                    <span className="text-gray-700">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-4xl font-bold text-black">
                      ₹{product.price}
                    </span>

                    <span className="text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>

                    <span className="rounded bg-orange-500 px-2 py-1 text-xs font-bold text-white">
                      {discount}% OFF
                    </span>
                  </div>

                  {/* Button */}

                  <button className="mt-6 w-full rounded-md bg-[#33925F] py-3 font-semibold text-white transition hover:bg-[#27784d]">
                    BUY NOW
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