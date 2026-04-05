import { PlannerShell } from "@/components/planner-shell";

export const metadata = {
  title: "Planner — TempoOS",
  description:
    "Your adaptive weekly schedule with protected focus blocks, intelligent buffers, and AI-guided time allocation."
};

export default function PlannerPage() {
  return (
    <PlannerShell>
      <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
        <a href="/generate" className="cta-button-secondary min-w-[200px]">
          Regenerate Plan
        </a>
        <a href="/dashboard" className="cta-button-primary min-w-[200px]">
          View Weekly Insights
        </a>
      </div>
    </PlannerShell>
  );
}
