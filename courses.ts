import { createClient } from "@/lib/supabase/server";
import type { Course } from "@/types";

export async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase error fetching courses:", error.message);
    throw new Error("Failed to fetch courses from database.");
  }

  return data ?? [];
}