import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  const order = location?.state.order;

  return (
    <div
      className="text-center
    mt-8
    p-4
    w-[80%]
    max-w-2xl
    mx-auto
    text-lg"
    >
      <h2 className="mb-5 text-3xl font-bold">Your order is on it's way!</h2>
      <p className="underline">Estimated delivery time: 30 minutes</p>
      <p>Order number: {order.order_number}</p>
      <p className="mb-5">
        Delivery address: {order.address.street}, {order.address.city},{" "}
        {order.address.zipcode}
      </p>
      <p className="mb-5">
        <span className="font-bold">Items:</span>
        {order.items.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.price} x{item.quantity}
          </p>
        ))}
      </p>
      <p>Tip: ${order.tip}</p>
      <p>Total price: ${order.total_price}</p>
    </div>
  );
}

export default Order;
