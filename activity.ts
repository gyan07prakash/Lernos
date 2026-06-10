import type { ActivityDay } from "@/types";

export function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const now = new Date();

  for (let i = 84; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const rand = Math.random();
    days.push({
      date: date.toISOString().split("T")[0],
      count: rand > 0.55 ? Math.floor(rand * 6) + 1 : 0,
    });
  }

  return days;
}