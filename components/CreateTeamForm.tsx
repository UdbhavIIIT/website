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

interface CreateTeamFormProps {
  onSuccess?: (team: TeamData) => void;
}

export default function CreateTeamForm({ onSuccess }: CreateTeamFormProps) {
  const [formData, setFormData] = useState({
    teamName: "",
    clubName: "",
    maxMembers: 3,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/teams/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        if (onSuccess) {
          onSuccess(data.team);
        }
        alert(
          `Team created successfully! Your team code is: ${data.team.teamCode}. Share this code with your teammates.`
        );
        router.refresh();
      } else {
        setError(data.error || "Failed to create team");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "maxMembers" ? parseInt(value) : value,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Create Your Team
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="teamName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Team Name *
          </label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={50}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your team name"
          />
        </div>

        <div>
          <label
            htmlFor="clubName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Club Name (Optional)
          </label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter club name if any"
          />
        </div>

        <div>
          <label
            htmlFor="maxMembers"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Maximum Members
          </label>
          <select
            id="maxMembers"
            name="maxMembers"
            value={formData.maxMembers}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[2, 3].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading || !formData.teamName.trim()}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Team..." : "Create Team"}
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>
          After creating your team, you&apos;ll receive a unique team code to
          share with your teammates.
        </p>
      </div>
    </div>
  );
}
