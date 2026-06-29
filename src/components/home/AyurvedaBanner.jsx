import { Link } from "react-router-dom";

function AyurvedaBanner() {
  return (
    <section className="w-full bg-[#F5F7EE]">
      {/* Desktop Banner */}
      <img
        src="https://ayurvedichealthcareproducts.wordpress.com/wp-content/uploads/2023/02/cropped-b62ee480-4ae5-4655-8310-5133cf8b9207.jpg"
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

export default AyurvedaBanner;
