import { useContext, useState } from "react";
import { Context } from "../../ui/AppLayout";

function QuantityBtn({ item }) {
  const [quantity, setQuantity] = useState(1);

  const { cartItems, setCartItems } = useContext(Context);

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  }

  function addToCart() {
    setCartItems([
      ...cartItems,
      { name: item.name, price: item.price, quantity: quantity },
    ]);
  }

  return (
    <div className="flex items-center gap-4">
      <div>
        <button
          className="bg-[#e67e22] text-xs size-6 text-white rounded-full mr-2"
          onClick={handleDecrease}
        >
          -
        </button>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          className="w-10 px-2 rounded-full text-center"
        />
        <button
          className="bg-[#e67e22] text-xs size-6 text-white rounded-full ml-2"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <button
        className="px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default QuantityBtn;
