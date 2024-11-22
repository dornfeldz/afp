// auth/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around your app
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null); // null for loading, true/false for authenticated

  useEffect(() => {
    // Check if there's a token in localStorage (or cookies, depending on your setup)
    const token = localStorage.getItem("token");
    setAuthState(!!token); // If token exists, authState is true, else false
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}{" "}
      {/* This will allow the context to be accessed in child components */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
