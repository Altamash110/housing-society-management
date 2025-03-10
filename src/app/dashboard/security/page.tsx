"use client";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function SecurityDashboard() {
  const visitors = [
    { id: 1, name: "John Doe", purpose: "Delivery", entryTime: "10:30 AM", exitTime: "Pending" },
    { id: 2, name: "Alice Smith", purpose: "Guest", entryTime: "09:15 AM", exitTime: "11:45 AM" },
  ];

  const emergencyAlerts = [
    { id: 1, type: "Fire", raisedBy: "Flat 302", status: "Resolved" },
    { id: 2, type: "Medical", raisedBy: "Flat 105", status: "Active" },
  ];

  const shiftTimings = { start: "8:00 AM", end: "8:00 PM" };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-[#800000] text-center">Security Dashboard</h1>

          {/* Shift Timing */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-4 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Shift Timings</h2>
            <p className="text-gray-700">Shift: {shiftTimings.start} - {shiftTimings.end}</p>
          </div>

          {/* Visitor Logs */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-6 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Visitor Logs</h2>
            <table className="w-full border-collapse border border-gray-400 mt-2 shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Purpose</th>
                  <th className="border p-2">Entry Time</th>
                  <th className="border p-2">Exit Time</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor) => (
                  <tr key={visitor.id} className="text-center text-gray-800">
                    <td className="border p-2">{visitor.name}</td>
                    <td className="border p-2">{visitor.purpose}</td>
                    <td className="border p-2">{visitor.entryTime}</td>
                    <td className={`border p-2 font-semibold ${
                      visitor.exitTime === "Pending" ? "text-red-500" : "text-green-500"
                    }`}>
                      {visitor.exitTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Emergency Alerts */}
          <div className="bg-white p-4 rounded-lg shadow-lg mt-6 border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800">Emergency Alerts</h2>
            <table className="w-full border-collapse border border-gray-400 mt-2 shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="border p-2">Type</th>
                  <th className="border p-2">Raised By</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {emergencyAlerts.map((alert) => (
                  <tr key={alert.id} className="text-center text-gray-800">
                    <td className="border p-2">{alert.type}</td>
                    <td className="border p-2">{alert.raisedBy}</td>
                    <td className={`border p-2 font-semibold ${
                      alert.status === "Active" ? "bg-red-300" : "bg-green-300"
                    }`}>
                      {alert.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
