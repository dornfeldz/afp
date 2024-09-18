import React from "react";

const CartModal = ({ isOpen, onClose, cartItems }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <button className="text-xl font-bold" onClick={onClose}>
          ×
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Your Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
