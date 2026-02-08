"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { skills } from "@/data/content";
import { BatmanLogo } from "@/components/ui/BatmanLogo";

const skillIcons: Record<string, string> = {
  TypeScript: "⚡",
  JavaScript: "🟨",
  Python: "🐍",
  Java: "☕",
  SQL: "🗄️",
  HTML5: "🌐",
  CSS3: "🎨",
  React: "⚛️",
  Redux: "🔄",
  "Node.js": "🟢",
  Express: "🚂",
  Jest: "🃏",
  Bootstrap: "🅱️",
  "Material UI": "🎭",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  DynamoDB: "⚡",
  Redis: "🔴",
  "AWS Lambda": "λ",
  S3: "🪣",
  EC2: "☁️",
  SQS: "📬",
  SNS: "📢",
  "API Gateway": "🚪",
  Docker: "🐳",
  Git: "📦",
};

function SlotWheel({ items, category }: { items: string[]; category: string }) {
  const [isDragging, setIsDragging] = useState(false);
  const y = useMotionValue(0);
  const constraintsRef = useRef(null);

  const itemHeight = 120;
  const extendedItems = [...items, ...items, ...items];

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <h3 className="text-lg font-display font-bold text-primary">{category}</h3>
      </div>

      <div className="relative h-[360px] overflow-hidden glass-panel glow-border rounded-2xl">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gotham-dark to-transparent z-10 pointer-events-none" />
        
        {/* Selection indicator */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[120px] border-y-2 border-primary/50 bg-primary/5 pointer-events-none z-10" />
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gotham-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={constraintsRef}
          drag="y"
          dragConstraints={{ top: -itemHeight * items.length, bottom: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{ y }}
          className="cursor-grab active:cursor-grabbing py-[120px]"
        >
          {extendedItems.map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              className="h-[120px] flex flex-col items-center justify-center px-4"
              whileHover={{ scale: isDragging ? 1 : 1.05 }}
            >
              <div className="text-4xl mb-2">{skillIcons[skill] || "💎"}</div>
              <div className="text-sm font-semibold text-center">{skill}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-2 text-xs text-muted-foreground">
        Drag to scroll
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <BatmanLogo className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">
              The <span className="text-primary">Utility Belt</span>
            </h2>
            <BatmanLogo className="w-12 h-12 text-primary" />
          </div>
          <p className="text-center text-muted-foreground mb-12">
            Drag the wheels to explore my arsenal
          </p>

          {/* Slot Machine Wheels */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillCategories.map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SlotWheel items={items} category={category} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Batman Logo Center */}
          <motion.div
            className="flex justify-center mt-12"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BatmanLogo className="w-20 h-20 text-primary/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
