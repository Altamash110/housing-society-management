import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";



export default function AdminDashboard() {
  // Sample data for residents & tenants
  const residents = [
    { id: 1, name: 'John Doe', flat: 'A-101', billStatus: 'Paid' },
    { id: 2, name: 'Jane Smith', flat: 'B-202', billStatus: 'Unpaid' },
  ];

  const tenants = [
    { id: 1, name: 'Tenant One', flat: 'C-303', billStatus: 'Paid' },
    { id: 2, name: 'Tenant Two', flat: 'D-404', billStatus: 'Pending' },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#D32F2F] text-center">Admin Dashboard</h1>

          {/* Residents & Tenants Table */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-lg font-semibold mb-4 text-black">Residents & Tenants</h2>
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#D32F2F] text-white">
                  <th className="border border-gray-300 p-3">Name</th>
                  <th className="border border-gray-300 p-3">Flat</th>
                  <th className="border border-gray-300 p-3">Bill Status</th>
                </tr>
              </thead>
              <tbody>
                {residents.map((resident) => (
                  <tr key={resident.id} className="text-center text-black bg-gray-50 hover:bg-gray-200 transition">
                    <td className="border border-gray-300 p-3">{resident.name}</td>
                    <td className="border border-gray-300 p-3">{resident.flat}</td>
                    <td className={`border border-gray-300 p-3 font-semibold ${
                        resident.billStatus === 'Unpaid' ? 'text-red-500' : 'text-green-500'
                      }`}>
                      {resident.billStatus}
                    </td>
                  </tr>
                ))}
                {tenants.map((tenant) => (
                  <tr key={tenant.id} className="text-center text-black bg-gray-50 hover:bg-gray-200 transition">
                    <td className="border border-gray-300 p-3">{tenant.name}</td>
                    <td className="border border-gray-300 p-3">{tenant.flat}</td>
                    <td className={`border border-gray-300 p-3 font-semibold ${
                        tenant.billStatus === 'Pending' ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                      {tenant.billStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
