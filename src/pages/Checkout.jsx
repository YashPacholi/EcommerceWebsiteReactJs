import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (name.trim() === "") {
      toast.error("Please enter your name");
      return;
    }

    if (email.trim() === "") {
      toast.error("Please enter your email");
      return;
    }

    if (phone.trim() === "") {
      toast.error("Please enter your phone number");
      return;
    }

    if (address.trim() === "") {
      toast.error("Please enter your address");
      return;
    }

    if (city.trim() === "") {
      toast.error("Please enter your city");
      return;
    }

    if (state.trim() === "") {
      toast.error("Please enter your state");
      return;
    }

    if (pin.trim() === "") {
      toast.error("Please enter your PIN code");
      return;
    }

    dispatch(clearCart());

  toast.success("Order placed successfully!");
    navigate("/order-success");
  };

  return (
    <>
     <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      theme="light"
    />
    
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Checkout
        </h1>

        <p className="mt-2 text-gray-500">
          Complete your order securely
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">

        {/* Left Side */}
        <div className="lg:col-span-2">

          {/* Customer Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Customer Information
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* Name */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Shipping Address
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* Address */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  City
                </label>

                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* State */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  State
                </label>

                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* PIN */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  PIN Code
                </label>

                <input
                  type="text"
                  placeholder="PIN code"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="sticky top-24 h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Order Summary
          </h2>

          {/* Cart Items */}
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />

                  <div className="min-w-0">
                    <p className="truncate font-medium text-gray-900">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="shrink-0 font-medium text-gray-900">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
            <span className="font-medium text-gray-600">
              Total
            </span>

            <span className="text-2xl font-bold text-gray-900">
              ₹{totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Place Order */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full rounded-xl bg-black px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Checkout;