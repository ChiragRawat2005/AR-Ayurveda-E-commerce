import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Ayurveda?",
    answer:
      "Ayurveda is India's traditional system of medicine that has been practiced for over 5,000 years. It focuses on balancing the body, mind, and spirit using natural herbs, healthy lifestyle practices, and personalized wellness solutions.",
  },
  {
    question: "How is Ayurveda different from Modern Medicine?",
    answer:
      "Modern medicine generally focuses on treating symptoms, whereas Ayurveda aims to identify and treat the root cause of illness while improving overall wellness through natural remedies and lifestyle changes.",
  },
  {
    question: "How are Ayurvedic medicines prepared?",
    answer:
      "Ayurvedic medicines are prepared using carefully selected herbs, minerals, and natural ingredients following traditional formulations and strict quality standards.",
  },
  {
    question: "Are there any side effects of Ayurvedic medicines?",
    answer:
      "When taken as directed and purchased from trusted manufacturers, Ayurvedic medicines are generally safe. However, it is always recommended to consult a healthcare professional before starting any new supplement.",
  },
  {
    question: "Which products help improve immunity?",
    answer:
      "Products like Ashwagandha, Giloy, Amla, and other herbal formulations are traditionally used to support immunity and overall wellness.",
  },
  {
    question: "Which product is suitable for digestive health?",
    answer:
      "Triphala, Nirogi Pachan Churna, and other digestive formulations help support healthy digestion, reduce bloating, and improve gut health.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the individual and the product being used. Most users notice improvements after consistent use for a few weeks along with a healthy lifestyle.",
  },
  {
    question: "Do you provide Cash on Delivery?",
    answer:
      "Yes. Cash on Delivery is available on eligible orders and locations across India.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us through our Contact Us page, email, or customer care number during business hours.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* Hero */}

      <section className="bg-[#FCFAF4] py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold text-[#184E2C]">
            Frequently Asked Questions
          </h1>

          <div className="mt-5 flex items-center justify-center gap-3 text-gray-500">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>

            <span>›</span>

            <span className="font-medium text-[#184E2C]">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#D8E5DD] bg-[#F3F8F5]"
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between border-l-4 border-green-700 px-6 py-5 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  {open === index ? (
                    <ChevronUp size={22} className="text-green-700" />
                  ) : (
                    <ChevronDown size={22} className="text-green-700" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-l-4 border-green-700 px-6 pb-6 text-[16px] leading-8 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
