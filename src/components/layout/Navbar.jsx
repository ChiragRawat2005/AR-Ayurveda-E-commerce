import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartCount = 2;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Offer Bar */}

      <div
        className={`overflow-hidden bg-green-800 text-white transition-all duration-500 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-24">
          <div className="flex h-10 items-center justify-center text-center text-xs font-medium tracking-wide sm:text-sm">
            🌿 EXTRA 10% OFF ON ONLINE PAYMENT
          </div>
        </div>
      </div>

      {/* Prevent Layout Jump */}

      {isScrolled && <div className="h-20"></div>}

      {/* Navbar */}

      <header
        className={`z-50 w-full border-b border-gray-200 transition-all duration-500 ${
          isScrolled
            ? "fixed left-0 top-0 bg-white/95 shadow-xl backdrop-blur-xl animate-slideDown"
            : "relative bg-white"
        }`}
      >
        <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-24">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}

            <Link to="/" className="flex flex-shrink-0 items-center gap-3">
              <img
                src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/e0a6fab424668935b4e4e10baf079ab6.w400.h400.jpg"
                alt="AR Ayurveda"
                className={`rounded-full object-cover shadow-md transition-all duration-300 ${
                  isScrolled ? "h-10 w-10" : "h-12 w-12"
                }`}
              />

              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-green-800">
                  AR Ayurveda
                </h1>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Natural Wellness
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-10 xl:flex 2xl:gap-12">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 font-medium transition-all duration-300 ${
                      isActive
                        ? "text-green-700"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-green-700 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-2 sm:gap-4">
              <button className="hidden h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-green-700 hover:text-white lg:flex">
                <FaSearch />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-green-700 hover:text-white">
                <FaUser />
              </button>

              <Link
                to="/cart"
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-green-700 hover:text-white"
              >
                <FaShoppingBag />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              </Link>

              <button
                onClick={() => setMobileMenu(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-green-700 hover:text-white xl:hidden"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenu} closeMenu={() => setMobileMenu(false)} />
    </>
  );
};

export default Navbar;
