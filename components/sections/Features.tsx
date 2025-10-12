"use client";

import { useState } from "react";

const features = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "Your data is protected with enterprise-grade security and privacy measures.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description:
      "Enjoy a stunning, intuitive interface designed for modern workflows and creativity.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description:
      "Access your work anywhere with our responsive, mobile-optimized platform.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "⚡",
    title: "Real-time Sync",
    description:
      "Collaborate in real-time with automatic synchronization across all devices.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🌍",
    title: "Global Scale",
    description:
      "Built to scale globally with CDN distribution and worldwide availability.",
    color: "from-indigo-500 to-purple-500",
  },
];

export function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and capabilities that make Udhbav the perfect
            platform for your creative journey
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
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
                relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100
                transition-all duration-500 transform
                ${
                  hoveredFeature === index
                    ? "scale-105 shadow-2xl"
                    : "hover:shadow-xl"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
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
