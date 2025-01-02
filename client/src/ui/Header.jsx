import React, { useState } from "react";
import { HiMagnifyingGlass, HiOutlineShoppingCart } from "react-icons/hi2";
import CartModal from "./Cart";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = []; // Ide jön a megfelelő logika a cartItems kezelésére
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="w-full flex items-center justify-between h-16 px-4 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-extrabold md:text-4xl">
          Tasty<span className="text-[#e67e22]">Go</span>
        </h1>
      </Link>

      {/* Search Bar */}
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

      {/* User Section */}
      <div className="flex items-center gap-2">
        {/* User Avatar & Menu (Signed In) */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Sign In Button (Signed Out) */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        {/* Cart Button */}
        <div className="relative">
          <button
            onClick={toggleCart}
            className="flex items-center justify-center text-2xl border-2 border-white rounded-full size-10"
          >
            <HiOutlineShoppingCart />
          </button>
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#e67e22] text-white text-xs font-semibold rounded-full px-1">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
      />
    </div>
  );
}

export default Header;
