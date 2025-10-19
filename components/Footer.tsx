import { Heart, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary/30 py-8 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-pixel text-xs text-primary uppercase mb-2">
              RetroHack 2025
            </p>
            <p className="font-retro text-lg text-muted-foreground flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="w-4 h-4 text-secondary animate-pulse" /> by hackers, for hackers
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-primary hover:text-secondary transition-colors hover:animate-glitch"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-primary hover:text-secondary transition-colors hover:animate-glitch"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-primary hover:text-secondary transition-colors hover:animate-glitch"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary/20 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 RetroHack. All rights reserved. Code like it's 1989.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
