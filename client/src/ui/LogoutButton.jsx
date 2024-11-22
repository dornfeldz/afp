// LogoutButton.jsx
import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const LogoutButton = () => {
  const { setAuthState } = useContext(AuthContext); // Access setAuthState to update the auth state

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/logout", {
        method: "GET",
        credentials: "include", // Ensure cookies are sent with the request
      });

      if (response.ok) {
        // Update authState to reflect logged-out status
        setAuthState(false); // Update to false since the user is logged out
        localStorage.removeItem("token"); // Clear the token from localStorage or sessionStorage
        window.location.href = "/login"; // Redirect to login page
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
