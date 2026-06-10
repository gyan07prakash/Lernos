import { generateActivityData } from "@/lib/activity";
import { BentoTile } from "./BentoTile";
import { cn } from "@/lib/utils";

function getColor(count: number): string {
  if (count === 0) return "bg-bg-elevated";
  if (count <= 1) return "bg-accent-primary/20";
  if (count <= 2) return "bg-accent-primary/40";
  if (count <= 3) return "bg-accent-primary/65";
  return "bg-accent-primary";
}

interface ActivityTileProps {
  className?: string;
}

const data = generateActivityData();

export function ActivityTile({ className }: ActivityTileProps) {
  const weeks: (typeof data)[] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <BentoTile className={cn("p-5", className)} glowColor="#7c6ef7">
      <p className="text-text-muted text-xs uppercase tracking-widest font-mono mb-4">
        Activity
      </p>

      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.count} sessions`}
                className={cn(
                  "w-3 h-3 rounded-sm flex-shrink-0 transition-opacity duration-150 hover:opacity-80",
                  getColor(day.count)
                )}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-text-muted text-xs">Last 12 weeks</p>
        <div className="flex items-center gap-1.5 text-text-muted text-xs">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((v) => (
            <div key={v} className={cn("w-2.5 h-2.5 rounded-sm", getColor(v))} />
          ))}
          <span>More</span>
        </div>
      </div>
    </BentoTile>
  );
}