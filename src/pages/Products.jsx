import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  console.log("Search:", searchQuery);

  // Fetch Products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=0"
        );

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  // Fetch Categories
  useEffect(() => {
    const cat = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        );

        const data = await response.json();

        setCategories(data);

        console.log("Categories:", data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    cat();
  }, []);

  // Search + Category Filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  return (
    <section className="mx-4 my-16 md:mx-10">

      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          All Products
        </h1>

        <p className="mt-3 text-gray-500">
          Explore our complete collection
        </p>
      </div>

      {/* Category Buttons */}
      <div className="mt-8 flex flex-wrap gap-3">

        {/* All Button */}
        <button
          onClick={() => setSelectedCategory("all")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white"
              : "border border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
        >
          All
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "border border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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

              <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                {product.title}
              </h2>

              <p className="mt-2 text-yellow-500">
                ⭐ {product.rating}
              </p>

              <p className="mt-2 text-xl font-bold text-gray-900">
                ₹{product.price}
              </p>

            </div>

          </Link>
        ))}

      </div>

      {/* No Products */}
      {filteredProducts.length === 0 && (
        <p className="mt-10 text-center text-gray-500">
          No products found.
        </p>
      )}

    </section>
    
  );
};

export default Products;