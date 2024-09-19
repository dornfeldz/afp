import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home/Home";
import CartModal from "./ui/Cart";
import Restaurant from "./pages/restaurant/Restaurant";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
    ],
  },
]);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
  ];

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>
      <RouterProvider router={router} />
      <CartModal
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;
