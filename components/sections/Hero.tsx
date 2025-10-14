"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "26 IIITs. One Vision.",
    "Code. Compete. Conquer.",
    "Innovation Unleashed",
    "Build the Extraordinary",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4">
              Welcome to
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              UDBHAV
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mt-4">
              2025
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 h-16 flex items-center justify-center">
            <span className="animate-fade-in-up transition-all duration-1000 font-semibold">
              {texts[currentText]}
            </span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            India’s First Inter IIIT Hackathon, which is an open hackathon to
            involve all domains of the ever-growing IT World.
            <br />
            <span className="text-cyan-400 font-semibold">
              {" "}
              Code, compete, and create
            </span>{" "}
            solutions that will shape tomorrow.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                28
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                IIITs Participating
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                7H
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                Non-Stop Coding
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                ₹1.5L+
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                Prize Pool
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                Expected Teams
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
