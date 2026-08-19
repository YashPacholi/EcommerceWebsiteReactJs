import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";


const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
const [quantity, setQuantity] = useState(1)

const dispatch = useDispatch();


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
      })
      .catch((error) => {
        console.log("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading product...
        </p>
      </section>
    );
  }


  const handleaddToCart = () =>{
    dispatch(addToCart({
      ...product,
      quantity,
    }))
    toast.success("Product Added To Cart!");
  }

  return (
    <section className="mx-4 my-16 md:mx-10">
<Link to='/' className="mb-8 inline-block text-sm font-medium to-gray-500 transition-colors hover:text-blue-500"
>

     ← Back to Products
</Link>

      <div className="grid gap-10 md:grid-cols-2">

        {/* ================= IMAGE SIDE ================= */}
        <div>

          {/* Main Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={selectedImage}
              alt={product.title}
              className="h-[450px] w-full object-cover"
            />
          </div>

          {/* Image Gallery */}
          <div className="mt-4 flex gap-3 overflow-x-auto">

            {product.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
  selectedImage === image
    ? "border-blue-500"
    : "border-gray-300"
}`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}

          </div>

        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-sm font-medium uppercase tracking-wide text-blue-500">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            {product.title}
          </h1>

          {/* Rating */}
          <p className="mt-3 text-lg text-yellow-500">
            ⭐ {product.rating}
          </p>

          {/* Price */}
          <p className="mt-5 text-3xl font-bold text-gray-900">
            ₹{product.price}
          </p>

          {/* Description */}
          <p className="mt-5 leading-7 text-gray-600">
            {product.description}
          </p>

          {/* Stock */}
          <p className="mt-3 text-sm text-gray-500">
            {product.stock} items available
          </p>


           <div className="mt-6 flex items-center gap-4">

  <span className="font-medium">
    Quantity:
  </span>

  <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">

    <button
      onClick={() =>
        setQuantity((prev) => Math.max(1, prev - 1))
      }
      className="px-4 py-2 text-lg hover:bg-gray-100"
    >
      -
    </button>

    <span className="px-5 py-2 font-medium">
      {quantity}
    </span>

    <button
      onClick={() =>
        setQuantity((prev) => prev + 1)
      }
      className="px-4 py-2 text-lg hover:bg-gray-100"
    >
      +
    </button>

  </div>

</div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">


            {/* Add To Cart */}
            <button 
            onClick={handleaddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-600">
              <FaShoppingCart />
              Add to Cart
            </button>

            

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;