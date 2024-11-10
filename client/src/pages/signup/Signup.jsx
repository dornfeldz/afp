import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.log("Signup failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-8 text-5xl font-extrabold">
        Tasty<span className="text-[#e67e22]">Go</span>
      </h1>
      <div className="w-full max-w-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center">Sign up!</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-[#fae5d3] text-[#888]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-[#fae5d3] text-[#888]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-[#fae5d3] text-[#888]"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-8 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200 flex mx-auto"
          >
            Signup
          </button>
        </form>
        <button
          onClick={() =>
            (window.location.href = "http://localhost:8000/auth/google")
          }
          className="flex px-6 py-3 mx-auto mt-4 font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-full shadow hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
