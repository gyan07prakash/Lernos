"use client";

import { Clock, Trophy, Flame } from "lucide-react";
import { BentoTile } from "./BentoTile";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Clock,
  Trophy,
  Flame,
};

interface StatsTileProps {
  label: string;
  value: number;
  unit: string;
  icon: keyof typeof ICON_MAP;
  accent?: boolean;
  className?: string;
}

export function StatsTile({ label, value, unit, icon, accent, className }: StatsTileProps) {
  const Icon = ICON_MAP[icon];
  const glowColor = accent ? "#f59e0b" : "#7c6ef7";

  return (
    <BentoTile className={cn("p-5 min-h-[110px]", className)} glowColor={glowColor}>
      <div className="flex items-start justify-between h-full">
        <div>
          <p className="text-text-muted text-xs uppercase tracking-widest font-mono mb-2">
            {label}
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-3xl font-bold text-text-primary">{value}</span>
            <span className="text-text-secondary text-sm">{unit}</span>
          </div>
        </div>
        <div
          className={cn(
            "w-9 h-9 rounded-xl flex items-center justify-center",
            accent
              ? "bg-warning/15 border border-warning/25 text-warning"
              : "bg-accent-subtle border border-accent-glow text-accent-primary"
          )}
        >
          <Icon size={16} />
        </div>
      </div>
    </BentoTile>
  );
}