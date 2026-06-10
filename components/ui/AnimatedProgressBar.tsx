"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedProgressBarProps {
  progress: number;
  color?: string;
  delay?: number;
}

export function AnimatedProgressBar({
  progress,
  color = "#7c6ef7",
  delay = 0,
}: AnimatedProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full">
      <div className="h-1.5 w-full bg-bg-elevated rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${progress}%` } : { width: "0%" }}
          transition={{
            duration: 1,
            delay,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      </div>
    </div>
  );
}