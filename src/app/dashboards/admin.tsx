// Example for Next.js App Router: app/dashboard/admin.tsx
import React from 'react';
import Head from 'next/head';

// Optionally, if you have a dedicated dashboard layout,
// you can import it. Otherwise, use your global layout.
import DashboardLayout from '../components/DashboardLayout';

const residents = [
  { id: 1, name: 'John Doe', flat: 'A-101', billStatus: 'Paid' },
  { id: 2, name: 'Jane Smith', flat: 'B-202', billStatus: 'Unpaid' },
  // Add more resident data as needed
];

const tenants = [
  { id: 1, name: 'Tenant One', flat: 'C-303', billStatus: 'Paid' },
  { id: 2, name: 'Tenant Two', flat: 'D-404', billStatus: 'Pending' },
  // Add more tenant data as needed
];

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | Housing Society Management</title>
      </Head>
      <DashboardLayout>
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          {/* Residents and Tenants Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Residents Table */}
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Residents</h2>
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Flat</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bill Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {residents.map((resident) => (
                    <tr key={resident.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{resident.name}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{resident.flat}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{resident.billStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Tenants Table */}
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Tenants</h2>
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Flat</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bill Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tenants.map((tenant) => (
                    <tr key={tenant.id}>
                      <td className="px-4 py-2 text-sm text-gray-900">{tenant.name}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{tenant.flat}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{tenant.billStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Generate Reports
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                View Committee Members
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Notices
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                Create Voting Poll
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
