"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  item: {
    id: string;
    label: string;
    icon: LucideIcon;
    href: string;
  };
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

export function NavItem({ item, isActive, isCollapsed, onClick }: NavItemProps) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
        "transition-colors duration-150 group",
        isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
      )}
    >
      {/* Active background — uses layoutId for smooth transition */}
      {isActive && (
        <motion.div
          layoutId="nav-active-bg"
          className="absolute inset-0 bg-accent-subtle rounded-lg border border-accent-glow"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {/* Hover background for inactive */}
      {!isActive && (
        <div className="absolute inset-0 rounded-lg bg-bg-elevated opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      )}

      {/* Icon */}
      <div className="relative z-10 flex-shrink-0">
        <Icon
          size={18}
          className={cn(
            "transition-colors",
            isActive ? "text-accent-primary" : "text-current"
          )}
        />
      </div>

      {/* Label */}
      {!isCollapsed && (
        <span className="relative z-10 text-sm font-medium truncate">{item.label}</span>
      )}

      {/* Active dot for collapsed state */}
      {isCollapsed && isActive && (
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1 h-4 rounded-full bg-accent-primary" />
      )}
    </button>
  );
}