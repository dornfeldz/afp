import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { username, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-8 text-5xl font-extrabold">
        Tasty<span className="text-[#e67e22]">Go</span>
      </h1>
      <div className="w-full max-w-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center">Log in!</h1>
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
      </div>
    </div>
  );
}

export default Login;