import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden bg-[#F7F7F7]">
        <img
          src={product.image}
          alt={product.name}
          className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 lg:h-72"
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-4 lg:p-5">
        {/* Category */}
        <span className="text-[10px] font-medium text-green-700 sm:text-sm">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="mt-1 line-clamp-2 min-h-[36px] text-xs font-semibold leading-5 text-gray-900 sm:mt-2 sm:min-h-[48px] sm:text-base lg:text-lg">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <FaStar className="text-[10px] text-yellow-400 sm:text-sm" />

          <span className="text-[10px] font-medium sm:text-sm">
            {product.rating}
          </span>

          <span className="text-[10px] text-gray-500 sm:text-sm">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-bold text-green-700 sm:text-xl lg:text-2xl">
            ₹{product.price}
          </span>

          <span className="text-[10px] text-gray-400 line-through sm:text-sm">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-2 sm:mt-5">
          <button className="flex flex-1 items-center justify-center gap-1 rounded-md bg-green-700 py-2 text-[10px] font-semibold text-white transition hover:bg-green-800 sm:gap-2 sm:rounded-lg sm:py-3 sm:text-sm">
            <FaShoppingCart className="text-xs sm:text-sm" />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>

          <Link
            to={`/product/${product.id}`}
            className="rounded-md border border-green-700 px-2 py-2 text-[10px] font-semibold text-green-700 transition hover:bg-green-700 hover:text-white sm:rounded-lg sm:px-5 sm:py-3 sm:text-sm"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;