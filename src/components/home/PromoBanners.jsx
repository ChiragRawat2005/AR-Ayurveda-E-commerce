export default function PromoBanners() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <img
            src="https://www.arayurveda.shop/cdn/shop/files/hft_copy.png?v=1780554068"
            alt="Banner 1"
            className="h-auto w-full object-cover"
          />

          <img
            src="https://www.arayurveda.shop/cdn/shop/files/nirogi_copy_1.png?v=1780554068"
            alt="Banner 2"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
