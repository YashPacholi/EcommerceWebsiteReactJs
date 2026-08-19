import React from "react";
import { Link } from "react-router-dom";

const CardData = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80",
    description: "Latest gadgets & accessories",
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80",
    description: "Trendy outfits for everyone",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
    description: "Sports & casual footwear",
  },
  {
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format&fit=crop&q=80",
    description: "Modern home essentials",
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80",
    description: "Skincare & cosmetics",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=80",
    description: "Watches, bags & more",
  },
];

const Categories = () => {
  return (
    <section className="mx-4 my-16 md:mx-10">

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Shop By Category
        </h1>

        <p className="mt-3 text-gray-500">
          Explore our wide range of products
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {CardData.map((data, index) => {
          return (
<div
  key={index}
  className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-md"
>
  {/* Image */}
  <img
    src={data.image}
    alt={data.name}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/60"></div>

  {/* Content */}
  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

    <h2 className="text-2xl font-bold">
      {data.name}
    </h2>

    <p className="mt-1 text-sm text-gray-200">
      {data.description}
    </p>

    <Link to="/products">
      <button className="mt-4 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-blue-500 hover:text-white">
        Explore Now →
      </button>
    </Link>

  </div>
</div>
          );
        })}

      </div>
    </section>
  );
};

export default Categories;