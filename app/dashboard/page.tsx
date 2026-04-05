import { DashboardShell } from "@/components/dashboard-shell";

export const metadata = {
  title: "Dashboard — TempoOS",
  description:
    "Weekly time intelligence: focus protection, schedule pressure, slip risk detection, and adaptive rebalancing."
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
        <a href="/planner" className="cta-button-secondary min-w-[200px]">
          View Weekly Plan
        </a>
        <a href="/generate" className="cta-button-primary min-w-[200px]">
          Regenerate Plan
        </a>
      </div>
    </DashboardShell>
  );
}
