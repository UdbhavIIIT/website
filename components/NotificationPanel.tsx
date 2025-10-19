"use client"

import { useState, useEffect } from "react";
import { Bell, Radio } from "lucide-react";

const notifications = [
  "🎮 Registration opens in 48 hours!",
  "🕹️ Early bird discount ends soon",
  "💾 Check out our retro swag prizes",
  "📼 Workshop: Building with Vintage APIs",
  "🎨 Theme revealed: Arcade Legends",
];

const NotificationPanel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 border-y-2 border-primary/30 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="neon-border-cyan rounded-sm p-6 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6 text-primary animate-pulse" />
              <h3 className="font-pixel text-sm md:text-base text-primary uppercase">
                Live Updates
              </h3>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <div className="font-retro text-xl md:text-2xl text-foreground overflow-hidden">
                <div 
                  className="transition-all duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentIndex * 100}%)` }}
                >
                  {notifications.map((notif, idx) => (
                    <div key={idx} className="h-8 flex items-center">
                      {notif}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Bell className="w-5 h-5 text-accent animate-flicker" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationPanel;
