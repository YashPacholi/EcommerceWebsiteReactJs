import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className=" bg-gray-950 px-5 py-10 text-gray-300 sm:px-8 lg:px-16">

      {/* Main Footer */}
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            NOVA
          </h2>

          <p className="max-w-xs leading-6">
            Modern essentials for everything you need.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h2>

          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Customer Service
          </h2>

          <ul className="space-y-2">
            <li>
              <a href="#" className="transition-colors duration-200 hover:text-blue-500">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="transition-colors duration-200 hover:text-blue-500">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="transition-colors duration-200 hover:text-blue-500">
                Shipping
              </a>
            </li>

            <li>
              <a href="#" className="transition-colors duration-200 hover:text-blue-500">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Follow Us
          </h2>

          <div className="flex gap-4 text-xl text-gray-300">

            <a
              href="#"
              className="transition-colors duration-200 hover:text-blue-500"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-blue-500"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-blue-500"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-blue-500"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">

        <p>
          © 2026 NOVA. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-blue-500"
          >
            Terms & Conditions
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
