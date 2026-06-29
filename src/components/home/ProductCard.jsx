import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <Link
      to="/products"
      className="card block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          {discount}% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-green-700">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <FaStar className="text-sm text-yellow-500" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-sm text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-green-900">
            ₹{product.price}
          </span>

          <span className="text-base text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Button */}
        <button className="mt-5 w-full rounded-full bg-green-800 py-3 text-sm font-semibold text-white transition hover:bg-green-900">
          Buy Now
        </button>
      </div>
    </Link>
  );
}