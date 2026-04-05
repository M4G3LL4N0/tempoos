import { PlannerShell } from "@/components/planner-shell";

export const metadata = {
  title: "Planner — TempoOS",
  description:
    "Your adaptive weekly schedule with protected focus blocks, intelligent buffers, and AI-guided time allocation."
};

export default function PlannerPage() {
  return (
    <PlannerShell>
      <div className="mt-14 space-y-6">
        <div className="glass-panel rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_8px_2px_rgba(74,222,128,0.3)]" />
              <h3 className="text-lg font-semibold text-white">Week at a glance</h3>
            </div>
            <div className="text-sm text-slate-400">35% complete</div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span>Schedule pressure</span>
                <span className="rounded-full bg-red-400/10 px-2 py-1 text-xs text-red-400">Moderate</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-red-400/90 to-amber-400/90" />
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">Focus utilization</div>
              <div className="text-xl font-semibold text-emerald-400">82%</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="/generate" className="cta-button-secondary min-w-[200px]">
            Regenerate Plan
          </a>
          <a href="/dashboard" className="cta-button-primary min-w-[200px]">
            View Dashboard
          </a>
        </div>
      </div>
    </PlannerShell>
  );
}
