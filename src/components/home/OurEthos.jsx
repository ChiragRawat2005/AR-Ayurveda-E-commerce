export default function OurEthos() {
  return (
    <section className="bg-[#FFFDF5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-5xl font-bold text-[#184E2C]">
            Our Ethos
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Ensuring every Ayurvedic and herbal product meets the highest
            quality standards.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          <div className="flex justify-center">
            <img
              src="https://www.arayurveda.shop/cdn/shop/files/brand-icon-3a.webp?v=1718258447&width=360"
              alt="100% Natural"
              className="h-40 w-40 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.arayurveda.shop/cdn/shop/files/brand-icon-4a.webp?v=1718258447&width=360"
              alt="Lab Tested"
              className="h-40 w-40 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.arayurveda.shop/cdn/shop/files/brand-icon-6a.webp?v=1718258447&width=360"
              alt="GMP Certified"
              className="h-40 w-40 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.arayurveda.shop/cdn/shop/files/brand-icon-7a.webp?v=1718258447&width=360"
              alt="Herbal"
              className="h-40 w-40 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.arayurveda.shop/cdn/shop/files/brand-icon-1a.webp?v=1718258447&width=360"
              alt="Ayurveda"
              className="h-40 w-40 object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.arayurveda.shop/cdn/shop/files/brand-icon-2_copy.webp?v=1718258447&width=360"
              alt="Quality"
              className="h-40 w-40 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}