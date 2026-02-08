"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-gotham-darker via-gotham-dark to-gotham-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-display font-bold text-primary text-glow mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Lost in the <span className="text-primary">Shadows</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for has vanished into the Gotham night.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button variant="glow" size="lg">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
