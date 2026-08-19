import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  console.log("Cart Items:", cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="mx-4 my-16 md:mx-10">
      <h1 className="text-3xl font-bold">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        /* ================= EMPTY CART ================= */
        <div className="flex flex-col items-center justify-center mt-16 ">
          <img
  
            src="https://cdnl.iconscout.com/lottie/premium/thumb/carrito-vacio-animation-gif-download-14058115.gif"
            alt="Empty cart"
            className="h-48 w-48 object-contain"
          />

          <h2 className="text-2xl mt-4 font-bold">
            Your Cart Is Empty
          </h2>

          <p className="mt-2 text-gray-500">
            Looks like you haven't added anything yet.
          </p>

         <Link
  to="/products"
  className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-blue-500"
>
  Continue Shopping
</Link>
        </div>
      ) : (
        /* ================= CART WITH ITEMS ================= */
        <>
          <div className="mt-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 rounded-xl border border-gray-200 p-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div>
                  <h2 className="font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    ₹{item.price}
                  </p>

                  <div className="mt-3 flex items-center gap-3">

                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      className="rounded-md border px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                      className="rounded-md border px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ================= TOTAL ================= */}
          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-sm rounded-xl border p-6">
              <h2 className="text-xl font-bold">
                Cart Total
              </h2>

              <p className="mt-4 text-2xl font-bold">
                ₹{totalPrice}
              </p>
              <Link
  to="/checkout"
  className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-blue-600"
>
  Proceed to Checkout
</Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;