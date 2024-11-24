import { useContext, useState } from "react";
import { Context } from "../../ui/AppLayout";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, setCartItems } = useContext(Context);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [tip, setTip] = useState(5);

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      order_number: Math.floor(Math.random() * 1000000),
      users: "user_id",
      items: cartItems,
      address: { street, city, zipcode },
      tip: tip,
      total_price: totalPrice + tip,
    };

    try {
      const response = await fetch("http://localhost:8000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        console.log("Order successfully placed:", order);
        navigate("/order", { state: { order } });
        setCartItems([]);
      } else {
        console.error("Failed to place order:", response.statusText);
      }
    } catch (error) {
      console.error("Error while placing order:", error);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item.name} - ${item.price} <strong> x{item.quantity}</strong>
          </li>
        ))}
      </ul>
      <h2 className="mt-8 mb-2 ml-1 text-xl font-semibold">Delivery address</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Street"
            className="p-2 border border-gray-300 rounded-full"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            className="p-2 border border-gray-300 rounded-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="Zipcode"
            className="p-2 border border-gray-300 rounded-full"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
      </form>
      <h2 className="mt-8 mb-2 ml-1 text-xl font-semibold">Tip</h2>
      <input
        type="number"
        name="tip"
        id="tip"
        className="p-2 border border-gray-300 rounded-full"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />

      <h2 className="mt-6 ml-1 text-xl font-bold">
        Total: ${(totalPrice + tip).toFixed(2)}
      </h2>
      <button
        type="submit"
        className="mt-3 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200"
        onClick={handleSubmit}
      >
        Place order
      </button>
    </div>
  );
}

export default Checkout;
