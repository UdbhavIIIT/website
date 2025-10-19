import Link from "next/link";
import { auth } from "@/lib/auth";
import Navigation from "@/components/Navigation";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen relative">
      {/* Retro Grid Floor Background */}
      <div className="retro-grid-floor"></div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full floating-particle opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-neon-magenta rounded-full floating-particle opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-2 h-2 bg-neon-yellow rounded-full floating-particle opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-2 h-2 bg-neon-orange rounded-full floating-particle opacity-70"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block mb-6 px-6 py-2 border-2 border-neon-magenta rounded-sm">
              <h2 className="text-neon-magenta font-pixel text-sm uppercase tracking-wider">
                HACKATHON
              </h2>
            </div>

            <h1 className="text-7xl font-pixel text-neon-cyan text-glow-cyan mb-6 leading-tight">
              RETROHACK
            </h1>

            <div className="text-5xl font-pixel text-neon-magenta text-glow-magenta mb-8">
              2025
            </div>

            <div className="text-foreground font-retro text-2xl mb-6">
              &gt; CODE LIKE IT'S 1989_
            </div>

            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Step into the time machine. Build the future with retro vibes.
              Join the most nostalgic hackathon experience of the year.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6 justify-center items-center">
              <Link
                href="/auth/signup"
                className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300 font-retro text-xl uppercase tracking-wider neon-border-cyan"
              >
                ✦ REGISTER NOW
              </Link>

              <Link
                href="/auth/signin"
                className="px-8 py-4 bg-transparent border-2 border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background transition-all duration-300 font-retro text-xl uppercase tracking-wider neon-border-magenta"
              >
                ⚡ LOGIN
              </Link>
            </div>
          </div>

          {session?.user ? (
            <div className="space-y-8 mt-16">
              <div className="bg-card border-2 border-primary p-8 max-w-2xl mx-auto neon-border-cyan">
                <h2 className="text-3xl font-pixel text-neon-cyan mb-4">
                  WELCOME BACK
                </h2>
                <p className="text-foreground font-retro text-xl mb-2">
                  &gt; {session.user.name || session.user.email}
                </p>
                <p className="text-muted-foreground mb-6">
                  System online. All systems operational.
                </p>

                {session.user.teamId ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3 text-neon-cyan">
                      <span className="text-2xl">✓</span>
                      <span className="font-retro text-xl">TEAM ASSIGNED</span>
                      {session.user.isTeamLeader && (
                        <span className="px-3 py-1 bg-neon-magenta/20 border border-neon-magenta text-neon-magenta text-sm font-pixel">
                          LEADER
                        </span>
                      )}
                    </div>
                    <Link
                      href="/teams"
                      className="block w-full px-6 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300 font-retro text-lg uppercase"
                    >
                      → ACCESS TEAM DASHBOARD
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground font-retro">
                      &gt; No team detected. Initialize team creation?
                    </p>
                    <Link
                      href="/teams"
                      className="block w-full px-6 py-3 bg-transparent border-2 border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-background transition-all duration-300 font-retro text-lg uppercase"
                    >
                      → CREATE OR JOIN TEAM
                    </Link>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-card border border-border p-6 hover:border-neon-cyan transition-all duration-300">
                  <h3 className="text-xl font-pixel text-neon-cyan mb-3">
                    TEAMS
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-retro">
                    Create squads. Invite members. Collaborate and conquer.
                  </p>
                  <Link
                    href="/teams"
                    className="text-neon-cyan hover:text-glow-cyan text-sm font-retro"
                  >
                    &gt; MANAGE_TEAMS
                  </Link>
                </div>

                <div className="bg-card border border-border p-6 hover:border-neon-magenta transition-all duration-300">
                  <h3 className="text-xl font-pixel text-neon-magenta mb-3">
                    EVENTS
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-retro">
                    Join hackathons. Compete. Win epic prizes.
                  </p>
                  <span className="text-muted-foreground text-sm font-retro">
                    &gt; COMING_SOON...
                  </span>
                </div>

                <div className="bg-card border border-border p-6 hover:border-neon-orange transition-all duration-300">
                  <h3 className="text-xl font-pixel text-neon-orange mb-3">
                    PROJECTS
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-retro">
                    Showcase builds. Share knowledge. Level up.
                  </p>
                  <span className="text-muted-foreground text-sm font-retro">
                    &gt; COMING_SOON...
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          {/* Decorative Elements */}
          <div className="mt-20 grid grid-cols-4 gap-4 max-w-4xl mx-auto opacity-50">
            <div className="h-2 bg-neon-cyan animate-flicker"></div>
            <div
              className="h-2 bg-neon-magenta animate-flicker"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="h-2 bg-neon-orange animate-flicker"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="h-2 bg-neon-yellow animate-flicker"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}
