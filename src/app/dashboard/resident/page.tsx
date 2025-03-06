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
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#D32F2F] text-center">Resident Dashboard</h1>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        
        {/* Flat Details */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Flat Details</h2>
          <p className="text-gray-600">View assigned flat details & owner info.</p>
        </div>

        {/* Maintenance Bills */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Maintenance Payments</h2>
          <ul className="mt-2">
            {maintenanceBills.map((bill) => (
              <li key={bill.id} className="py-1 flex justify-between">
                <span>{bill.month} - {bill.amount}</span>
                <span className={`px-2 py-1 text-xs rounded ${
                  bill.status === "Unpaid" ? "bg-red-300" : "bg-green-300"
                }`}>
                  {bill.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Complaints */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Complaints & Issues</h2>
          <ul className="mt-2">
            {complaints.map((complaint) => (
              <li key={complaint.id} className="py-1 flex justify-between">
                <span>{complaint.category}</span>
                <span className={`px-2 py-1 text-xs rounded ${
                  complaint.status === "Pending" ? "bg-yellow-300" : "bg-green-300"
                }`}>
                  {complaint.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notices */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Notices</h2>
          <ul className="mt-2">
            {notices.map((notice) => (
              <li key={notice.id} className="py-1">
                <strong>{notice.title}</strong> - {notice.date}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
