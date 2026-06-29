import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className="rounded-3xl bg-white p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

        {/* Product Image */}
        <div className="flex justify-center lg:w-44 flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="h-36 w-36 sm:h-40 sm:w-40 rounded-2xl object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 text-center lg:text-left">

          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {item.category}
          </span>

          <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-900">
            {item.name}
          </h2>

          <p className="mt-2 text-gray-500">
            ₹{item.price} × {item.quantity}
          </p>

          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-green-700">
            ₹{item.price * item.quantity}
          </h3>

        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-5">

          {/* Quantity */}
          <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden">

            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-4 py-3 hover:bg-gray-100 transition"
            >
              <FaMinus />
            </button>

            <span className="w-12 text-center font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-4 py-3 hover:bg-gray-100 transition"
            >
              <FaPlus />
            </button>

          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            <FaTrash />
            Remove
          </button>

        </div>

      </div>
    </div>
  );
};

export default CartItem;