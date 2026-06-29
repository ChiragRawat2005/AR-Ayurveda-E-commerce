import {
  FaLeaf,
  FaHeartbeat,
  FaShieldAlt,
  FaCapsules,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "100% Ayurvedic Formula",
    description:
      "Made using traditional Ayurvedic herbs with no harmful chemicals or artificial additives.",
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: "Supports Healthy Digestion",
    description:
      "Helps improve digestion, reduces bloating, and promotes a healthy digestive system naturally.",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Safe for Daily Use",
    description:
      "Prepared with premium quality herbs and suitable for regular consumption as recommended.",
  },
  {
    id: 4,
    icon: <FaCapsules />,
    title: "Clinically Trusted",
    description:
      "Manufactured in certified facilities following strict quality and safety standards.",
  },
];

export default function KeyBenefits() {
  return (
    <section className="bg-[#FFFDF8] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="font-heading text-4xl font-bold text-green-900 md:text-5xl">
            Key Benefits
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Experience the natural power of Ayurveda with carefully selected
            herbs that promote complete wellness.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-700 hover:shadow-xl"
            >
              {/* Icon */}

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="mt-7 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}