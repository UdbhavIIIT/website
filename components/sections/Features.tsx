"use client";

import { useState } from "react";

const features = [
  {
    icon: "�",
    title: "72-Hour Marathon",
    description:
      "Test your coding skills in an intense 72-hour non-stop hackathon experience with mentors and industry experts.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏆",
    title: "₹5L+ Prize Pool",
    description:
      "Compete for exciting prizes worth over 5 lakhs, including cash rewards, internships, and job opportunities.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🤝",
    title: "Inter-IIIT Network",
    description:
      "Connect with brilliant minds from all 26 IIITs across India and build lasting professional relationships.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "�",
    title: "Industry Mentors",
    description:
      "Get guidance from top industry professionals and startup founders to refine your innovative ideas.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🎯",
    title: "Problem Statements",
    description:
      "Work on real-world challenges from leading companies and contribute to meaningful solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "�",
    title: "Career Opportunities",
    description:
      "Showcase your talent to potential employers with internship and job opportunities from partner companies.",
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
                    bg-gradient-to-r ${feature.color} text-white text-2xl
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

                {/* Hover Effect Border */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl border-2 border-transparent
                  bg-gradient-to-r ${feature.color} p-[2px]
                  transition-opacity duration-500
                  ${hoveredFeature === index ? "opacity-20" : "opacity-0"}
                `}
                >
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span>Explore All Features</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
