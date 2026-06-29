import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div>

      <h3 className="text-2xl font-semibold text-[#184E2C]">
        Information
      </h3>

      <div className="mt-8 space-y-4">

        <a
          href="tel:+919099857272"
          className="block text-gray-700 hover:text-green-700"
        >
          +91 90998 57272
        </a>

        <a
          href="mailto:info@arayurveda.com"
          className="block text-gray-700 hover:text-green-700"
        >
          info@arayurveda.com
        </a>

      </div>

      <h4 className="mt-10 text-xl font-semibold text-[#184E2C]">
        Social Media
      </h4>

      <div className="mt-5 flex gap-5 text-2xl text-[#184E2C]">

        <FaFacebookF />

        <FaInstagram />

        <FaPinterestP />

        <FaYoutube />

      </div>

      <h4 className="mt-10 text-xl font-semibold text-[#184E2C]">
        We're Open
      </h4>

      <p className="mt-3 leading-8 text-gray-600">
        Monday – Saturday
        <br />
        9:30 AM – 6:30 PM
      </p>

      <h4 className="mt-10 text-xl font-semibold text-[#184E2C]">
        Address
      </h4>

      <p className="mt-3 leading-8 text-gray-600">
        AR Ayurveda Private Limited
        <br />
        FF 14, Ujala Avenue,
        <br />
        Sarkhej Road, Ahmedabad,
        <br />
        Gujarat – 380055
      </p>

    </div>
  );
}