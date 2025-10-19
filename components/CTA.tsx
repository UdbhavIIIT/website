import { Button } from "@/components/ui/button";
import { Rocket, MessageSquare, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-magenta rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-pixel text-3xl md:text-5xl mb-6 text-glow-orange text-accent uppercase leading-tight">
            Ready to Hack
            <br />
            The Retro Way?
          </h2>
          
          <p className="font-retro text-2xl md:text-3xl mb-4 text-foreground">
            &gt; Join the revolution_
          </p>

          <p className="font-sans text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            Limited spots available. Don't miss your chance to be part of the most 
            iconic hackathon of 2025. Dust off your keyboards and let's code!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="neonOrange" size="lg" className="group">
              <Rocket className="mr-2 group-hover:translate-y-[-4px] transition-transform" />
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button variant="neon" size="lg" className="group">
              <MessageSquare className="mr-2" />
              Join Discord
            </Button>
          </div>

          {/* Pixel Art Decoration */}
          <div className="mt-16 flex justify-center gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-12 bg-primary/30 animate-pulse"
                style={{
                  animationDelay: `${i * 100}ms`,
                  height: `${Math.random() * 48 + 24}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
