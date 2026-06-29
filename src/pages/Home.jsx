import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Categories from "../components/home/Categories";
import ShopByConcern from "../components/home/ShopByConcern";
import Testimonials from "../components/home/Testimonials";
import PromoBanners from "../components/home/PromoBanners";
import OurProducts from "../components/home/OurProducts";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroBanner from "../components/home/HeroBanner";
import AyurvedaBanner from "../components/home/AyurvedaBanner";
import OurEthos from "../components/home/OurEthos";

const Home = () => {
  return (
    <>
      <Hero />

      <Categories />

      <ShopByConcern />

      <PromoBanners />

      {/* <OurProducts/> */}

      <FeaturedProducts />

      <OurEthos/>

      <HeroBanner />

      <Features />

      <AyurvedaBanner />

      <Testimonials />
    </>
  );
};

export default Home;
