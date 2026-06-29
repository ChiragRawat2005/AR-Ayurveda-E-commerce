import { FaGlassWater, FaClock, FaFaceSmile } from "react-icons/fa6";

const steps = [
  {
    id: 1,
    icon: <FaGlassWater />,
    title: "Take One Scoop",
    description:
      "Take one teaspoon (5-10g) of Nirogi Pachan Churna after meals or as directed by your Ayurvedic physician.",
  },
  {
    id: 2,
    icon: <FaClock />,
    title: "Mix with Warm Water",
    description:
      "Mix the powder thoroughly with lukewarm water or consume directly with water for better absorption.",
  },
  {
    id: 3,
    icon: <FaFaceSmile />,
    title: "Enjoy Better Digestion",
    description:
      "Use regularly for the best results and support healthy digestion, metabolism, and overall gut wellness.",
  },
];

export default function HowToUse() {
  return (
    <section className="bg-[#FFFDF7] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-green-900 md:text-5xl">
            How To Use
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Follow these simple steps to get the maximum benefits from your
            Ayurvedic wellness journey.
          </p>
        </div>

        {/* Steps */}

        <div className="relative grid gap-10 md:grid-cols-3">
          {/* Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-green-100 md:block" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Number */}

              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white shadow-lg">
                {step.id}
              </div>

              {/* Icon */}

              <div className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl text-green-700">
                {step.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-semibold text-green-900">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-8 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
