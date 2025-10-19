import { Trophy, Users, Calendar, Lightbulb } from "lucide-react";
import vinylIcon from "@/public/vinyl-icon.png";
import cassetteIcon from "@/assets/cassette-icon.png";

const features = [
  {
    icon: Trophy,
    title: "Epic Prizes",
    description: "Win retro gaming consoles, vintage tech, and cold hard cash",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from industry legends who coded through the golden age",
    color: "magenta",
  },
  {
    icon: Calendar,
    title: "48-Hour Sprint",
    description: "Non-stop coding marathon. Pizza, energy drinks, and vibes included",
    color: "orange",
  },
  {
    icon: Lightbulb,
    title: "Retro Themes",
    description: "Build projects inspired by arcade classics and vintage tech",
    color: "purple",
  },
];

const Features = () => {
  return (
    <section className="py-20 relative">
      {/* Vinyl Record Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <img src={"/vinyl-icon.png"} alt="" className="animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
        <img src={"/cassette-icon.png"} alt="" className="animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl md:text-5xl text-center mb-4 text-glow-magenta text-secondary uppercase">
          Why Join?
        </h2>
        <p className="font-retro text-xl md:text-2xl text-center mb-16 text-muted-foreground">
          &gt; Features that make us legendary_
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Vinyl Record Card Design */}
              <div className="neon-border-cyan rounded-sm p-6 bg-card hover:bg-card/80 transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Icon with Glow */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center bg-background relative overflow-hidden">
                    {/* Vinyl grooves effect */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute border border-primary rounded-full"
                          style={{
                            width: `${80 - i * 15}%`,
                            height: `${80 - i * 15}%`,
                            top: `${10 + i * 7.5}%`,
                            left: `${10 + i * 7.5}%`,
                          }}
                        />
                      ))}
                    </div>
                    <feature.icon className={`w-8 h-8 text-neon-${feature.color} relative z-10 group-hover:animate-glitch`} />
                  </div>
                  {/* Center hole */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary" />
                </div>

                <h3 className="font-pixel text-sm md:text-base mb-3 text-primary uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
