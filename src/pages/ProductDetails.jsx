import ProductGallery from "../components/productdetails/ProductGallery";
import ProductInfo from "../components/productdetails/ProductInfo";
import ProductFeatures from "../components/productdetails/ProductFeatures";
import WatchAndBuy from "../components/productdetails/WatchAndBuy";
import ProductBanner from "../components/productdetails/ProductBanner";
import KeyBenefits from "../components/productdetails/KeyBenefits";
import Ingredients from "../components/productdetails/Ingredients";
import HowToUse from "../components/productdetails/HowToUse";
import ProductFAQ from "../components/productdetails/ProductFAQ";
import Reviews from "../components/productdetails/Reviews";
import RelatedProducts from "../components/productdetails/RelatedProducts";
import StickyBuyBar from "../components/productdetails/StickyBuyBar";

const ProductDetails = () => {
  return (
    <>
      {/* Top Section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-14 lg:grid-cols-2">
          <ProductGallery />
          <ProductInfo />
        </div>
      </section>

      <ProductFeatures />

      <WatchAndBuy />

      <ProductBanner />

      <Ingredients />

      <ProductFAQ />

      <Reviews />

      <RelatedProducts />

      <StickyBuyBar />
    </>
  );
};

export default ProductDetails;