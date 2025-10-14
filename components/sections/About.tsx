"use client";

import { useState } from "react";

const teamMembers = [
  {
    name: "Sripathy Siddartha",
    role: "Organizer",
    image: "🏆",
    description:
      "Leads the overall end-to-end planning, organising and execution of Udbhav.",
  },
  {
    name: "Sai Tej Ravi Ram",
    role: "Program Director",
    image: "🎬",
    description:
      "Manages the event's schedule, rounds, and technical flow across all stages.",
  },
  {
    name: "Ishaan Jha",
    role: "Sponsorship Lead",
    image: "🤝",
    description:
      "Heads the team for securing industry partnerships and sponsors",
  },
  {
    name: "Siddharth Kancharla",
    role: "Sponsorship Team",
    image: "💼",
    description:
      "Works with the sponsorship lead to create valuable opportunities for participants",
  },
];

const milestones = [
  {
    year: "2025",
    title: "Round 1",
    description:
      "Top four teams from each IIIT will be given certificates and cups, and will be qualified to Round 2",
  },
  {
    year: "2025",
    title: "Round 2",
    description:
      "The top one team from each IIIT will advance to the final round",
  },
  {
    year: "2025",
    title: "Round 3",
    description:
      "Round 3 will happen offline under the supervision of the IIIT Sricity organising team",
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
                { id: "story", label: "About Event", icon: " " },
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
                      UDBHAV is India's first Inter-IIIT Hackathon, an open
                      event designed to encompass all domains of the
                      ever-growing IT world. It provides a platform for teams
                      from different IIITs to select their preferred domains and
                      problem statements, enabling them to showcase their skills
                      to the world.
                    </p>
                    <p className="mb-6">
                      The Indian Institutes of Information Technology (IIITs)
                      are premier institutions focused on future-ready education
                      in fields like AI, IoT, Blockchain, and Data Science.
                      Udbhav unites these highly technical institutes for a
                      nationwide coding showdown
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
                    To unite students from all IIITs on a single platform,
                    fostering innovation across all IT domains and empowering
                    them to solve real-world challenges through a competitive,
                    multi-stage hackathon.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To establish a premier, collaborative hackathon that
                    showcases the exceptional technical prowess of IIIT students
                    and cultivates a nationwide community of future technology
                    leaders and innovators.
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
