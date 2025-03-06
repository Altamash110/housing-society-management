// src/components/DashboardLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>
      </div>
      {/* Footer */}
      <footer className="text-center py-3 bg-gray-200">
        © 2025 Housing Society Management
      </footer>
    </div>
  );
}
