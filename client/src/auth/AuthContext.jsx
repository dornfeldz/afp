import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext(null);

// AuthProvider Component to wrap the app
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false); // Manage authentication state

  const login = () => setAuthState(true); // Mock login function
  const logout = () => setAuthState(false); // Mock logout function

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
