import { useState } from "react";
import {
  FaStar,
  FaEye,
  FaShoppingBag,
  FaCheckCircle,
} from "react-icons/fa";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState("200g");

  return (
    <div className="space-y-6">

      {/* Live Badges */}

      <div className="flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
          <FaEye />
          2,265 Live Visitors
        </span>

        <span className="rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white">
          🔥 159 Sold in last 2 hours
        </span>
      </div>

      {/* Product Name */}

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Nirogi Pachan Churna - 200g
        </h1>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <span className="font-semibold">5.0</span>

          <span className="text-gray-500">(122 Reviews)</span>
        </div>
      </div>

      {/* Online Payment Offer */}

      <div className="rounded-2xl border-2 border-green-700 bg-green-50 p-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-green-700">
              BEST PRICE
            </p>

            <h3 className="text-3xl font-bold text-green-800">
              ₹629
            </h3>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold">
              Pay Online & Get It
            </p>

            <p className="text-xl font-bold text-green-800">
              for just ₹629
            </p>
          </div>

        </div>

      </div>

      {/* Price */}

      <div className="rounded-3xl border p-6 shadow-sm">

        <p className="text-sm font-semibold text-gray-500">
          200g
        </p>

        <div className="mt-2 flex items-end gap-3">

          <span className="text-5xl font-bold text-green-800">
            ₹699
          </span>

          <span className="text-2xl text-gray-400 line-through">
            ₹1500
          </span>

        </div>

        <p className="mt-3 text-green-700 font-semibold">
          Save ₹801
        </p>

      </div>

      {/* Availability */}

      <div className="flex items-center gap-3 text-lg">
        <span className="font-semibold">
          Availability :
        </span>

        <span className="flex items-center gap-2 text-green-700">
          <FaCheckCircle />
          Ready To Ship
        </span>
      </div>

      {/* Quantity */}

      <div>
        <label className="mb-2 block font-semibold">
          Select Weight
        </label>

        <select
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-52 rounded-xl border p-4 outline-none focus:border-green-700"
        >
          <option>200g</option>
          <option>500g</option>
          <option>1kg</option>
        </select>
      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <button className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500 text-2xl text-white transition hover:bg-orange-600">
          <FaShoppingBag />
        </button>

        <button className="flex-1 rounded-xl bg-green-800 py-4 text-lg font-semibold text-white transition hover:bg-green-900">
          BUY NOW
        </button>

      </div>

    </div>
  );
};

export default ProductInfo;