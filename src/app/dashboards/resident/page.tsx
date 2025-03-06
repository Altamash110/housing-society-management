import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const maintenanceBills = [
  { id: 1, month: "March 2025", amount: "₹2,500", status: "Paid" },
  { id: 2, month: "April 2025", amount: "₹2,500", status: "Unpaid" },
];

const complaints = [
  { id: 1, category: "Plumbing", status: "Resolved" },
  { id: 2, category: "Electricity", status: "Pending" },
];

const notices = [
  { id: 1, title: "Water Supply Maintenance", date: "2025-03-15" },
  { id: 2, title: "Festival Celebration Meeting", date: "2025-04-05" },
];

export default function ResidentDashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Resident Dashboard</h1>

        {/* Maintenance Bills Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Maintenance Bills</h2>
          <ul>
            {maintenanceBills.map((bill) => (
              <li key={bill.id} className="p-3 border-b flex justify-between">
                <span>{bill.month} - {bill.amount}</span>
                <span className={`px-2 py-1 rounded text-white ${
                  bill.status === "Paid" ? "bg-green-500" : "bg-red-500"
                }`}>
                  {bill.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Complaints Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Complaint Status</h2>
          <ul>
            {complaints.map((complaint) => (
              <li key={complaint.id} className="p-3 border-b flex justify-between">
                <span>{complaint.category}</span>
                <span className={`px-2 py-1 rounded text-white ${
                  complaint.status === "Resolved" ? "bg-green-500" : "bg-yellow-500"
                }`}>
                  {complaint.status}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register New Complaint
          </button>
        </div>

        {/* Notices & Events Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Notices & Events</h2>
          <ul>
            {notices.map((notice) => (
              <li key={notice.id} className="p-3 border-b">
                {notice.title} - {notice.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
