import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

if (loading) {
    return (
      <section className="mx-4 my-16 text-center md:mx-10">
        <p className="text-gray-500">Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-4 my-16 text-center md:mx-10">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  const visibleProducts = showAll
    ? products
    : products.slice(0, 4);

  return (
    <section className="mx-4 my-16 md:mx-10">

      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 text-gray-500">
          Explore Our Popular Products
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {visibleProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Image */}
            <div className="h-64 overflow-hidden bg-gray-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="p-5">

              <h3 className="text-lg font-semibold text-gray-900">
                {product.title}
              </h3>

              {/* Rating */}
              <p className="mt-2 text-yellow-500">
                ★★★★★
                <span className="ml-2 text-sm text-gray-500">
                  {product.rating}
                </span>
              </p>

              {/* Price */}
              <p className="mt-2 text-xl font-bold text-gray-900">
                ₹{product.price}
              </p>

              {/* Add to Cart */}
              <button
                onClick={(e) => e.preventDefault()}
                className="mt-4 w-full rounded-xl bg-black px-5 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-600"
              >
                Add to Cart
              </button>

            </div>

          </Link>
        ))}

      </div>

      {/* Show More / Show Less */}
      <div className="mt-10 flex justify-center">

        {products.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl border border-gray-300 px-7 py-3 font-medium text-gray-900 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        )}

      </div>

    </section>
  );
};

export default FeaturedProducts;