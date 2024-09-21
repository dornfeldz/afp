import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home/Home";
import CartModal from "./ui/Cart";
import Restaurant from "./pages/restaurant/Restaurant";
import { useState } from "react";
import Contact from "./pages/footer pages/contact/Contact";
import TermsAndConditions from "./pages/footer pages/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./pages/footer pages/privacy-policy/PrivacyPolicy";
import Career from "./pages/footer pages/career/Career";
import ForCustomers from "./pages/footer pages/for-customers/ForCustomers";
import ForDeliveryStaff from "./pages/footer pages/for-delivery-staff/ForDeliveryStaff";

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/for-customers",
        element: <ForCustomers />,
      },
      {
        path: "/for-delivery-staff",
        element: <ForDeliveryStaff />,
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
