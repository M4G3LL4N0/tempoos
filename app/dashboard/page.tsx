import { DashboardShell } from "@/components/dashboard-shell";

export const metadata = {
  title: "Dashboard — TempoOS",
  description:
    "Weekly time intelligence: focus protection, schedule pressure, slip risk detection, and adaptive rebalancing."
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="mt-14 space-y-6">
        <div className="glass-panel rounded-2xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white">Week in review</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { 
                label: "Focus defended",
                value: "9.2h", 
                change: "+15%",
                isPositive: true
              },
              {
                label: "Slip risk prevented",
                value: "3",
                change: "-67%",  
                isPositive: true
              },
              {
                label: "Buffer utilized",
                value: "62%",
                change: "+8%",
                isPositive: false
              }
            ].map((metric) => (
              <div key={metric.label} className="space-y-2">
                <p className="text-sm text-slate-400">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white">{metric.value}</span>
                  <span className={`text-sm ${
                    metric.isPositive ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="/planner" className="cta-button-secondary min-w-[200px]">
            View Weekly Plan
          </a>
          <a href="/generate" className="cta-button-primary min-w-[200px]">
            Optimize Next Week
          </a>
        </div>
      </div>
    </DashboardShell>
  );
}
