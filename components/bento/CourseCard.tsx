"use client";

import * as Icons from "lucide-react";
import { BentoTile } from "./BentoTile";
import { AnimatedProgressBar } from "@/components/ui/AnimatedProgressBar";
import type { Course } from "@/types";
import { cn } from "@/lib/utils";


function getDynamicIcon(iconName: string): Icons.LucideIcon {
  const icon = Icons[iconName as keyof typeof Icons] as Icons.LucideIcon | undefined;
  return icon ?? Icons.BookOpen;
}

const ACCENT_COLORS = [
  { glow: "#7c6ef7", bg: "from-[#7c6ef7]/20 to-[#c084fc]/10", text: "text-[#7c6ef7]", border: "border-[#7c6ef7]/30" },
  { glow: "#34d399", bg: "from-[#34d399]/20 to-[#059669]/10", text: "text-[#34d399]", border: "border-[#34d399]/30" },
  { glow: "#f59e0b", bg: "from-[#f59e0b]/20 to-[#d97706]/10", text: "text-[#f59e0b]", border: "border-[#f59e0b]/30" },
  { glow: "#f472b6", bg: "from-[#f472b6]/20 to-[#ec4899]/10", text: "text-[#f472b6]", border: "border-[#f472b6]/30" },
];

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const Icon = getDynamicIcon(course.icon_name);

  return (
    <BentoTile className="p-5 min-h-[180px]" glowColor={accent.glow}>
      <div className="flex flex-col h-full gap-3">
        {/* Icon */}
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center",
            "bg-gradient-to-br border",
            accent.bg,
            accent.border,
            accent.text
          )}
        >
          <Icon size={18} />
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3 className="font-display font-semibold text-text-primary text-base leading-snug mb-1">
            {course.title}
          </h3>
          <p className="text-text-muted text-xs font-mono">{course.progress}% complete</p>
        </div>

        {/* Animated progress bar */}
        <AnimatedProgressBar
          progress={course.progress}
          color={accent.glow}
          delay={index * 0.1 + 0.3}
        />
      </div>
    </BentoTile>
  );
}