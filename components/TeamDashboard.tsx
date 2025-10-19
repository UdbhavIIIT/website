"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface TeamMember {
  id: string;
  name: string | null;
  email: string;
  isTeamLeader: boolean;
  batch: string | null;
  phone_number: string | null;
}

interface TeamData {
  id: string;
  name: string;
  teamCode: string;
  clubName: string | null;
  points: number;
  maxMembers: number;
  isActive: boolean;
  memberCount: number;
  members: TeamMember[];
  creator: {
    id: string;
    name: string | null;
    email: string;
  };
  createdAt: string;
}

interface TeamDashboardProps {
  team: TeamData;
  isLeader: boolean;
}

export default function TeamDashboard({ team, isLeader }: TeamDashboardProps) {
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const router = useRouter();

  const handleLeaveTeam = async () => {
    if (
      !confirm(
        isLeader
          ? "Are you sure you want to delete this team? This action cannot be undone and will remove all members."
          : "Are you sure you want to leave this team?"
      )
    ) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/teams", {
        method: "DELETE",
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        router.push("/");
      } else {
        alert(data.error || "Failed to process request");
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const copyTeamCode = () => {
    navigator.clipboard.writeText(team.teamCode);
    alert("Team code copied to clipboard!");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{team.name}</h2>
          {team.clubName && (
            <p className="text-lg text-gray-600 mt-1">{team.clubName}</p>
          )}
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500">
              Created on {formatDate(team.createdAt)}
            </span>
            {isLeader && (
              <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Team Leader
              </span>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{team.points}</div>
          <div className="text-sm text-gray-500">Points</div>
        </div>
      </div>

      {/* Team Code Section */}
      {isLeader && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Team Code</h3>
              <p className="text-sm text-gray-600">
                Share this code with your teammates
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`text-2xl font-mono tracking-wider px-4 py-2 rounded border-2 border-dashed ${
                  showCode
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-300 bg-gray-100"
                }`}
              >
                {showCode ? team.teamCode : "••••••"}
              </div>
              <button
                onClick={() => setShowCode(!showCode)}
                className="px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
              >
                {showCode ? "Hide" : "Show"}
              </button>
              {showCode && (
                <button
                  onClick={copyTeamCode}
                  className="px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded"
                >
                  Copy
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Team Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-800">
            {team.memberCount || 0}
          </div>
          <div className="text-sm text-gray-600">Members</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-800">
            {team.maxMembers || 0}
          </div>
          <div className="text-sm text-gray-600">Max Size</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-800">
            {(team.maxMembers || 0) - (team.memberCount || 0)}
          </div>
          <div className="text-sm text-gray-600">Slots Left</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div
            className={`text-2xl font-bold ${
              team.isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {team.isActive ? "Active" : "Inactive"}
          </div>
          <div className="text-sm text-gray-600">Status</div>
        </div>
      </div>

      {/* Team Members */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Team Members
        </h3>
        <div className="space-y-3">
          {team.members && team.members.length > 0 ? (
            team.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                      member.isTeamLeader ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  >
                    {member.name?.[0]?.toUpperCase() ||
                      member.email[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {member.name || "No Name"}
                      {member.isTeamLeader && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Leader
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{member.email}</div>
                    {member.batch && (
                      <div className="text-xs text-gray-500">
                        Batch: {member.batch}
                      </div>
                    )}
                  </div>
                </div>
                {member.phone_number && (
                  <div className="text-sm text-gray-600">
                    {member.phone_number}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">No team members yet</p>
              <p className="text-sm">
                Invite members using the team code above
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleLeaveTeam}
          disabled={loading}
          className={`px-6 py-2 rounded-md font-medium ${
            isLeader
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          } disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          {loading ? "Processing..." : isLeader ? "Delete Team" : "Leave Team"}
        </button>
      </div>
    </div>
  );
}
