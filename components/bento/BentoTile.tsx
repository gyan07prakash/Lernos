"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tileVariants } from "./BentoGrid";

interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function BentoTile({ children, className, glowColor = "#7c6ef7" }: BentoTileProps) {
  return (
    <motion.article
      className={cn(
        "relative rounded-2xl bg-bg-surface border border-bg-border",
        "overflow-hidden grain-overlay",
        className
      )}
      variants={tileVariants}
      whileHover={{
        scale: 1.015,
        borderColor: `${glowColor}50`,
        boxShadow: `0 0 0 1px ${glowColor}30, 0 8px 32px ${glowColor}15`,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${glowColor}12 0%, transparent 60%), radial-gradient(ellipse at 100% 100%, #c084fc0a 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}