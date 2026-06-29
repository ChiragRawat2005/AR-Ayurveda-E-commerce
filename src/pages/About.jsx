import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-[#FCFAF4] py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold text-[#184E2C]">About Us</h1>

          <div className="mt-6 flex items-center justify-center gap-3 text-gray-500">
            <Link to="/" className="transition hover:text-green-700">
              Home
            </Link>

            <span>›</span>

            <span className="font-medium text-[#184E2C]">About</span>
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-8 text-lg leading-9 text-gray-700">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-[#184E2C]">AR Ayurveda</span>,
              where the timeless science of Ayurveda meets modern wellness. Our
              mission is to provide authentic Ayurvedic medicines and herbal
              wellness products that help people live healthier, happier, and
              more balanced lives.
            </p>

            <p>
              Ayurveda is one of the world's oldest systems of natural healing,
              originating in India over <strong>3,000 years ago</strong>. Based
              on the principles of balancing the body, mind, and spirit, it
              promotes overall well-being through natural herbs, traditional
              formulations, and healthy lifestyle practices. Every product we
              offer is inspired by these ancient teachings while meeting today's
              highest quality standards.
            </p>

            <p>
              At AR Ayurveda, we carefully source premium herbal ingredients and
              manufacture our products under strict quality control to ensure
              safety, purity, and effectiveness. From digestive wellness and
              immunity support to personal care and daily health supplements,
              our collection is designed to support your wellness journey
              naturally.
            </p>

            <p>
              Customer satisfaction is at the heart of everything we do. Every
              order is securely packaged, delivered with care, and backed by our
              commitment to authenticity and transparency. We strive to make
              Ayurvedic healthcare accessible to every household through trusted
              products and exceptional service.
            </p>

            <p>
              Headquartered in <strong>Ahmedabad, Gujarat</strong>, AR Ayurveda
              proudly serves customers across India. As we continue to grow, our
              vision remains the same—to preserve the rich heritage of Ayurveda
              while making natural wellness simple, reliable, and available for
              everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
