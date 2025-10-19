import Link from "next/link";
import { auth } from "@/lib/auth";
import Navigation from "@/components/Navigation";
import { getUserData } from "@/lib/actions";

export default async function Home() {
  const session = await auth();
  const userData = session?.user?.id ? await getUserData() : null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to IIIT Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with your fellow IIIT students, create teams, and
            participate in amazing events and competitions.
          </p>

          {session?.user ? (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Hello, {session.user.name || session.user.email}!
                </h2>
                <p className="text-gray-600 mb-4">
                  You&apos;re successfully logged in with your IIIT account.
                </p>

                {userData?.teamId ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">
                        You&apos;re part of a team
                      </span>
                      {userData.isTeamLeader && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Leader
                        </span>
                      )}
                    </div>
                    <Link
                      href="/teams"
                      className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Team Dashboard
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-gray-500 text-sm">
                      You haven&apos;t joined or created a team yet
                    </p>
                    <Link
                      href="/teams"
                      className="block w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Create or Join Team
                    </Link>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Team Management
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Create teams, invite members using team codes, and
                    collaborate effectively.
                  </p>
                  <Link
                    href="/teams"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Manage Teams →
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Events
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Participate in hackathons, competitions, and other exciting
                    events.
                  </p>
                  <span className="text-gray-400 text-sm">Coming Soon</span>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Projects
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Showcase your projects and collaborate with other students.
                  </p>
                  <span className="text-gray-400 text-sm">Coming Soon</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Get Started
                </h2>
                <p className="text-gray-600 mb-6">
                  Sign in with your IIIT email to access team management and
                  events.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/auth/signin"
                    className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
