"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

type EventCard = {
  id: string;
  type: "organizing" | "participating";
  collegeName: string;
  collegeLogo: string;
  eventImage: string;
  eventName: string;
  eventDate: string;
  location: string;
  organizingCommittee: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

const cards: EventCard[] = [
  {
    id: "1",
    type: "organizing",
    collegeName: "IIIT Sri City",
    collegeLogo: "/sri-city-logo.png",
    eventImage: "/sri-city.jpg",
    eventName: "Udbhav 2025",
    eventDate: "Oct 20–22, 2025",
    location: "Sri City, India",
    organizingCommittee: "Enigma",
    description: "India's first inter-iiit hackathon.",
    ctaText: "View Details",
    ctaLink: "#",
  },
  {
    id: "2",
    type: "participating",
    collegeName: "IIIT Trichy",
    collegeLogo: "/IIIT-Trichy-logo.png",
    eventImage: "/IIIT-Trichy.jpg",
    eventName: "Udbhav",
    eventDate: "Oct 20–22, 2025",
    location: "Trichy, India",
    organizingCommittee: "club",
    description: "India's first inter-iiit hackathon.",
    ctaText: "Register Now",
    ctaLink: "#",
  },
  {
    id: "3",
    type: "participating",
    collegeName: "IIIT Una",
    collegeLogo: "/IIIT-una-logo.png",
    eventImage: "/IIIT-Una.jpg",
    eventName: "Udbhav 2025",
    eventDate: "Oct 20–22, 2025",
    location: "Sri City, India",
    organizingCommittee: "Enigma",
    description: "India's first inter-iiit hackathon.",
    ctaText: "View Details",
    ctaLink: "#",
  },
  {
    id: "4",
    type: "participating",
    collegeName: "IIIT Bhubneshwar",
    collegeLogo: "/IIIT_Bhubaneswar_Logo.png",
    eventImage: "/IIIT-Bhubneshwar.jpeg",
    eventName: "Udbhav 2025",
    eventDate: "Oct 20–22, 2025",
    location: "Sri City, India",
    organizingCommittee: "Enigma",
    description: "India's first inter-iiit hackathon.",
    ctaText: "View Details",
    ctaLink: "#",
  },
  {
    id: "5",
    type: "participating",
    collegeName: "IIIT Kota",
    collegeLogo: "/iiitkota.png",
    eventImage: "/IIIT-Kota.png",
    eventName: "Udbhav 2025",
    eventDate: "Oct 20–22, 2025",
    location: "Sri City, India",
    organizingCommittee: "Enigma",
    description: "India's first inter-iiit hackathon.",
    ctaText: "View Details",
    ctaLink: "#",
  },
    {
    id: "6",
    type: "participating",
    collegeName: "IIIT Surat",
    collegeLogo: "/IIIT_Surat_logo.jpg",
    eventImage: "/iiitsurat.jpeg",
    eventName: "Udbhav 2025",
    eventDate: "Oct 20–22, 2025",
    location: "Sri City, India",
    organizingCommittee: "Enigma",
    description: "India's first inter-iiit hackathon.",
    ctaText: "View Details",
    ctaLink: "#",
  },
];

function usePreloadImages(imageUrls: string[]) {
  useEffect(() => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
}

export default function LiquidGlassEventCards() {
  const [active, setActive] = useState<EventCard | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  usePreloadImages(cards.map(card => card.eventImage));

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExiting(true);
        setTimeout(() => setActive(null), 300); // Match exit duration
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      setIsExiting(false);
    } else {
      if (!isExiting) document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active, isExiting]);

  useOutsideClick(ref, () => {
    setIsExiting(true);
    setTimeout(() => setActive(null), 300); // Match exit duration
  });

  const organizing = cards.filter((card) => card.type === "organizing");
  const participating = cards.filter((card) => card.type === "participating");

  return (
    <div
      className="min-h-screen w-full p-4 md:p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10 drop-shadow-lg"
        >
          Meet The Participants
        </motion.h1>

        <Section title="Organizing" cards={organizing} id={id} setActive={setActive} delay={0.2} />
        <Section title="Participating" cards={participating} id={id} setActive={setActive} delay={0.4} />
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            <div className="fixed inset-0 grid place-items-center z-50 p-4">
              <button
                className="absolute top-6 right-6 lg:hidden bg-white/20 backdrop-blur-md rounded-full p-3 text-white z-50"
                onClick={() => {
                  setIsExiting(true);
                  setTimeout(() => setActive(null), 300);
                }}
                aria-label="Close"
              >
                <CloseIcon />
              </button>

              <motion.div
                // Removed layoutId for fade transitions
                ref={ref}
                className="w-full max-w-2xl flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
                initial={{ 
                  opacity: 0, 
                  y: 40, 
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
              >
                {/* Fixed aspect ratio container */}
                <div className="aspect-[2/1] w-full overflow-hidden">
                  <img
                    src={active.eventImage}
                    alt={active.eventName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 p-6 text-white overflow-y-auto max-h-[50vh]">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={active.collegeLogo}
                      alt={active.collegeName}
                      className="h-14 w-14 rounded-full object-contain bg-white/20 p-1"
                    />
                    <h3 className="text-xl font-bold">{active.collegeName}</h3>
                  </div>

                  <h2 className="text-2xl font-bold mb-2">{active.eventName}</h2>
                  <p className="text-white/80 mb-1">📅 {active.eventDate}</p>
                  <p className="text-white/80 mb-4">📍 {active.location}</p>

                  <div className="mb-5">
                    <p className="text-sm text-white/70">Organized by:</p>
                    <p className="font-medium">{active.organizingCommittee}</p>
                  </div>

                  <p className="mb-7 leading-relaxed">{active.description}</p>

                  <a
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full font-bold bg-emerald-500/90 hover:bg-emerald-600 text-white"
                  >
                    {active.ctaText}
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ title, cards, id, setActive, delay }: { 
  title: string; cards: EventCard[]; id: string; 
  setActive: (card: EventCard) => void; delay: number; 
}) {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="text-2xl font-semibold text-white mb-6 drop-shadow"
      >
        {title}
      </motion.h2>
      <ul className="space-y-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + i * 0.1 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.995 }}
          >
            <EventCardItem card={card} id={id} setActive={setActive} />
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

function EventCardItem({ card, id, setActive }: { 
  card: EventCard; id: string; setActive: (card: EventCard) => void; 
}) {
  return (
    // Removed layoutId from card for fade transitions
    <motion.div
      onClick={() => setActive(card)}
      className="p-5 rounded-2xl cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-5">
        {/* Fixed aspect ratio matching modal */}
        <div className="flex-shrink-0 w-full md:w-64 aspect-[2/1] overflow-hidden rounded-xl">
          <img
            src={card.eventImage}
            alt={card.eventName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={card.collegeLogo}
              alt={card.collegeName}
              className="h-10 w-10 rounded-full object-contain bg-white/20 p-1"
            />
            <h3 className="text-lg font-bold text-white">{card.collegeName}</h3>
          </div>

          <h4 className="text-xl font-semibold text-white mb-1">{card.eventName}</h4>
          <p className="text-white/80 text-sm mb-2">
            📅 {card.eventDate} • 📍 {card.location}
          </p>
          <p className="text-white/90">{card.description}</p>
        </div>

        <div className="self-end md:self-center">
          <button className="px-4 py-2 text-sm rounded-full font-bold bg-emerald-500/90 hover:bg-emerald-600 text-white">
            {card.ctaText}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);