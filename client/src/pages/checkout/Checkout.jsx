import { useContext, useState } from "react";
import { Context } from "../../ui/AppLayout";

function Checkout() {
  const { cartItems, setCartItems } = useContext(Context);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [tip, setTip] = useState(5);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item.name} - ${item.price} <strong> x{item.quantity}</strong>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2 ml-1">Delivery address</h2>
      <form>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Street"
            className="p-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            className="p-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="Zipcode"
            className="p-2 border border-gray-300 rounded-full"
          />
        </div>
      </form>
      <h2 className="text-xl font-semibold mt-8 mb-2 ml-1">Tip</h2>
      <input
        type="number"
        name="tip"
        id="tip"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
        className="p-2 border border-gray-300 rounded-full"
      />

      <h2 className="mt-6 ml-1 text-xl font-bold">
        Total: ${(totalPrice + tip).toFixed(2)}
      </h2>
      <button
        type="submit"
        className="mt-3 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200"
      >
        Place order
      </button>
    </div>
  );
}

export default Checkout;
