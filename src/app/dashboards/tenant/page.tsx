import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

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

export default function TenantDashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Tenant Dashboard</h1>

        {/* Rental Payment Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Rental Payments</h2>
          <ul>
            {rentalPayments.map((payment) => (
              <li key={payment.id} className="p-3 border-b flex justify-between">
                <span>{payment.month} - {payment.amount}</span>
                <span className={`px-2 py-1 rounded text-white ${
                  payment.status === "Paid" ? "bg-green-500" : "bg-red-500"
                }`}>
                  {payment.status}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Pay Rent
          </button>
        </div>

        {/* Notices & Events Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Notices & Events</h2>
          <ul>
            {notices.map((notice) => (
              <li key={notice.id} className="p-3 border-b">
                {notice.title} - {notice.date}
              </li>
            ))}
          </ul>
        </div>

        {/* Lease Agreement Details */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Lease Agreement</h2>
          <p>Start Date: <span className="font-semibold">{leaseDetails.startDate}</span></p>
          <p>End Date: <span className="font-semibold">{leaseDetails.endDate}</span></p>
          <p>Landlord: <span className="font-semibold">{leaseDetails.landlord}</span></p>
        </div>
      </div>
    </DashboardLayout>
  );
}
