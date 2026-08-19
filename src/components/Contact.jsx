
import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">

      {/* Hero */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Get in Touch
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
          Contact NOVA
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          Have a question about your order or our products?
          We'd love to hear from you.
        </p>
      </div>

      {/* Main Contact Layout */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {/* Contact Information */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            We're here to help with your questions, orders, and
            shopping experience.
          </p>

          <div className="mt-8 space-y-6">

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                ✉
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>

                <p className="mt-1 text-gray-600">
                  support@nova.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                ☎
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>

                <p className="mt-1 text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                📍
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Address
                </h3>

                <p className="mt-1 text-gray-600">
                  India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>

          <form className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

