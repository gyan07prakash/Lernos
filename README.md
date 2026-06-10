# LearnOS — Student Dashboard

A high-fidelity, animated student learning dashboard built as part of a frontend intern challenge.

**Live Demo:** [https://lernos-1hdoigs0g-gyan07prakashs-projects.vercel.app/dashboard]

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

---

## Architecture Decisions

### Server / Client Component Split

The dashboard is intentionally split to maximize performance:

- **Server Components** handle all data fetching. `CourseGrid` and `getCourses()` run entirely on the server, meaning the Supabase query never exposes credentials to the browser.
- **Client Components** handle interactivity. The `Sidebar`, `NavItem`, `MobileNav`, `BentoGrid`, `BentoTile`, and `CourseCard` are all client components since they use Framer Motion animations and state.
- **Suspense boundary** wraps `CourseGrid` so skeleton loaders appear instantly while the database query resolves in the background.

### Supabase Integration

- Used `@supabase/ssr` to create a server-side Supabase client via `lib/supabase/server.ts`.
- `cookies()` from `next/headers` is awaited (required in Next.js 15+).
- Row Level Security (RLS) is enabled on the `courses` table with a public read policy, keeping the data secure while allowing unauthenticated reads for this prototype.
- Environment variables are prefixed with `NEXT_PUBLIC_` since they are needed both server and client side for the Supabase client initialization.

### Animation Strategy

All animations use `transform` and `opacity` exclusively to avoid layout shifts and stay on the GPU compositor thread:

- **Staggered entrance:** `BentoGrid` uses Framer Motion `variants` with `staggerChildren: 0.08` so tiles fade in sequentially on load.
- **Hover elevation:** Each `BentoTile` uses `whileHover` with `scale: 1.015` and spring physics (`stiffness: 300, damping: 20`) for a natural feel.
- **Sidebar active state:** `NavItem` uses `layoutId="nav-active-bg"` so the highlight smoothly transitions between nav items.
- **Progress bars:** `AnimatedProgressBar` uses `useInView` to trigger the fill animation only when the bar enters the viewport.

---

## Database Schema

```sql
CREATE TABLE courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text,
  progress integer,
  icon_name text,
  created_at timestamptz DEFAULT now()
);
```

---

## Local Setup

1. Clone the repository
2. Install dependencies:
```bash
   npm install --legacy-peer-deps
```
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
```bash
   cp .env.example .env.local
```
4. Create the `courses` table in your Supabase project and seed it:
```sql
   INSERT INTO courses (title, progress, icon_name) VALUES
     ('Advanced React Patterns', 75, 'Code2'),
     ('System Design Fundamentals', 40, 'Server'),
     ('Machine Learning with Python', 60, 'BrainCircuit'),
     ('Docker & Kubernetes', 25, 'Container');
```
5. Run the development server:
```bash
   npm run dev
```
6. Open [http://localhost:3000](http://localhost:3000)

---

## Challenges

- **Tailwind v4 breaking change:** `create-next-app` installed Tailwind v4 which moved the PostCSS plugin to `@tailwindcss/postcss` and dropped `tailwind.config.js` support. Downgraded to Tailwind v3 to maintain compatibility with the custom theme tokens.
- **Next.js 15 async cookies:** The `cookies()` API from `next/headers` became async in Next.js 15, requiring `await` on `createClient()` throughout the data layer.
- **Hydration mismatch:** The activity graph used `Math.random()` which produced different values on server vs client. Fixed by replacing random generation with a deterministic pattern array.