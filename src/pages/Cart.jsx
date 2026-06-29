import { useState } from "react";

import CartItem from "../components/cart/CartItem";

// Temporary Data
import products from "../data/cart";

const Cart = () => {
  const [cartItems, setCartItems] = useState(products);

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-[#F8FAF8] py-14 md:py-20">
      <div className="mx-auto grid w-full gap-8 px-5 sm:px-6 md:px-8 lg:grid-cols-3 lg:px-10 xl:px-12">

        {/* Cart Items */}
        <div className="space-y-6 lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>

          <div className="mt-6 flex justify-between">
            <span>Total</span>

            <span className="text-2xl font-bold text-green-700">
              ₹{total}
            </span>
          </div>

          <button className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white">
            Checkout
          </button>
        </div>

      </div>
    </section>
  );
};

export default Cart;