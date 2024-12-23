"use client";

import Link from "next/link";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration form submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-md p-8 border border-orange-700 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-orange-200"
            >
              Username
            </label>
            <input
              name="username"
              type="text"
              id="username"
              className="w-full mt-2 p-2 border border-orange-700 bg-black text-orange-200"
              required
            />
          </div>
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
              className="w-full mt-2 p-2 border border-orange-700 bg-black text-orange-200"
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
              className="w-full mt-2 p-2 border border-orange-700 bg-black text-orange-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 hover:bg-orange-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-orange-200">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
