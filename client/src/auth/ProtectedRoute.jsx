import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;

/*import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();

  if (!authState) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;*/
