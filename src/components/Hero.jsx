
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaArrowRight,
  FaShippingFast,
} from "react-icons/fa";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&auto=format&fit=crop&q=80",
    tag: "NEW COLLECTION 2026",
    title: "Discover Fashion That Defines You",
    description:
      "Elevate your wardrobe with premium clothing, footwear, accessories and exclusive collections crafted for modern lifestyles.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=80",
    tag: "SUMMER COLLECTION",
    title: "Style Made For You",
    description:
      "Explore our latest collection designed for confidence, comfort and everyday style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80",
    tag: "BEST DEALS",
    title: "Premium Products, Amazing Prices",
    description:
      "Find watches, accessories and everyday essentials with exciting discounts.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-4 my-6 grid min-h-[500px] grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-gray-100 px-5 py-8 sm:gap-10 md:mx-10 md:min-h-[600px] md:grid-cols-2 md:px-12 lg:px-16">

      {/* Left Side */}
      <div className="flex min-w-0 flex-col justify-center">
        <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600 sm:text-sm">
          {slides[currentSlide].tag}
        </span>

        <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
          {slides[currentSlide].title}
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {slides[currentSlide].description}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/products"
            className="flex w-full items-center justify-center rounded-lg bg-black px-7 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-600 sm:w-auto"
          >
            Shop Now
          </Link>

          <Link
            to="/products"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-900 transition-all duration-200 hover:border-blue-500 hover:text-blue-500 sm:w-auto"
          >
            Explore Collection
            <FaArrowRight />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-700 sm:gap-6">
          <div className="flex items-center gap-2">
            <FaShippingFast className="text-blue-600" />
            <span>Free Shipping</span>
          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-blue-600" />
            <span>Premium Quality</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex min-w-0 items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="h-[320px] w-full max-w-md rounded-2xl object-cover shadow-xl sm:h-[400px] md:h-[520px] lg:max-w-lg"
        />

        {/* Rating Card */}
        <div className="absolute bottom-5 left-2 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg sm:bottom-8 sm:left-4 sm:gap-3 sm:px-4 sm:py-3">
          <div className="rounded-full bg-yellow-100 p-2 text-yellow-500">
            <FaStar />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 sm:text-base">
              4.9 Rating
            </h4>

            <p className="text-[10px] text-gray-500 sm:text-xs">
              12k+ Happy Customers
            </p>
          </div>
        </div>

        {/* Sale Card */}
        <div className="absolute right-2 top-5 rounded-xl bg-black px-3 py-3 text-center text-white shadow-lg sm:right-4 sm:top-8 sm:px-5 sm:py-4">
          <h2 className="text-xl font-bold sm:text-2xl">
            50% OFF
          </h2>

          <span className="text-xs text-gray-300 sm:text-sm">
            Summer Sale
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

