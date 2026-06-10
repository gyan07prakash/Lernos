import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileNav } from "@/components/sidebar/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-bg-base">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 min-w-0 lg:ml-64 xl:ml-72 pb-20 lg:pb-0">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}