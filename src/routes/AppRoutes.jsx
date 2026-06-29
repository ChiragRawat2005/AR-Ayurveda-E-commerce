import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/1" element={<ProductDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;