import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate inside Router context
import { AuthContext } from "../auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate(); // This is now working as the component is under Router context

  // This useEffect handles the redirection if the user is not authenticated
  useEffect(() => {
    if (authState === false) {
      navigate("/login"); // Redirect to login page if the user is not authenticated
    }
  }, [authState, navigate]);

  if (authState === null) {
    return <div>Loading...</div>; // Show loading spinner while checking auth state
  }

  return authState ? children : null; // Render protected content only if authenticated
};

export default ProtectedRoute;
