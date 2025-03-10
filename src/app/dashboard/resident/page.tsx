"use client";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function ResidentDashboard() {
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

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-[#800000] text-center">
            Resident Dashboard
          </h1>

          {/* Grid Layout for Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Flat Details */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-[#800000]">
                Flat Details
              </h2>
              <p className="text-gray-900">View assigned flat details & owner info.</p>
            </div>

            {/* Maintenance Bills */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-[#800000]">
                Maintenance Payments
              </h2>
              <ul className="mt-3 space-y-2">
                {maintenanceBills.map((bill) => (
                  <li
                    key={bill.id}
                    className="flex justify-between border-b pb-2 text-gray-900"
                  >
                    <span>{bill.month} - {bill.amount}</span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded ${
                      bill.status === "Unpaid" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                    }`}>
                      {bill.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Complaints */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-[#800000]">
                Complaints & Issues
              </h2>
              <ul className="mt-3 space-y-2">
                {complaints.map((complaint) => (
                  <li
                    key={complaint.id}
                    className="flex justify-between border-b pb-2 text-gray-900"
                  >
                    <span>{complaint.category}</span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded ${
                      complaint.status === "Pending" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
                    }`}>
                      {complaint.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notices */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-[#800000]">
                Notices
              </h2>
              <ul className="mt-3 space-y-2 text-gray-900">
                {notices.map((notice) => (
                  <li key={notice.id} className="border-b pb-2">
                    <strong>{notice.title}</strong> - <span className="text-gray-600">{notice.date}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
