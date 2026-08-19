import React from "react";

const NewsLetter = () => {
  return (
    <section
      className="relative mx-4 my-16 overflow-hidden rounded-2xl bg-cover bg-center px-6 py-20 text-center md:mx-10 md:px-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl">

        <h2 className="text-3xl font-bold tracking-wide text-white md:text-4xl">
          Stay in the NOVA Loop
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-200">
          Get exclusive offers, new arrivals, and the latest updates
          delivered straight to your inbox.
        </p>

        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-white/30 bg-white px-5 py-3 text-black outline-none transition-colors duration-200 focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded-md bg-black px-7 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-600"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
};

export default NewsLetter;