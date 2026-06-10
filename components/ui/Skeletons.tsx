import { cn } from "@/lib/utils";

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton rounded-xl", className)} />;
}

export function CourseSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="col-span-full">
      <Skeleton className="h-4 w-32 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-bg-surface border border-bg-border p-5 min-h-[180px] flex flex-col gap-3"
          >
            <Skeleton className="w-10 h-10 rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <div className="mt-auto">
              <Skeleton className="h-1.5 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FullPageSkeleton() {
  return (
    <section className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Skeleton className="h-3 w-24 mb-2" />
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Skeleton className="col-span-1 md:col-span-2 lg:col-span-3 h-40 rounded-2xl" />
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="col-span-1 md:col-span-2 h-48 rounded-2xl" />
      </div>
    </section>
  );
}