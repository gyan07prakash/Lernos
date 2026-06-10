"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { BentoTile } from "./BentoTile";
import { tileVariants } from "./BentoGrid";
import type { UserProfile } from "@/types";
import { cn } from "@/lib/utils";

interface HeroTileProps {
  user: UserProfile;
  className?: string;
}

const timeGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
};

export function HeroTile({ user, className }: HeroTileProps) {
  return (
    <BentoTile className={cn("p-6 min-h-[160px]", className)} glowColor="#7c6ef7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 h-full">
        {/* Greeting */}
        <div>
          <motion.p
            className="text-text-muted font-mono text-xs uppercase tracking-widest mb-1"
            variants={tileVariants}
          >
            {timeGreeting()}
          </motion.p>
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2"
            variants={tileVariants}
          >
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              {user.name}
            </span>
          </motion.h2>
          <p className="text-text-secondary text-sm">
            You&apos;re on a roll — keep pushing forward today.
          </p>
        </div>

        {/* Streak badge */}
        <motion.div
          className="flex-shrink-0 flex items-center gap-3 bg-bg-elevated border border-bg-border rounded-xl px-5 py-3"
          whileHover={{
            scale: 1.03,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warning/20 to-orange-500/20 border border-warning/30 flex items-center justify-center">
            <Flame size={20} className="text-warning animate-glow-pulse" />
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-text-primary leading-none">
              {user.streak}
            </p>
            <p className="text-text-muted text-xs mt-0.5">day streak</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-accent-secondary/10 blur-3xl pointer-events-none" />
    </BentoTile>
  );
}