import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState("");

  const toggle = (section) => {
    setOpen(open === section ? "" : section);
  };

  return (
    <footer className="bg-[#0B5D1E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Left */}

          <div>
            <img
              src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/e0a6fab424668935b4e4e10baf079ab6.w400.h400.jpg"
              alt="AR Ayurveda"
              className="h-16"
            />

            <h3 className="mt-5 text-2xl font-bold">
              AR Ayurveda Private Limited
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              FF 14, Ujala Avenue,
              <br />
              Sarkhej Road, Vishala,
              <br />
              Ahmedabad, Gujarat (India) – 380055
            </p>

            <a
              href="tel:+919099857272"
              className="mt-5 inline-block border-b border-gray-400 pb-1 text-lg text-gray-200 transition hover:text-[#F4D35E]"
            >
              +91 90998 57272
            </a>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaPinterestP />,
                <FaYoutube />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B5D1E] transition duration-300 hover:bg-[#F4D35E]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop */}

          <div className="hidden lg:block">
            <h4 className="mb-6 text-xl font-semibold">Information</h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="transition hover:text-[#F4D35E]"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-[#F4D35E]"
                >
                  Contact us
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition hover:text-[#F4D35E]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="mb-6 text-xl font-semibold">Shop</h4>

            <ul className="space-y-4 text-gray-300">
              <li className="transition hover:text-[#F4D35E]">Hair Care</li>
              <li className="transition hover:text-[#F4D35E]">Skin Care</li>
              <li className="transition hover:text-[#F4D35E]">
                Male Wellness
              </li>
              <li className="transition hover:text-[#F4D35E]">
                Women Wellness
              </li>
              <li className="transition hover:text-[#F4D35E]">
                Weight Gain
              </li>
              <li className="transition hover:text-[#F4D35E]">
                Weight Maintenance
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="mb-6 text-xl font-semibold">Policies</h4>

            <ul className="space-y-4 text-gray-300">
              <li className="transition hover:text-[#F4D35E]">
                Delivery Information
              </li>
              <li className="transition hover:text-[#F4D35E]">
                Privacy Policy
              </li>
              <li className="transition hover:text-[#F4D35E]">
                Return & Refund Policy
              </li>
              <li className="transition hover:text-[#F4D35E]">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Mobile */}

          <div className="space-y-2 lg:hidden">
            {/* Information */}

            <div className="border-b border-white/10">
              <button
                onClick={() => toggle("info")}
                className="flex w-full items-center justify-between py-4 text-lg font-semibold"
              >
                Information
                {open === "info" ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open === "info" && (
                <div className="space-y-3 pb-5 text-gray-300">
                  <Link to="/about" className="block">
                    About us
                  </Link>

                  <Link to="/contact" className="block">
                    Contact us
                  </Link>

                  <Link to="/faq" className="block">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            {/* Shop */}

            <div className="border-b border-white/10">
              <button
                onClick={() => toggle("shop")}
                className="flex w-full items-center justify-between py-4 text-lg font-semibold"
              >
                Shop
                {open === "shop" ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open === "shop" && (
                <div className="space-y-3 pb-5 text-gray-300">
                  <p>Hair Care</p>
                  <p>Skin Care</p>
                  <p>Male Wellness</p>
                  <p>Women Wellness</p>
                  <p>Weight Gain</p>
                  <p>Weight Maintenance</p>
                </div>
              )}
            </div>

            {/* Policies */}

            <div className="border-b border-white/10">
              <button
                onClick={() => toggle("policy")}
                className="flex w-full items-center justify-between py-4 text-lg font-semibold"
              >
                Policies
                {open === "policy" ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open === "policy" && (
                <div className="space-y-3 pb-5 text-gray-300">
                  <p>Delivery Information</p>
                  <p>Privacy Policy</p>
                  <p>Return & Refund Policy</p>
                  <p>Terms & Conditions</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 bg-[#084816]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 lg:flex-row">
          <p className="max-w-3xl text-center text-sm leading-7 text-gray-300 lg:text-left">
            * These statements have not been evaluated by the Food Safety and
            Standards Authority of India (FSSAI). Our Ayurvedic products are
            not intended to diagnose, treat, cure, or prevent any disease.
            Please consult a qualified healthcare professional before using any
            herbal supplement.
          </p>

          <p className="whitespace-nowrap text-center text-sm text-gray-400">
            © {new Date().getFullYear()} AR Ayurveda Private Limited. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;