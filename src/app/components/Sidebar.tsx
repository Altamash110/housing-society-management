// src/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
      <nav>
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard/admin">
              <a className="block p-2 rounded hover:bg-gray-200">Admin Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/resident">
              <a className="block p-2 rounded hover:bg-gray-200">Resident Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/tenant">
              <a className="block p-2 rounded hover:bg-gray-200">Tenant Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/security">
              <a className="block p-2 rounded hover:bg-gray-200">Security Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/committee">
              <a className="block p-2 rounded hover:bg-gray-200">Committee Dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
