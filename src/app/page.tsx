import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Housing Society Management</h1>
      <p className="text-lg text-gray-600 mb-6">Select a Dashboard:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/dashboard/admin" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Admin Dashboard
        </Link>
        <Link href="/dashboard/resident" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Resident Dashboard
        </Link>
        <Link href="/dashboard/tenant" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700">
          Tenant Dashboard
        </Link>
        <Link href="/dashboard/security" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
          Security Dashboard
        </Link>
        <Link href="/dashboard/committee" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
          Committee Dashboard
        </Link>
      </div>
    </div>
  );
}
