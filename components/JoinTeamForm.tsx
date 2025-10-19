"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface TeamData {
  id: string;
  name: string;
  teamCode: string;
  clubName: string | null;
  points: number;
  maxMembers: number;
  isActive: boolean;
  memberCount: number;
  members: {
    id: string;
    name: string | null;
    email: string;
    isTeamLeader: boolean;
    batch: string | null;
    phone_number: string | null;
  }[];
  creator: {
    id: string;
    name: string | null;
    email: string;
  };
  createdAt: string;
}

interface JoinTeamFormProps {
  onSuccess?: (team: TeamData) => void;
}

export default function JoinTeamForm({ onSuccess }: JoinTeamFormProps) {
  const [teamCode, setTeamCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/teams/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teamCode: teamCode.toUpperCase() }),
      });

      const data = await response.json();

      if (data.success) {
        if (onSuccess) {
          onSuccess(data.team);
        }
        alert(`Successfully joined team "${data.team.name}"!`);
        router.refresh();
      } else {
        setError(data.error || "Failed to join team");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (value.length <= 6) {
      setTeamCode(value);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Join a Team
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="teamCode"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Team Code *
          </label>
          <input
            type="text"
            id="teamCode"
            value={teamCode}
            onChange={handleCodeChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-center text-lg font-mono tracking-wider"
            placeholder="XXXXXX"
            maxLength={6}
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter the 6-character team code shared by your team leader
          </p>
        </div>

        <button
          type="submit"
          disabled={loading || teamCode.length !== 6}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Joining Team..." : "Join Team"}
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Ask your team leader for the team code to join their team.</p>
      </div>
    </div>
  );
}
