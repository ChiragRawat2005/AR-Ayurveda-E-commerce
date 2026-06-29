export default function ContactForm() {
  return (
    <div>

      <h2 className="text-4xl font-bold text-[#184E2C]">
        We'd love to hear from you.
      </h2>

      <p className="mt-4 max-w-2xl text-gray-600">
        Have a question or feedback? Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form className="mt-10 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border border-gray-200 bg-[#F6F6F6] px-5 py-4 outline-none transition focus:border-green-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-gray-200 bg-[#F6F6F6] px-5 py-4 outline-none transition focus:border-green-700"
          />

        </div>

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full rounded-lg border border-gray-200 bg-[#F6F6F6] px-5 py-4 outline-none transition focus:border-green-700"
        />

        <textarea
          rows={7}
          placeholder="Message"
          className="w-full rounded-lg border border-gray-200 bg-[#F6F6F6] px-5 py-4 outline-none transition focus:border-green-700"
        />

        <label className="flex items-start gap-3 text-gray-600">

          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-green-700"
          />

          <span>
            Save my name, email and website for the next time I comment.
          </span>

        </label>

        <button
          type="submit"
          className="rounded-md bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800"
        >
          SUBMIT NOW
        </button>

      </form>

    </div>
  );
}