"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SocietyRegister() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactInfo: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    setMessage("");

    if (!formData.name || !formData.address || !formData.contactInfo) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch("/api/society/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Society registered successfully!");
        setTimeout(() => router.push("/dashboard/admin"), 2000);
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

        {/* Society Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Society Name"
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        {/* Society Address */}
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Society Address"
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        {/* Society Contact Info */}
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Contact Info"
          className="w-full p-2 border border-gray-300 rounded mb-3 text-black bg-white shadow-md"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-[#800000] text-white py-2 rounded hover:bg-[#590000] transition shadow-md"
        >
          Register
        </button>
      </div>
    </div>
  );
}
