"use client";
import { motion } from "framer-motion";

export default function HackathonFlow() {
  const hackathonFlow = [
    {
      round: "Round 1 - Intra IIIT Round",
      color: "green",
      glow: "shadow-[0_0_20px_#00ff88]",
      steps: [
        "Organizers give a set of domains to choose from",
        "Other Institutes choose domains which they will conduct the first round on",
        "Teams undergo a registration process",
        "Teams undergo the Round 1 made by each IIIT’s representatives for their students",
        "Top 4 teams from each Institute advance to Round 2",
      ],
    },
    {
      round: "Round 2 - Inter IIIT Round",
      color: "cyan",
      glow: "shadow-[0_0_20px_#00ffff]",
      steps: [
        "Top 4 teams from each IIIT compete in Round 2",
        "Problem statements are released on Udbhav’s website",
        "Teams submit their projects online for evaluation",
        "Top 6 teams are shortlisted for the Grand Finale",
      ],
    },
    {
      round: "Round 3 - Grand Finale",
      color: "violet",
      glow: "shadow-[0_0_20px_#b388ff]",
      steps: [
        "Finalists present their projects during Udbhav Fest",
        "Projects are reviewed by expert judges",
        "Winning teams are announced at the closing ceremony",
      ],
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen text-white flex flex-col items-center py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/h4.jpg')" }}
    >
      {/* Title */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ color: "#b0b0b0", scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-wide text-white cursor-pointer"
        >
          UDBHAV HACKATHON FLOW
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          A connected journey from ideation to innovation.
        </p>
      </div>

      {/* All Rounds */}
      <div className="flex flex-col gap-32 w-full max-w-3xl relative">
        {hackathonFlow.map((round, i) => (
          <div key={i} className="relative flex flex-col items-center w-full">
            {/* Start & End boxes */}
            <div className="absolute top-0 left-0 bg-green-500/70 text-black font-semibold py-3 px-6 rounded shadow-lg z-20 text-lg md:text-xl">
              🚀 Start
            </div>
            <div className="absolute bottom-0 right-0 bg-pink-500/70 text-black font-semibold py-3 px-6 rounded shadow-lg z-20 text-lg md:text-xl">
              🏁 End
            </div>

            {/* Round Header */}
            <motion.h2
              className={`text-3xl md:text-4xl font-bold mb-16 mt-6 text-${round.color}-400`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {round.round}
            </motion.h2>

            {/* Vertical line */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-${round.color}-400 rounded-full h-full blur-[1px] opacity-60`}
            />

            {/* Steps */}
            <div className="flex flex-col items-center gap-12 relative z-10">
              {round.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(255,255,255,0.4)",
                    transition: { duration: 0.15 },
                  }}
                  className={`relative flex items-center justify-center bg-gradient-to-r from-${round.color}-500/20 to-${round.color}-500/10 border border-${round.color}-400 text-gray-200 text-lg md:text-2xl font-medium rounded-2xl py-6 px-12 text-center backdrop-blur-md transition-all ${round.glow}`}
                  style={{ minWidth: "75%", maxWidth: "85%" }}
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";

// export default function HackathonTimeline() {
//   const rounds = [
//     {
//       round: "Round 1 - Intra IIIT Round",
//       color: "green",
//       glow: "shadow-[0_0_20px_#00ff88]",
//       steps: [
//         "Organizers give a set of domains to choose from",
//         "Other Institutes choose domains which they will conduct the first round on",
//         "Teams undergo a registration process",
//         "Teams undergo the Round 1 made by each IIIT’s representatives for their students",
//         "Top 4 teams from each Institute advance to Round 2",
//       ],
//     },
//     {
//       round: "Round 2 - Inter IIIT Round",
//       color: "cyan",
//       glow: "shadow-[0_0_20px_#00ffff]",
//       steps: [
//         "Top 4 teams from each IIIT compete in Round 2",
//         "Problem statements are released on Udbhav’s website",
//         "Teams submit their projects online for evaluation",
//         "Top 6 teams are shortlisted for the Grand Finale",
//       ],
//     },
//     {
//       round: "Round 3 - Grand Finale",
//       color: "violet",
//       glow: "shadow-[0_0_20px_#b388ff]",
//       steps: [
//         "Finalists present their projects during Udbhav Fest",
//         "Projects are reviewed by expert judges",
//         "Winning teams are announced at the closing ceremony",
//       ],
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen text-white flex flex-col items-center py-20 px-4 bg-cover bg-center"
//       style={{ backgroundImage: "url('./-bg.jpeg')" }}
//     >
//       <h1 className="text-5xl font-bold mb-16 text-center text-cyan-400">
//         Hackathon Journey
//       </h1>
//       <div className="relative w-full max-w-3xl">
//         {/* Vertical line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full blur-sm" />

//         {/* Timeline rounds */}
//         {rounds.map((round, index) => (
//           <motion.div
//             key={index}
//             className={`relative mb-20 flex flex-col items-center ${
//               index % 2 === 0 ? "lg:items-start" : "lg:items-end"
//             }`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             {/* Connector circle */}
//             <div
//               className={`w-6 h-6 rounded-full border-4 border-${round.color}-400 bg-black ${round.glow} z-10`}
//             />

//             {/* Timeline box */}
//             <motion.div
//               className={`mt-8 bg-gray-900/90 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 hover:shadow-[0_0_25px_${round.color}] transition-transform duration-300 w-full lg:w-2/3`}
//               whileHover={{
//                 boxShadow: `0 0 25px ${round.color}`,
//                 scale: 1.05,
//               }}
//             >
//               <h2
//                 className="text-2xl font-bold mb-4 text-center"
//                 style={{ color: round.color }}
//               >
//                 {round.round}
//               </h2>
//               <ul className="space-y-2 text-gray-300">
//                 {round.steps.map((text, i) => (
//                   <li key={i} className="text-base leading-relaxed">
//                     • {text}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </motion.div>
//         ))}

//         {/* Start and End points */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 text-cyan-400 font-semibold text-lg">
//           🚀 Start
//         </div>
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-pink-400 font-semibold text-lg">
//           🏁 End
//         </div>
//       </div>
//     </div>
//   );
// }
