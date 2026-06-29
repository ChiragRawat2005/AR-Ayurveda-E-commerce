import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="bg-[#FCFAF4] py-14">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-5xl font-bold text-[#184E2C]">Contact Us</h1>

        <div className="mt-6 flex items-center justify-center gap-3 text-gray-500">
          <Link to="/" className="transition hover:text-green-700">
            Home
          </Link>

          <span>›</span>

          <span className="font-medium text-[#184E2C]">Contact</span>
        </div>
      </div>
    </section>
  );
}
