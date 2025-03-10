"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push(data.redirect); // Redirect to dashboard
      } else {
        setError(data.error || "Invalid email or password!");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-[#800000] mb-4">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <label htmlFor="email" className="text-gray-800 font-semibold block">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />

        <label htmlFor="password" className="text-gray-800 font-semibold block">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />

        <button 
          onClick={handleLogin} 
          className="w-full bg-[#800000] text-white py-2 rounded hover:bg-[#590000] transition shadow-md"
        >
          Sign In
        </button>

        <p className="mt-4 text-center text-gray-800">
          New user? <Link href="/auth/signup" className="text-[#800000] hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
