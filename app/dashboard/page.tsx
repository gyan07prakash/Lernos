import { Suspense } from "react";
import { HeroTile } from "@/components/bento/HeroTile";
import { CourseGrid } from "@/components/bento/CourseGrid";
import { ActivityTile } from "@/components/bento/ActivityTile";
import { StatsTile } from "@/components/bento/StatsTile";
import { CourseSkeleton } from "@/components/ui/Skeletons";
import { BentoGrid } from "@/components/bento/BentoGrid";

const USER = {
  name: "Gyan",
  streak: 12,
  totalHours: 47,
  completedCourses: 3,
};

export default function DashboardPage() {
  return (
    <section className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <header className="mb-6 lg:mb-8">
        <p className="text-text-muted font-mono text-xs uppercase tracking-widest mb-1">
          Dashboard
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
          Command Center
        </h1>
      </header>

      <BentoGrid>
        <HeroTile user={USER} className="col-span-1 md:col-span-2 lg:col-span-3" />
        <StatsTile label="Hours Learned" value={USER.totalHours} unit="hrs" icon="Clock" className="col-span-1" />
        <StatsTile label="Completed" value={USER.completedCourses} unit="courses" icon="Trophy" className="col-span-1" />
        <StatsTile label="Day Streak" value={USER.streak} unit="days" icon="Flame" accent className="col-span-1" />
        <ActivityTile className="col-span-1 md:col-span-2 lg:col-span-2" />
        <Suspense fallback={<CourseSkeleton count={4} />}>
          <CourseGrid className="col-span-1 md:col-span-2 lg:col-span-3" />
        </Suspense>
      </BentoGrid>
    </section>
  );
}