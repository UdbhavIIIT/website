"use client";

import { useState } from "react";

const teamMembers = [
  {
    name: "Organizing Committee",
    role: "Event Coordination",
    image: "�",
    description: "Dedicated team ensuring smooth execution of Udbhav 2025.",
  },
  {
    name: "Technical Panel",
    role: "Judging & Mentorship",
    image: "�‍💻",
    description: "Industry experts and professors evaluating innovations.",
  },
  {
    name: "Industry Partners",
    role: "Sponsors & Mentors",
    image: "�",
    description: "Leading companies providing opportunities and guidance.",
  },
  {
    name: "Student Volunteers",
    role: "Support Team",
    image: "🎓",
    description: "Passionate students making the event memorable for all.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "First Udbhav",
    description:
      "Inaugural inter-IIIT hackathon with 15 participating institutes",
  },
  {
    year: "2023",
    title: "Expanded Reach",
    description: "Grew to include 20 IIITs with industry partnerships",
  },
  {
    year: "2024",
    title: "National Recognition",
    description: "Recognized as premier student hackathon in India",
  },
  {
    year: "2025",
    title: "Complete Unity",
    description: "All 26 IIITs participating with ₹5L+ prize pool",
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Udbhav 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The premier inter-IIIT hackathon bringing together the brightest
            minds from all 26 IIITs across India
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-700">
            <div className="flex space-x-2">
              {[
                { id: "story", label: "About Event", icon: "�" },
                { id: "mission", label: "Mission", icon: "🎯" },
                { id: "team", label: "Organizers", icon: "👥" },
                { id: "timeline", label: "Journey", icon: "⏰" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }
                  `}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Our Story */}
          {activeTab === "story" && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-700">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    The Journey Begins
                  </h3>
                  <div className="prose prose-lg text-gray-300 leading-relaxed">
                    <p className="mb-6">
                      Udhbav was born from a simple yet powerful idea: to create
                      a platform that empowers individuals and teams to bring
                      their creative visions to life. Our founders recognized
                      that traditional tools were holding back innovation, and
                      set out to build something different.
                    </p>
                    <p className="mb-6">
                      Starting in a small garage in 2020, we've grown into a
                      global platform serving millions of users worldwide. What
                      began as a passion project has evolved into a
                      comprehensive ecosystem that supports creativity,
                      collaboration, and innovation at every level.
                    </p>
                    <p>
                      Today, Udhbav stands as a testament to what's possible
                      when technology meets human creativity. We're not just
                      building tools; we're fostering a community of dreamers,
                      makers, and innovators who are shaping the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission */}
          {activeTab === "mission" && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize creativity and innovation by providing
                    powerful, accessible tools that enable anyone to transform
                    their ideas into reality, regardless of their technical
                    background or resources.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where creativity knows no bounds, where every
                    individual has the tools and support they need to innovate,
                    collaborate, and make a meaningful impact on society.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Team */}
          {activeTab === "team" && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-3xl p-6 shadow-xl transition-all duration-300 transform group-hover:scale-105">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{member.image}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-blue-600 font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline */}
          {activeTab === "timeline" && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`relative mb-12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div
                        className={`flex items-center ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`bg-white rounded-2xl p-6 shadow-xl max-w-md ${
                            index % 2 === 0 ? "mr-8" : "ml-8"
                          }`}
                        >
                          <div className="text-2xl font-bold text-blue-600 mb-2">
                            {milestone.year}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
