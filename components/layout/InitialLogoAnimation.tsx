"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function InitialLogoAnimation() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gotham-darker flex items-center justify-center"
        >
          {/* Lightning Flash Background */}
          <motion.div
            animate={{
              opacity: [0, 0.3, 0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.4, 0.6, 1],
            }}
            className="absolute inset-0 bg-primary/20"
          />

          {/* Batman Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: [-180, 0, 0],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.7, 1],
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(245,197,66,0.8))",
                  "drop-shadow(0 0 40px rgba(245,197,66,1))",
                  "drop-shadow(0 0 20px rgba(245,197,66,0.8))",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: 1,
              }}
              className="relative w-80 h-80"
            >
              <Image
                src="/batman-logo.png"
                alt="Batman"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Radial Pulse */}
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full bg-primary/40 blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
