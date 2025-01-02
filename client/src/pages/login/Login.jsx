import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fae5d3]">
      <h1 className="mb-8 text-5xl font-extrabold">
        Tasty<span className="text-[#e67e22]">Go</span>
      </h1>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Log in!</h1>
        {/* Clerk SignIn Component */}
        <SignIn
          appearance={{
            elements: {
              card: "bg-white shadow-lg rounded-lg p-6",
              headerTitle: "text-2xl font-bold text-gray-800",
              formFieldInput: "border border-gray-300 rounded px-4 py-2",
              formButtonPrimary:
                "bg-[#e67e22] text-white rounded px-4 py-2 hover:bg-[#cf711f]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;




