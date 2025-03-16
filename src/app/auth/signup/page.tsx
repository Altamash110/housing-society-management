"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "resident",
    societyId: "",
    societyName: "",
    societyAddress: "",
    societyContact: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setError("");
    setMessage("");

    // Validation check
    if (!formData.email || !formData.password || !formData.name || !formData.phone) {
      setError("All fields are required!");
      return;
    }

    // Additional validation for admin registration
    if (
      formData.role === "admin" &&
      (!formData.societyName || !formData.societyAddress || !formData.societyContact)
    ) {
      setError("All society details are required for admin registration!");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("User registered successfully! Redirecting to login...");
        setTimeout(() => router.push("/auth/signin"), 2000);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-[#800000] mb-4">Sign Up</h2>

        {/* Success and Error Messages */}
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Full Name */}
        <label htmlFor="name" className="text-gray-800 font-semibold block">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        {/* Email */}
        <label htmlFor="email" className="text-gray-800 font-semibold block">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        {/* Phone Number */}
        <label htmlFor="phone" className="text-gray-800 font-semibold block">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        {/* Password */}
        <label htmlFor="password" className="text-gray-800 font-semibold block">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        {/* Role */}
        <label htmlFor="role" className="text-gray-800 font-semibold block">Select Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        >
          <option value="admin">Admin</option>
          <option value="resident">Resident</option>
          <option value="tenant">Tenant</option>
          <option value="security">Security</option>
          <option value="committee">Committee</option>
        </select>

        {/* Society ID (only if not admin) */}
        {formData.role !== "admin" && (
          <>
            <label htmlFor="societyId" className="text-gray-800 font-semibold block">
              Society ID
            </label>
            <input
              type="text"
              id="societyId"
              name="societyId"
              placeholder="Society ID"
              value={formData.societyId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
            />
          </>
        )}

        {/* Society Details (only for admin) */}
        {formData.role === "admin" && (
          <>
            <label htmlFor="societyName" className="text-gray-800 font-semibold block">
              Society Name
            </label>
            <input
              type="text"
              id="societyName"
              name="societyName"
              placeholder="Society Name"
              value={formData.societyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
            />

            <label htmlFor="societyAddress" className="text-gray-800 font-semibold block">
              Society Address
            </label>
            <input
              type="text"
              id="societyAddress"
              name="societyAddress"
              placeholder="Society Address"
              value={formData.societyAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
            />

            <label htmlFor="societyContact" className="text-gray-800 font-semibold block">
              Society Contact
            </label>
            <input
              type="text"
              id="societyContact"
              name="societyContact"
              placeholder="Society Contact"
              value={formData.societyContact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
            />
          </>
        )}

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-[#800000] text-white py-2 rounded hover:bg-[#590000] transition shadow-md"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-800">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-[#800000] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
