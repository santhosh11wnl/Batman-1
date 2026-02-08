"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function SectionTransition() {
  const [activeSection, setActiveSection] = useState("");
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    let lastSection = "";

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (section !== lastSection && lastSection !== "") {
              setActiveSection(section);
              setShowTransition(true);
              setTimeout(() => setShowTransition(false), 1500);
            }
            lastSection = section;
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
        >
          {/* Electric Flash Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0, 1, 0],
              scale: [1, 1.2, 1, 1.1, 1]
            }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}
            className="absolute inset-0 bg-primary/10"
          />

          {/* Lightning Bolts */}
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 0 50 L 20 30 L 15 50 L 35 20 L 30 50 L 50 10 L 45 50 L 65 20 L 60 50 L 80 30 L 75 50 L 100 50"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-primary"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.4 }}
              />
            </svg>
          </motion.div>

          {/* Batman Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1],
              rotate: [180, 0, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1.2, times: [0, 0.5, 1] }}
            className="relative z-10"
          >
            <div className="relative w-64 h-64">
              <Image
                src="/batman-logo.png"
                alt="Batman"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(245,197,66,0.8)]"
              />
            </div>
          </motion.div>

          {/* Radial Pulse */}
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-64 h-64 rounded-full bg-primary/30 blur-3xl"
          />

          {/* Section Name */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2 }}
            className="absolute bottom-1/3 text-4xl font-display font-bold text-primary text-glow uppercase tracking-wider"
          >
            {activeSection}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
