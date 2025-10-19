import { Clock } from "lucide-react";

const scheduleItems = [
  { time: "FRI 6:00 PM", event: "Registration & Check-in", status: "complete" },
  { time: "FRI 7:00 PM", event: "Opening Ceremony", status: "complete" },
  { time: "FRI 8:00 PM", event: "Hacking Begins!", status: "active" },
  {
    time: "SAT 10:00 AM",
    event: "Workshop: Retro Game Dev",
    status: "upcoming",
  },
  { time: "SAT 2:00 PM", event: "Mentor Sessions", status: "upcoming" },
  { time: "SAT 6:00 PM", event: "Checkpoint Demo", status: "upcoming" },
  { time: "SUN 12:00 PM", event: "Final Submissions", status: "upcoming" },
  { time: "SUN 2:00 PM", event: "Project Presentations", status: "upcoming" },
  { time: "SUN 5:00 PM", event: "Awards & Closing", status: "upcoming" },
];

const Schedule = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl md:text-5xl text-center mb-4 text-glow-cyan text-primary uppercase">
          Schedule
        </h2>
        <p className="font-retro text-xl md:text-2xl text-center mb-16 text-muted-foreground">
          &gt; Your 48-hour adventure timeline_
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple" />

            <div className="space-y-8">
              {scheduleItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        item.status === "complete"
                          ? "bg-primary shadow-glow-cyan"
                          : item.status === "active"
                          ? "bg-secondary shadow-glow-magenta animate-pulse"
                          : "bg-muted"
                      }`}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    } ml-8 md:ml-0`}
                  >
                    <div
                      className={`inline-block neon-border-${
                        item.status === "complete" ? "cyan" : "magenta"
                      } rounded-sm p-4 bg-background/90 backdrop-blur-sm`}
                    >
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-${idx % 2 === 0 ? 'end' : 'start'}">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="font-pixel text-xs text-accent uppercase">
                          {item.time}
                        </span>
                      </div>
                      <p className="font-retro text-xl text-foreground">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
