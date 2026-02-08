"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTransition } from "@/components/layout/SectionTransition";
import { InitialLogoAnimation } from "@/components/layout/InitialLogoAnimation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <InitialLogoAnimation />
        <SectionTransition />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
