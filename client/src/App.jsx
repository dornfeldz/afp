import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home/Home";
import CartModal from "./ui/Cart";
import Restaurant from "./pages/restaurant/Restaurant";
import { useEffect, useState } from "react";
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
import { AuthContext, AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Order from "./pages/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/restaurant/:id",
        element: (
          <ProtectedRoute>
            <Restaurant />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/terms-and-conditions",
        element: (
          <ProtectedRoute>
            <TermsAndConditions />
          </ProtectedRoute>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <ProtectedRoute>
            <PrivacyPolicy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/career",
        element: (
          <ProtectedRoute>
            <Career />
          </ProtectedRoute>
        ),
      },
      {
        path: "/for-customers",
        element: (
          <ProtectedRoute>
            <ForCustomers />
          </ProtectedRoute>
        ),
      },
      {
        path: "/for-delivery-staff",
        element: (
          <ProtectedRoute>
            <ForDeliveryStaff />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, []);

  if (authState === null) {
    return <div>Loading...</div>;
  }

  return (
    <AuthProvider value={{ authState, setAuthState }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
