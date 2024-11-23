import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();

  if (!authState) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
