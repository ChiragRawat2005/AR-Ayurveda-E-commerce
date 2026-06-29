import { Link } from "react-router-dom";

export default function ProductBanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Link
          to="/products/1"
          className="block overflow-hidden rounded-[32px]"
        >
          {/* Desktop Banner */}

          <img
            src="https://www.arayurveda.shop/cdn/shop/files/3celebbenner2-69eef91da71d4.webp?v=1777269171&width=3840"
            alt="AR Ayurveda Banner"
            className="hidden h-full w-full object-cover md:block"
          />

          {/* Mobile Banner */}

          <img
            src="https://www.arayurveda.shop/cdn/shop/files/mobilebanner2.webp?v=1777269172&width=1200"
            alt="AR Ayurveda Banner"
            className="block h-full w-full object-cover md:hidden"
          />
        </Link>
      </div>
    </section>
  );
}