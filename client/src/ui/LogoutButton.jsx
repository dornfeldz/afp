import React from "react";
import { useAuth } from "../auth/AuthContext"; // Correctly import useAuth

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="px-4 py-2 text-white bg-red-500 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
