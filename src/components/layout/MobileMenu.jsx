import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-xl font-bold text-green-700"
              >
                AR Ayurveda
              </Link>

              <button
                onClick={closeMenu}
                className="text-2xl text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation */}
            <nav className="mt-4 flex flex-col">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-6 py-4 font-medium transition ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Bottom */}
            <div className="absolute bottom-0 w-full border-t p-5">
              <p className="text-sm text-gray-500">
                🌿 Pure Ayurvedic Wellness
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
