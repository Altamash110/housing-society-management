"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterSociety() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactInfo: "",
    registrationNumber: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSociety = async () => {
    setError("");
    setMessage("");

    if (!formData.name || !formData.address || !formData.contactInfo || !formData.registrationNumber) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch("/api/auth/society", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Society registered successfully!");
        setTimeout(() => router.push("/auth/signup"), 2000); // Redirect to Signup page
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
        <h2 className="text-2xl font-bold text-center text-[#800000] mb-4">Register Society</h2>

        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Society Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 bg-white shadow-md"
        />
        <input
          type="text"
          name="address"
          placeholder="Society Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 bg-white shadow-md"
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          value={formData.contactInfo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 bg-white shadow-md"
        />
        <input
          type="text"
          name="registrationNumber"
          placeholder="Registration Number"
          value={formData.registrationNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3 bg-white shadow-md"
        />

        <button 
          onClick={handleRegisterSociety} 
          className="w-full bg-[#800000] text-white py-2 rounded hover:bg-[#590000] transition shadow-md"
        >
          Register Society
        </button>
      </div>
    </div>
  );
}
