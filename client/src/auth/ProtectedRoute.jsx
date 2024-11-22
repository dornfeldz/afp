import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState === false) {
      console.log("Unauthenticated, redirecting to login");
      navigate("/login"); // Redirect to login if unauthenticated
    }
  }, [authState, navigate]);

  if (authState === null) {
    return <div>Loading...</div>; // Show loading while auth state is determining
  }

  return authState ? children : null; // Show protected content if authenticated
};

export default ProtectedRoute;
