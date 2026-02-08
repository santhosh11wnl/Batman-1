"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { personalInfo, summary } from "@/data/content";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            The Engineer Behind the <span className="text-primary">Mask</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="glass-panel glow-border p-8 md:p-12 rounded-2xl space-y-6">
            {summary.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
