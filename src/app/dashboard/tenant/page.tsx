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
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#D32F2F] text-center">Tenant Dashboard</h1>

      {/* Lease Information */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-lg font-semibold">Lease Details</h2>
        <p className="text-gray-600">Landlord: {leaseDetails.landlord}</p>
        <p className="text-gray-600">Lease Period: {leaseDetails.startDate} - {leaseDetails.endDate}</p>
      </div>

      {/* Rental Payments */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Rental Payments</h2>
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Month</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rentalPayments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border p-2">{payment.month}</td>
                <td className="border p-2">{payment.amount}</td>
                <td className={`border p-2 ${payment.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Maintenance Requests */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Maintenance Requests</h2>
        <p className="text-gray-600">Submit requests for plumbing, electrical, or cleaning issues.</p>
      </div>

      {/* Notices Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Notices</h2>
        <ul className="list-disc pl-4 mt-2">
          {notices.map((notice) => (
            <li key={notice.id} className="py-1">
              <strong>{notice.title}</strong> - {notice.date}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
