"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/content";
import { BatmanLogo } from "@/components/ui/BatmanLogo";
import { useTranslation } from "@/lib/useTranslation";
import Image from "next/image";

export function Hero() {
  const t = useTranslation();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Home Page Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/homePagebackgroundLogo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
          filter: "drop-shadow(0 0 50px rgba(0, 150, 255, 0.6)) drop-shadow(0 0 100px rgba(0, 150, 255, 0.4))",
        }}
      />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gotham-darker via-gotham-dark to-gotham-dark" />
      
      {/* Floating Batman Logos */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <BatmanLogo className="w-32 h-32 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <BatmanLogo className="w-40 h-40 text-primary" />
      </motion.div>
      
      {/* Spotlight Effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20"
        animate={{
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: [0, -20, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-gotham-signal/30 via-gotham-signal/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 rounded-full glass-panel glow-border"
            >
              <span className="text-sm text-primary font-medium">
                {t.hero.tagline}
              </span>
            </motion.div>

            <div className="relative w-full max-w-3xl mx-auto h-32 mb-6">
              <Image
                src="/name.png"
                alt={personalInfo.name}
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(245,197,66,0.6)]"
                priority
              />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t.hero.role}
            </p>

            <p className="text-lg text-primary mb-8">{t.hero.subtitle}</p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button
                variant="glow"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                {t.hero.viewProjects}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                {t.hero.contactMe}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
}
