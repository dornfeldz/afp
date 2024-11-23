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
    ],
  },
  {
    path: "/signup",
    element: <Signup />, // No protection needed
  },
  {
    path: "/login",
    element: <Login />, // No protection needed
  },
]);

function App() {
  const [authState, setAuthState] = useState(null); // null = loading, true/false = authenticated

  // Handle the token on page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState(true); // User is authenticated
    } else {
      setAuthState(false); // User is not authenticated
    }
  }, []);

  if (authState === null) {
    return <div>Loading...</div>; // Show loading spinner while auth state is being determined
  }

  return (
    <AuthProvider value={{ authState, setAuthState }}>
      <RouterProvider router={router} /> {/* The router provided here */}
    </AuthProvider>
  );
}

export default App;
