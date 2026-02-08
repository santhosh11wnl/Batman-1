"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo, awards } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-display font-bold text-center mb-6">
              <span className="text-primary">Recognition</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 glass-panel glow-border rounded-lg text-sm font-medium"
                >
                  🏆 {award}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Content */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using Next.js,
              TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
