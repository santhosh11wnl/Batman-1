"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";
import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Academic <span className="text-primary">Training</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Educational background and achievements
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel glow-border p-6 rounded-xl hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span>{edu.year}</span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {edu.gpa}
                      </span>
                    </div>

                    {edu.subjects && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Key Subjects:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-3 py-1 bg-muted/50 border border-border rounded-lg text-xs"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.leadership && (
                      <div>
                        <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          Leadership Activities:
                        </p>
                        <ul className="space-y-1">
                          {edu.leadership.map((activity, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary">▸</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
