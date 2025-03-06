"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("resident"); // Default role
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    console.log("Registered:", { email, password, role });
    router.push("/auth/signin"); // Redirect to login after signup
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-[#800000] mb-4">Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#800000]"
        >
          <option value="admin">Admin</option>
          <option value="resident">Resident</option>
          <option value="tenant">Tenant</option>
          <option value="security">Security</option>
        </select>

        <button 
          onClick={handleSignup} 
          className="w-full bg-[#800000] text-white py-2 rounded hover:bg-[#590000] transition shadow-md"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-700">
          Already have an account? <Link href="/auth/signin" className="text-[#800000] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
