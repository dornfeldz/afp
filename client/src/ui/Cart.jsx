import React, { useContext } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { Context } from "./AppLayout";
import { Link } from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, setCartItems } = useContext(Context);

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-between h-full px-4 pb-6">
        <div>
          <button className="h-16 mb-10 text-3xl font-bold" onClick={onClose}>
            <HiOutlineXMark />
          </button>
          <h2 className="mb-4 text-2xl font-semibold">Your Order</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ${item.price} <strong> x{item.quantity}</strong>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length > 0 && (
          <Link to="/checkout">
            <button
              className="mt-8 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200"
              onClick={onClose}
            >
              Check out
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartModal;
