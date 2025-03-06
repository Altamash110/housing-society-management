export default function CommitteeDashboard() {
  // Notices Data
  const notices = [
    { id: 1, title: 'Annual Meeting', date: '2025-04-10', status: 'Upcoming' },
    { id: 2, title: 'Security Policy Update', date: '2025-03-25', status: 'Active' },
  ];

  // Voting Polls Data
  const polls = [
    { id: 1, question: 'Should we install CCTV cameras?', status: 'Open' },
    { id: 2, question: 'Increase maintenance charges?', status: 'Closed' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#D32F2F] text-center">Committee Dashboard</h1>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        
        {/* Event Management */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Event Management</h2>
          <p className="text-gray-600">Create and manage society events.</p>
        </div>

        {/* Society Rules */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Society Rules & Policies</h2>
          <p className="text-gray-600">View and update society regulations.</p>
        </div>

        {/* Maintenance Requests */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Maintenance Requests</h2>
          <p className="text-gray-600">Approve or reject resident maintenance requests.</p>
        </div>

        {/* Voting & Polls */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Voting & Polls</h2>
          <p className="text-gray-600">Monitor and manage society votes.</p>
        </div>

      </div>

      {/* Notices Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Notices</h2>
        <ul className="list-disc pl-4 mt-2">
          {notices.map((notice) => (
            <li key={notice.id} className="py-1">
              <strong>{notice.title}</strong> - {notice.date} 
              <span className={`ml-2 px-2 py-1 rounded text-xs ${
                notice.status === 'Upcoming' ? 'bg-yellow-300' : 'bg-green-300'
              }`}>
                {notice.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Polls Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Voting Polls</h2>
        <ul className="list-disc pl-4 mt-2">
          {polls.map((poll) => (
            <li key={poll.id} className="py-1">
              <strong>{poll.question}</strong>
              <span className={`ml-2 px-2 py-1 rounded text-xs ${
                poll.status === 'Open' ? 'bg-blue-300' : 'bg-gray-300'
              }`}>
                {poll.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
