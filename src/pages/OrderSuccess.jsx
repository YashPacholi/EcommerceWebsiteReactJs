import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-5 text-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600 md:h-20 md:w-20 md:text-4xl">
          ✓
        </div>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Order Placed Successfully!
        </h1>

        <p className="text-lg text-gray-700 sm:text-xl">
          Thank you for shopping with NOVA.
        </p>

        <p className="text-sm text-gray-500 sm:text-base">
          Your order has been placed successfully.
        </p>

        <Link
          to="/products"
          className="mt-2 rounded-2xl bg-black px-5 py-3 text-sm text-white transition hover:bg-blue-600 sm:px-6 sm:text-base"
        >
          Continue Shopping
        </Link>

      </div>
    </section>
  );
};

export default OrderSuccess;