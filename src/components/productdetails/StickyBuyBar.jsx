import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

export default function StickyBuyBar() {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-[0_-10px_40px_rgba(0,0,0,.08)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-4">
        {/* Left */}

        <div className="flex items-center gap-4">
          <img
            src="https://www.arayurveda.shop/cdn/shop/files/kajalbenner-copy2-6a366b2dc5ec7.webp?v=1781951378&width=700"
            alt=""
            className="h-20 w-20 rounded-2xl object-cover"
          />

          <div>
            <h3 className="max-w-sm text-lg font-semibold text-green-900">
              Horse Fire Tablets
            </h3>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-3xl font-bold text-green-800">₹1,949</span>

              <span className="text-gray-400 line-through">₹3,000</span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-4">
          {/* Quantity */}

          <div className="flex items-center rounded-full border">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="flex h-12 w-12 items-center justify-center"
            >
              <FaMinus />
            </button>

            <span className="w-12 text-center font-semibold">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="flex h-12 w-12 items-center justify-center"
            >
              <FaPlus />
            </button>
          </div>

          {/* Cart */}

          <button className="flex items-center gap-3 rounded-full border border-green-700 px-8 py-3 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">
            <FaShoppingCart />
            Add To Cart
          </button>

          {/* Buy */}

          <button className="rounded-full bg-green-800 px-10 py-3 font-semibold text-white transition hover:bg-green-900">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
