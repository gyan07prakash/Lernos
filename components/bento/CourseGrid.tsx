import { getCourses } from "@/lib/courses";
import { CourseCard } from "./CourseCard";
import { ErrorTile } from "@/components/ui/ErrorTile";
import { cn } from "@/lib/utils";

interface CourseGridProps {
  className?: string;
}

export async function CourseGrid({ className }: CourseGridProps) {
  let courses;

  try {
    courses = await getCourses();
  } catch {
    return (
      <div className={cn("col-span-full", className)}>
        <ErrorTile message="Could not load courses. Please check your database connection." />
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className={cn("col-span-full", className)}>
        <ErrorTile message="No courses found. Add some courses to your Supabase table." />
      </div>
    );
  }

  return (
    <>
      {/* Section label spanning the full grid row */}
      <div className={cn("col-span-full mt-2", className)}>
        <p className="text-text-muted text-xs uppercase tracking-widest font-mono mb-4">
          Active Courses · {courses.length}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}