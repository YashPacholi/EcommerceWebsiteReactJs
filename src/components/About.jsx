
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">

      {/* Hero */}
      <div className="grid items-center gap-10 py-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Welcome to NOVA
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Modern shopping.
            <br />
            Made simple.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
            Discover quality products and enjoy a simple,
            modern shopping experience built around you.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Explore Products
          </Link>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            alt="Modern shopping experience"
            className="h-80 w-full rounded-3xl object-cover md:h-[420px]"
          />
        </div>
      </div>

      {/* Who We Are */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Who We Are
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
          Shopping made better
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          NOVA is a modern e-commerce platform built to make online
          shopping simple, convenient, and enjoyable.
        </p>

        <p className="mt-3 leading-8 text-gray-600">
          We bring quality products together with a clean and
          user-friendly shopping experience.
        </p>
      </div>

      {/* Why Choose NOVA */}
      <div className="mt-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Why NOVA
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose NOVA?
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Quality Products
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Products selected with quality, value, and everyday
              usefulness in mind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Easy Shopping
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Browse products, manage your cart, and checkout through
              a simple and clean experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              Smooth Checkout
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A straightforward checkout flow designed to make
              completing your order easy.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-3xl bg-gray-900 px-6 py-12 text-center text-white md:px-12">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to explore NOVA?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-300">
          Discover our collection and find products that fit your
          everyday needs.
        </p>

        <Link
          to="/products"
          className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-blue-600 hover:text-white"
        >
          Shop Now
        </Link>
      </div>

    </section>
  );
};

export default About;
