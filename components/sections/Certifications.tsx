"use client";

import { motion, useMotionValue } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { publications } from "@/data/content";
import { useRef, useState } from "react";

export function Publications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  return (
    <section id="publications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Research <span className="text-primary">Publications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Peer-reviewed work and conference presentations in GenAI and bioinformatics
          </p>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Drag to scroll →
          </p>

          {/* Roulette Belt Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gotham-dark to-transparent z-10 pointer-events-none" />
            
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gotham-dark to-transparent z-10 pointer-events-none" />

            {/* Scrollable Belt */}
            <div className="overflow-hidden py-4">
              <motion.div
                ref={scrollRef}
                drag="x"
                dragConstraints={{ left: -1500, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                style={{ x }}
                className="flex gap-4 cursor-grab active:cursor-grabbing"
              >
                {publications.map((pub, index) => (
                  <motion.div
                    key={`${pub.title}-${index}-${pub.venue}`}
                    whileHover={{ scale: isDragging ? 1 : 1.05 }}
                    className="glass-panel glow-border rounded-lg p-4 flex-shrink-0 w-[180px] hover:border-primary/40 transition-all group"
                    style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-xs leading-tight mb-1 line-clamp-2">
                          {pub.title}
                        </h3>
                        <p className="text-[10px] text-muted-foreground mb-1">
                          {pub.venue} • {pub.year}
                        </p>
                        <p className="text-[10px] text-muted-foreground line-clamp-3">
                          {pub.details}
                        </p>
                      </div>
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => isDragging && e.preventDefault()}
                          className="flex items-center gap-1 text-[10px] text-primary hover:text-primary/80 transition-colors"
                        >
                          View Publication
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
