import {
  FaShippingFast,
  FaBoxOpen,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBoxOpen />,
    title: "Discreet Delivery",
    desc: "Secure & private packaging for every order.",
  },
  {
    id: 2,
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Free shipping across India on eligible orders.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: "Cash on Delivery",
    desc: "Pay conveniently at your doorstep.",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "100% Secure Payment",
    desc: "Encrypted and trusted payment gateways.",
  },
];

const ProductFeatures = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-700 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;