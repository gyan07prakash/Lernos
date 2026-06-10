"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart3, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_NAV = [
  { id: "dashboard", label: "Home", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
];

export function MobileNav() {
  const [activeId, setActiveId] = useState("dashboard");

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-surface border-t border-bg-border px-2 pb-safe">
      <div className="flex items-center justify-around h-16">
        {MOBILE_NAV.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl",
                "transition-colors duration-150",
                isActive ? "text-accent-primary" : "text-text-muted"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute inset-0 bg-accent-subtle rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={20} className="relative z-10" />
              <span className="relative z-10 text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}