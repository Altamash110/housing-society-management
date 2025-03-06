// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">Housing Society</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard/admin">
                <span className="hover:underline cursor-pointer">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <span className="hover:underline cursor-pointer">Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <span className="hover:underline cursor-pointer">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
