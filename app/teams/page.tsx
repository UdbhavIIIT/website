"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CreateTeamForm from "@/components/CreateTeamForm";
import JoinTeamForm from "@/components/JoinTeamForm";
import TeamDashboard from "@/components/TeamDashboard";

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

export default function TeamManagement() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [hasTeam, setHasTeam] = useState(false);
  const [isLeader, setIsLeader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"create" | "join">("create");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
      return;
    }

    if (status === "authenticated") {
      fetchTeamData();
    }
  }, [status, router]);

  const fetchTeamData = async () => {
    try {
      const response = await fetch("/api/teams");
      const data = await response.json();

      if (data.success) {
        setHasTeam(data.hasTeam);
        setIsLeader(data.isLeader || false);
        setTeamData(data.team || null);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const handleTeamAction = (team: TeamData) => {
    setTeamData(team);
    setHasTeam(true);
    fetchTeamData(); // Refresh data
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Team Management
          </h1>
          <p className="text-gray-600">
            Create or join a team to participate in events
          </p>
        </div>

        {hasTeam && teamData ? (
          // Show team dashboard if user has a team
          <TeamDashboard team={teamData} isLeader={isLeader} />
        ) : (
          // Show create/join forms if user doesn't have a team
          <div className="max-w-2xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab("create")}
                className={`flex-1 py-3 px-4 text-center font-medium rounded-l-lg border-2 ${
                  activeTab === "create"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Create Team
              </button>
              <button
                onClick={() => setActiveTab("join")}
                className={`flex-1 py-3 px-4 text-center font-medium rounded-r-lg border-2 border-l-0 ${
                  activeTab === "join"
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Join Team
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-lg p-1">
              {activeTab === "create" ? (
                <CreateTeamForm onSuccess={handleTeamAction} />
              ) : (
                <JoinTeamForm onSuccess={handleTeamAction} />
              )}
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                How it works:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">Creating a Team:</h4>
                  <ul className="space-y-1">
                    <li>• Set your team name and details</li>
                    <li>• Get a unique 6-character team code</li>
                    <li>• Share the code with teammates</li>
                    <li>• Manage your team members</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Joining a Team:</h4>
                  <ul className="space-y-1">
                    <li>• Get team code from team leader</li>
                    <li>• Enter the 6-character code</li>
                    <li>• Join instantly if space available</li>
                    <li>• Collaborate with teammates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
