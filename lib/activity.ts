import type { ActivityDay } from "@/types";

export function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const now = new Date();

  const pattern = [0, 3, 5, 0, 4, 6, 2, 0, 1, 5, 3, 0, 6, 4, 0, 2, 5, 0, 3, 6,
    1, 0, 4, 5, 0, 6, 2, 3, 0, 1, 4, 0, 5, 3, 6, 0, 2, 4, 0, 5,
    1, 3, 0, 6, 4, 2, 0, 5, 3, 0, 1, 4, 6, 0, 2, 5, 3, 0, 4, 1,
    6, 0, 3, 5, 2, 0, 4, 6, 0, 1, 3, 5, 0, 2, 4, 6, 0, 3, 5, 1,
    0, 4, 6, 2, 0];

  for (let i = 84; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    days.push({
      date: date.toISOString().split("T")[0],
      count: pattern[84 - i] ?? 0,
    });
  }

  return days;
}