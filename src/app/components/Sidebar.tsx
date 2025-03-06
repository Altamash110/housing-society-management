"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // Icons for better UX

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 bg-[#800000] text-white p-2 rounded shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay (closes sidebar when clicked outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container (Starts Below Navbar) */}
      <aside
        className={`bg-[#800000] text-white w-64 min-h-screen fixed top-16 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button (only visible on mobile) */}
        <button
          className="md:hidden absolute top-4 right-4 text-white p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Sidebar Menu */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard/admin"
                className="block py-2 hover:bg-[#590000] rounded px-2"
              >
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/resident"
                className="block py-2 hover:bg-[#590000] rounded px-2"
              >
                Resident Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/tenant"
                className="block py-2 hover:bg-[#590000] rounded px-2"
              >
                Tenant Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/security"
                className="block py-2 hover:bg-[#590000] rounded px-2"
              >
                Security Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
