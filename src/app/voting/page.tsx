import { useState } from "react";

export default function Voting() {
  const [polls, setPolls] = useState([
    { id: 1, question: "Should we install CCTV cameras?", options: ["Yes", "No"], votes: [35, 15], status: "Active" },
    { id: 2, question: "Increase maintenance charges?", options: ["Yes", "No"], votes: [20, 30], status: "Closed" },
  ]);

  const handleVote = (pollId: number, optionIndex: number) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? { ...poll, votes: poll.votes.map((v, i) => (i === optionIndex ? v + 1 : v)) }
          : poll
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#D32F2F] text-center">Society Voting & Polls</h1>

      {/* Active Polls */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Active Polls</h2>
        {polls
          .filter((poll) => poll.status === "Active")
          .map((poll) => (
            <div key={poll.id} className="mt-4 border-t pt-4">
              <p className="font-medium">{poll.question}</p>
              <div className="mt-2 space-y-2">
                {poll.options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full p-2 bg-gray-100 rounded hover:bg-gray-200"
                    onClick={() => handleVote(poll.id, index)}
                  >
                    {option} ({poll.votes[index]} votes)
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Create New Poll (For Committee Members) */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Create a New Poll</h2>
        <p className="text-gray-600">Committee members can create polls.</p>
        <button className="mt-4 w-full bg-[#D32F2F] text-white p-2 rounded hover:bg-red-700">
          Create Poll
        </button>
      </div>

      {/* Voting History */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold">Voting History</h2>
        <ul className="mt-2 space-y-2">
          {polls
            .filter((poll) => poll.status === "Closed")
            .map((poll) => (
              <li key={poll.id} className="border p-2 rounded">
                <p className="font-medium">{poll.question}</p>
                <p className="text-gray-600">Results: {poll.options[0]} ({poll.votes[0]} votes), {poll.options[1]} ({poll.votes[1]} votes)</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
