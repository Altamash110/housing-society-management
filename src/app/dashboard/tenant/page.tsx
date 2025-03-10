"use client";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function TenantDashboard() {
  const rentalPayments = [
    { id: 1, month: "March 2025", amount: "₹12,000", status: "Paid" },
    { id: 2, month: "April 2025", amount: "₹12,000", status: "Pending" },
  ];

  const notices = [
    { id: 1, title: "Water Supply Maintenance", date: "2025-03-20" },
    { id: 2, title: "Community Festival", date: "2025-04-10" },
  ];

  const leaseDetails = {
    startDate: "2024-01-01",
    endDate: "2026-01-01",
    landlord: "Mr. Sharma",
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] text-center">Tenant Dashboard</h1>

          {/* Lease Information */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-4 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Lease Details</h2>
            <p className="text-gray-700">Landlord: {leaseDetails.landlord}</p>
            <p className="text-gray-700">
              Lease Period: {leaseDetails.startDate} - {leaseDetails.endDate}
            </p>
          </div>

          {/* Rental Payments */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-6 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Rental Payments</h2>
            <table className="w-full border-collapse border border-gray-400 mt-2 shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="border p-2">Month</th>
                  <th className="border p-2">Amount</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {rentalPayments.map((payment) => (
                  <tr key={payment.id} className="text-center text-gray-800">
                    <td className="border p-2">{payment.month}</td>
                    <td className="border p-2">{payment.amount}</td>
                    <td className={`border p-2 font-semibold ${
                      payment.status === "Pending" ? "text-yellow-500" : "text-green-500"
                    }`}>
                      {payment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Maintenance Requests */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-6 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Maintenance Requests</h2>
            <p className="text-gray-700">
              Submit requests for plumbing, electrical, or cleaning issues.
            </p>
          </div>

          {/* Notices Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-6 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Notices</h2>
            <ul className="list-disc pl-4 mt-2 text-gray-700">
              {notices.map((notice) => (
                <li key={notice.id} className="py-1">
                  <strong>{notice.title}</strong> - {notice.date}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
