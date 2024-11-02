import React, { useState } from "react";
import { HiMagnifyingGlass, HiOutlineShoppingCart } from "react-icons/hi2";
import CartModal from "./Cart";
import { Link } from "react-router-dom";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const cartItems = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
  ];
  return (
    <div className="w-full flex items-center justify-between h-16 px-4 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
      <Link to="/">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          Tasty<span className="text-[#e67e22]">Go</span>
        </h1>
      </Link>
      <form className="flex items-center">
        <input
          type="text"
          name="main"
          id="main"
          placeholder="Search for a restaurant..."
          className="bg-[#fae5d3] text-[#888] py-1 px-4 rounded-l-full focus:outline-[#888] hidden md:block"
        />
        <button
          type="submit"
          className="bg-[#e67e22] hidden md:block py-2 px-3 rounded-r-full text-[#fdf2e9]"
        >
          <HiMagnifyingGlass className="text-[#fae5d3]" />
        </button>
      </form>
      <div className="flex items-center gap-2">
        <Link to="/profile">
          <img
            src="https://i.imgur.com/tpTbyMY.jpeg"
            alt="User Avatar"
            className="w-10 h-10 border-2 border-white rounded-full"
          />
        </Link>
        <button
          onClick={toggleCart}
          className="flex items-center justify-center text-2xl border-2 border-white rounded-full size-10"
        >
          <HiOutlineShoppingCart />
        </button>
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
      />
    </div>
  );
}

export default Header;
