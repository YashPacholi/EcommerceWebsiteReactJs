import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  ShoppingBag,
  Menu,
  Sun,
  Moon,
  X,
} from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state)=>state.cart.items);

  const cartCount = cartItems.reduce(
    (total,item) => total+item.quantity,
    0
  );
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate();


  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 transition-colors duration-200 ${
      isActive
        ? "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:bg-blue-600 after:content-['']"
        : "hover:text-blue-600"
    }`;

const handleSearch = () => {
  if (search.trim()) {
    navigate(
      `/products?search=${encodeURIComponent(search.trim())}`
    );
  }
};

const toggleseach = (e)=>{
  if(e.key==='Enter'){
    handleSearch();
  }
}

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 sm:px-6 md:px-10 md:py-5">

      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold tracking-[0.15em]">
        <ShoppingBag size={24} />
        <Link to="/">NOVA</Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-2 md:flex">
        <li>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Desktop Icons */}
      <div className="hidden items-center gap-2 md:flex">

<input
  type="text"
  placeholder="Search products..."
  value={search}
  onKeyDown={toggleseach}
  onChange={(e) => setSearch(e.target.value)}

  className="w-56 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
/>
        {/* Search */}
        <button className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
        onClick={handleSearch}
        >
          <Search size={21} />
        </button>

        

        {/* Cart */}
        <Link
          to="/cart"
          className="relative rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
        >
          <ShoppingCart size={21} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
            {cartCount}
          </span>
        </Link>


      </div>

      {/* Mobile Menu Button */}
      <div className="flex w-full max-w-sm items-center gap-2 px-4 md:hidden">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={toggleseach}
    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
  />

  <button
    onClick={handleSearch}
    className="rounded-lg bg-black p-3 text-white hover:bg-blue-600"
  >
    <Search size={20} />
  </button>
</div>
      <button
        className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-md md:hidden">

          <div className="flex flex-col items-center gap-2 py-6">

            <NavLink
              to="/"
              end
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>

            {/* Mobile Icons */}
            <div className="mt-3 flex items-center gap-4">

             

              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="relative rounded-md p-2 hover:bg-gray-100"
              >
                <ShoppingCart size={21} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
                  {cartCount}
                </span>
              </Link>
              

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;