import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const visitors = [
  { id: 1, name: "John Doe", purpose: "Delivery", entryTime: "10:30 AM", exitTime: "Pending" },
  { id: 2, name: "Alice Smith", purpose: "Guest", entryTime: "09:15 AM", exitTime: "11:45 AM" },
];

const emergencyAlerts = [
  { id: 1, type: "Fire", raisedBy: "Flat 302", status: "Resolved" },
  { id: 2, type: "Medical", raisedBy: "Flat 105", status: "Active" },
];

const shiftTimings = { start: "8:00 AM", end: "8:00 PM" };

export default function SecurityDashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Security Dashboard</h1>

        {/* Visitor Entry Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Visitor Log</h2>
          <ul>
            {visitors.map((visitor) => (
              <li key={visitor.id} className="p-3 border-b flex justify-between">
                <span>{visitor.name} - {visitor.purpose} (Entry: {visitor.entryTime})</span>
                <span className={`px-2 py-1 rounded text-white ${
                  visitor.exitTime === "Pending" ? "bg-yellow-500" : "bg-green-500"
                }`}>
                  {visitor.exitTime}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register New Visitor
          </button>
        </div>

        {/* Emergency Alerts Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Emergency Alerts</h2>
          <ul>
            {emergencyAlerts.map((alert) => (
              <li key={alert.id} className="p-3 border-b flex justify-between">
                <span>{alert.type} - Raised by {alert.raisedBy}</span>
                <span className={`px-2 py-1 rounded text-white ${
                  alert.status === "Active" ? "bg-red-500" : "bg-green-500"
                }`}>
                  {alert.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Shift Timings Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Shift Timings</h2>
          <p>Start Time: <span className="font-semibold">{shiftTimings.start}</span></p>
          <p>End Time: <span className="font-semibold">{shiftTimings.end}</span></p>
        </div>
      </div>
    </DashboardLayout>
  );
}
