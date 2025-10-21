import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { vt323 } from "@/lib/fonts";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(/hero-banner.jpg)` }}
      />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-flicker mb-8">
          <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-4 text-glow-cyan text-primary uppercase leading-tight">
            RetroHack
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-secondary text-glow-magenta">2025</span>
          </h1>
        </div>

        <p className={`font-retro text-2xl md:text-4xl mb-4 text-foreground ${vt323.className}`}>
          &gt; CODE LIKE IT'S 1989_
        </p>
        
        <p className="font-sans text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          Step into the time machine. Build the future with retro vibes. 
          Join the most nostalgic hackathon experience of the year.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="neon" size="lg" className="group">
            <Sparkles className="mr-2 group-hover:animate-spin-slow" />
            Register Now
          </Button>
          <Button variant="neonMagenta" size="lg" className="group">
            <Zap className="mr-2 group-hover:animate-pulse" />
            Login
          </Button>
        </div>

        {/* Pixel Stars Animation */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-yellow animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-neon-cyan animate-pulse delay-100" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-neon-magenta animate-pulse delay-200" />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-neon-orange animate-pulse delay-300" />
      </div>
    </section>
  );
};

export default Hero;
