"use client";

import Link from "next/link";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login form submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-orange-200"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-gray-700 rounded-md bg-gray-900 text-orange-200"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-orange-200"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full mt-2 p-2 border border-gray-700 rounded-md bg-gray-900 text-orange-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-orange-200">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
