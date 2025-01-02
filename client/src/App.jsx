import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import Contact from "./pages/footer pages/contact/Contact";
import TermsAndConditions from "./pages/footer pages/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./pages/footer pages/privacy-policy/PrivacyPolicy";
import Career from "./pages/footer pages/career/Career";
import ForCustomers from "./pages/footer pages/for-customers/ForCustomers";
import ForDeliveryStaff from "./pages/footer pages/for-delivery-staff/ForDeliveryStaff";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/login/Login";
import Order from "./pages/order/Order";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SignedIn>
        <AppLayout />
      </SignedIn>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/restaurant/:id", element: <Restaurant /> },
      { path: "/contact", element: <Contact /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/career", element: <Career /> },
      { path: "/for-customers", element: <ForCustomers /> },
      { path: "/for-delivery-staff", element: <ForDeliveryStaff /> },
      { path: "/profile", element: <Profile /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order", element: <Order /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

