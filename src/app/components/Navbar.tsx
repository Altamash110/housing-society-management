"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false; // Change based on authentication logic

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Full-width Navbar with Darker Red */}
      <header className="bg-[#800000] text-white shadow-md w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            HomeHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/dashboard/admin" className="hover:text-gray-300 transition">
              Dashboard
            </Link>
            <Link href="/profile" className="hover:text-gray-300 transition">
              Profile
            </Link>
            {isAuthenticated ? (
              <Link href="/logout" className="hover:text-gray-300 transition">
                Logout
              </Link>
            ) : (
              <Link href="/auth/signin" className="hover:text-gray-300 transition">
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`fixed top-0 right-0 w-64 bg-[#800000] p-6 transform transition-transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col space-y-4 mt-6">
              <Link href="/dashboard/admin" className="hover:text-gray-300 transition">
                Dashboard
              </Link>
              <Link href="/profile" className="hover:text-gray-300 transition">
                Profile
              </Link>
              {isAuthenticated ? (
                <Link href="/logout" className="hover:text-gray-300 transition">
                  Logout
                </Link>
              ) : (
                <Link href="/auth/signin" className="hover:text-gray-300 transition">
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
