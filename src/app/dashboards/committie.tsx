import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const notices = [
  { id: 1, title: 'Annual Meeting', date: '2025-04-10', status: 'Upcoming' },
  { id: 2, title: 'Security Policy Update', date: '2025-03-25', status: 'Active' },
];

const polls = [
  { id: 1, question: 'Should we install CCTV cameras?', status: 'Open' },
  { id: 2, question: 'Increase maintenance charges?', status: 'Closed' },
];

export default function CommitteeDashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Committee Dashboard</h1>

        {/* Notices & Events Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Notices & Events</h2>
          <ul>
            {notices.map((notice) => (
              <li key={notice.id} className="p-3 border-b flex justify-between">
                <span>{notice.title} - {notice.date}</span>
                <span className={`px-2 py-1 rounded text-white ${
                  notice.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                }`}>
                  {notice.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Voting Polls Section */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Voting Polls</h2>
          <ul>
            {polls.map((poll) => (
              <li key={poll.id} className="p-3 border-b flex justify-between">
                <span>{poll.question}</span>
                <span className={`px-2 py-1 rounded text-white ${
                  poll.status === 'Open' ? 'bg-blue-500' : 'bg-gray-500'
                }`}>
                  {poll.status}
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create New Poll
          </button>
        </div>

        {/* Society Rules Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Society Rules & Policies</h2>
          <ul>
            <li className="p-3 border-b">No loud music after 10 PM</li>
            <li className="p-3 border-b">Parking rules strictly enforced</li>
            <li className="p-3 border-b">Maintenance charges due by 5th of every month</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
