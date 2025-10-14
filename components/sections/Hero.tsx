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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <svg
              className="w-5 h-5 mr-2 animate-spin"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            🏆 Inter-IIIT Hackathon 2025
          </div>

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
            The ultimate inter-IIIT hackathon bringing together brilliant minds
            from all 26 IIITs across India.
            <span className="text-cyan-400 font-semibold">
              {" "}
              Code, compete, and create
            </span>{" "}
            solutions that will shape tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center">
                🚀 Register Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button className="group px-10 py-5 border-2 border-cyan-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl bg-transparent hover:bg-cyan-400 hover:text-gray-900">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 group-hover:animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                📖 View Rules
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                26
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                IIITs Participating
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                72H
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                Non-Stop Coding
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                ₹5L+
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                Prize Pool
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                Expected Teams
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
