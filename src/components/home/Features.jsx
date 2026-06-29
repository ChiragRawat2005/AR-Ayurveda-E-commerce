const promises = [
  {
    id: 1,
    img: "https://www.arayurveda.shop/cdn/shop/files/1.png?v=1717742122&width=360",
    title: "Free & Fast Shipping",
    subtitle: "Across India",
  },
  {
    id: 2,
    img: "https://www.arayurveda.shop/cdn/shop/files/3.png?v=1717742122&width=360",
    title: "Free & Easy Returns",
    subtitle: "Hassle-free returns",
  },
  {
    id: 3,
    img: "https://www.arayurveda.shop/cdn/shop/files/4.png?v=1717742123&width=360",
    title: "100% Secured Payments",
    subtitle: "Safe & trusted checkout",
  },
  {
    id: 4,
    img: "https://www.arayurveda.shop/cdn/shop/files/5.png?v=1717742122&width=360",
    title: "Expert Help & Support",
    subtitle: "Always here to assist",
  },
];

export default function Features() {
  return (
    <section className="bg-[#FCFAF4] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2E8B57]">
            Our Promise
          </span>

          <h2 className="mt-4 text-5xl font-semibold text-[#183B2D]">
            AR Ayurveda Promises
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            The promises that we'll never break.
          </p>
        </div>

        {/* Features */}

        <div className="mt-20 grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {promises.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col items-center px-6 text-center
                ${
                  index !== promises.length - 1
                    ? "md:border-r border-[#E6E2D8]"
                    : ""
                }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-20 w-20 object-contain transition duration-300 group-hover:scale-105"
              />

              <h3 className="mt-6 text-xl font-semibold text-[#183B2D]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}