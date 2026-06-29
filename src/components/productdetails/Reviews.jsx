import { FaStar, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://pbs.twimg.com/profile_images/1884105886773452800/jMD6x74W_400x400.jpg",
    rating: 5,
    date: "12 June 2026",
    review:
      "I've been using Nirogi Pachan Churna for almost a month. My digestion has improved a lot and bloating has reduced significantly. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Verma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jzETIOO_i2Tc9XOgxucbDPFGHSTJ-SIAlA&s",
    rating: 5,
    date: "08 June 2026",
    review:
      "Very effective product. Packaging was excellent and delivery was quick. Definitely purchasing again.",
  },
  {
    id: 3,
    name: "Amit Patel",
    image: "https://m.media-amazon.com/images/I/91JvudM-2aL.jpg",
    rating: 4,
    date: "01 June 2026",
    review:
      "Good quality Ayurvedic product. I started noticing improvements after two weeks. Worth the price.",
  },
];

const ratingBars = [
  { star: 5, percent: 88 },
  { star: 4, percent: 9 },
  { star: 3, percent: 2 },
  { star: 2, percent: 1 },
  { star: 1, percent: 0 },
];

export default function Reviews() {
  return (
    <section className="bg-[#FFFDF8] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-green-900 md:text-5xl">
            Customer Reviews
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Loved by thousands of happy customers across India.
          </p>
        </div>

        {/* Rating Summary */}

        <div className="grid gap-12 rounded-3xl bg-white p-10 shadow-lg lg:grid-cols-[300px_1fr]">

          {/* Left */}

          <div className="text-center">
            <h3 className="text-7xl font-bold text-green-800">
              4.9
            </h3>

            <div className="mt-4 flex justify-center gap-1 text-2xl text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="mt-3 text-gray-500">
              Based on 2,431 Reviews
            </p>
          </div>

          {/* Right */}

          <div className="space-y-5">
            {ratingBars.map((item) => (
              <div key={item.star} className="flex items-center gap-4">
                <span className="w-12 font-semibold">
                  {item.star} ★
                </span>

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-green-700"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                <span className="w-12 text-right text-gray-600">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}

        <div className="mt-20 space-y-8">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >

              <div className="flex flex-col gap-6 sm:flex-row">

                <img
                  src={review.image}
                  alt={review.name}
                  className="h-20 w-20 rounded-full object-cover"
                />

                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="text-xl font-bold">
                      {review.name}
                    </h3>

                    <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      <FaCheckCircle />
                      Verified Purchase
                    </span>

                  </div>

                  <div className="mt-3 flex items-center gap-1 text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}

                    <span className="ml-3 text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>

                  <p className="mt-5 leading-8 text-gray-600">
                    {review.review}
                  </p>

                  <button className="mt-6 flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition hover:bg-green-700 hover:text-white">
                    <FaThumbsUp />
                    Helpful
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}