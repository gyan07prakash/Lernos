import { AlertTriangle } from "lucide-react";

export function ErrorTile({ message }: { message: string }) {
  return (
    <div className="rounded-2xl bg-bg-surface border border-red-500/20 p-6 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
        <AlertTriangle size={18} className="text-red-400" />
      </div>
      <div>
        <p className="text-text-primary font-medium text-sm">Something went wrong</p>
        <p className="text-text-muted text-xs mt-0.5">{message}</p>
      </div>
    </div>
  );
}