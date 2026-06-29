import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-green-700">
        404
      </h1>

      <p className="mt-3 text-gray-600">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-green-700 px-8 py-3 text-white"
      >
        Back Home
      </Link>
    </section>
  );
};

export default NotFound;