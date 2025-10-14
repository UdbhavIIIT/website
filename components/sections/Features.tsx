"use client";

import { useState } from "react";

const features = [
  {
    icon: "⚡",
    title: "India’s First Inter-IIIT Hackathon",
    description:
      "UDBHAV unites all IIITs across India for a groundbreaking national hackathon — a platform to showcase innovation, collaboration, and real-world problem-solving.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏫",
    title: "Pan-India IIIT Participation",
    description:
      "Join 1,000+ teams from 28 IIITs nationwide — connecting top tech talent from premier institutes specializing in CSE, ECE, and AI/DS.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "💡",
    title: "Three Exciting Rounds",
    description:
      "Compete through multiple hackathon rounds designed to test creativity, technical depth, and real-world impact — from ideation to implementation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🏆",
    title: "Massive Scale & Recognition",
    description:
      "With 3,000+ expected participants and multi-lakh budgets inspired by flagship IIIT events like Aparoksha, Esya, and Aurora — UDBHAV promises national visibility.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🤝",
    title: "Industry & Alumni Collaboration",
    description:
      "Interact with mentors, sponsors, and alumni from leading companies and startups, gaining guidance and career-defining connections.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🚀",
    title: "Sponsorship & Opportunities",
    description:
      "Partner companies gain brand visibility, workshops, speaker sessions, and talent access through exclusive sponsorship tiers from Silver to Title Partner.",
    color: "from-indigo-500 to-purple-500",
  },
];

export function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Join Udbhav?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate inter-IIIT hackathon with exciting
            opportunities, amazing prizes, and a chance to showcase your talent
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className={`
                relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700
                transition-all duration-500 transform
                ${
                  hoveredFeature === index
                    ? "scale-105 shadow-2xl border-gray-600"
                    : "hover:shadow-xl hover:border-gray-600"
                }
              `}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-r ${
                    feature.color
                  } rounded-2xl opacity-0
                  transition-opacity duration-500
                  ${hoveredFeature === index ? "opacity-5" : ""}
                `}
                ></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-2xl
                    bg-gradient-to-r ${feature.color} text-white text-4xl
                    transition-transform duration-500
                    ${hoveredFeature === index ? "rotate-12 scale-110" : ""}
                  `}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Removed */}
      </div>
    </section>
  );
}
