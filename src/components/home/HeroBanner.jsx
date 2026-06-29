import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="w-full bg-[#F5F7EE]">
      {/* Desktop Banner */}
      <img
        src="https://www.arayurveda.shop/cdn/shop/files/3celebbenner2-69eef91da71d4.webp?v=1777269171&width=3840"
        alt="AR Ayurveda Banner"
        className="hidden h-[650px] w-full object-cover md:block"
      />

      {/* Mobile Banner */}
      <img
        src="https://www.arayurveda.shop/cdn/shop/files/bannermobile-copy-6a2111318c092.webp?v=1780552198&width=1100"
        alt="AR Ayurveda Banner"
        className="block h-auto w-full object-cover md:hidden"
      />
    </section>
  );
}

export default HeroBanner;
