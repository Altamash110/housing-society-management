export default function Reports() {
    // Sample Data for Reports
    const maintenanceReports = [
      { id: 1, month: "March 2025", expenses: "₹50,000", collected: "₹80,000" },
      { id: 2, month: "April 2025", expenses: "₹45,000", collected: "₹78,000" },
    ];
  
    const complaintReports = [
      { id: 1, category: "Plumbing", resolved: 12, pending: 3 },
      { id: 2, category: "Electricity", resolved: 8, pending: 5 },
    ];
  
    const visitorLogs = [
      { id: 1, date: "2025-03-25", visitors: 120 },
      { id: 2, date: "2025-03-26", visitors: 90 },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#D32F2F] text-center">Reports & Analytics</h1>
  
        {/* Maintenance Reports */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Maintenance Reports</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Month</th>
                <th className="border p-2">Expenses</th>
                <th className="border p-2">Amount Collected</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceReports.map((report) => (
                <tr key={report.id} className="text-center">
                  <td className="border p-2">{report.month}</td>
                  <td className="border p-2">{report.expenses}</td>
                  <td className="border p-2 text-green-500">{report.collected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Complaints Reports */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Complaints & Resolutions</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Category</th>
                <th className="border p-2">Resolved</th>
                <th className="border p-2">Pending</th>
              </tr>
            </thead>
            <tbody>
              {complaintReports.map((report) => (
                <tr key={report.id} className="text-center">
                  <td className="border p-2">{report.category}</td>
                  <td className="border p-2 text-green-500">{report.resolved}</td>
                  <td className="border p-2 text-red-500">{report.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Security Logs */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Visitor & Security Logs</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Date</th>
                <th className="border p-2">Total Visitors</th>
              </tr>
            </thead>
            <tbody>
              {visitorLogs.map((log) => (
                <tr key={log.id} className="text-center">
                  <td className="border p-2">{log.date}</td>
                  <td className="border p-2">{log.visitors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Financial Reports */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold">Financial Reports</h2>
          <p className="text-gray-600">Admin-only access to financial summaries and account balances.</p>
        </div>
  
      </div>
    );
  }
  