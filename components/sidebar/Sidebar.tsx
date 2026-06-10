"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  User,
  ChevronLeft,
  Zap,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "courses", label: "My Courses", icon: BookOpen, href: "/courses" },
  { id: "progress", label: "Progress", icon: BarChart3, href: "/progress" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState("dashboard");

  return (
    <motion.nav
      className={cn(
        "hidden lg:flex fixed left-0 top-0 h-full z-40",
        "flex-col bg-bg-surface border-r border-bg-border",
        "transition-all duration-300"
      )}
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Logo area */}
      <div className="flex items-center h-16 px-4 border-b border-bg-border flex-shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0 shadow-glow-sm">
            <Zap size={16} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                className="font-display font-bold text-text-primary text-lg truncate"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
              >
                LearnOS
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "ml-auto p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-elevated",
            "transition-colors duration-150 flex-shrink-0"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <motion.div
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <ChevronLeft size={16} />
          </motion.div>
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-hidden">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            isCollapsed={collapsed}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </nav>

      {/* User avatar at bottom */}
      <div className="p-3 border-t border-bg-border">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-bg-elevated transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                className="min-w-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-sm font-medium text-text-primary truncate">Gyan Prakash</p>
                <p className="text-xs text-text-muted truncate">CS & Engineering</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}