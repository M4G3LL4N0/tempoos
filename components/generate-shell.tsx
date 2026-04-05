import { SectionHeading } from "@/components/site-shell";

const steps = [
  {
    title: "Priority Input",
    description: "Share your key goals, deadlines, and constraints for the week"
  },
  {
    title: "Calendar Mapping",
    description: "Analyzes existing meetings and time-bound obligations"
  },
  {
    title: "Focus Allocation",
    description: "AI determines optimal deep work, creative, and admin blocks"
  },
  {
    title: "Buffer Insertion",
    description: "Automatically adds intelligence-based protective buffers"
  },
  {
    title: "Slip Risk Scan",
    description: "Checks for mathematically untenable allocations"
  },
  {
    title: "Plan Generation",
    description: "Creates your adaptive weekly schedule"
  }
];

export function GenerateShell() {
  return (
    <div className="section-shell pt-10">
      <SectionHeading
        eyebrow="AI Time Allocation"
        title="Generate Your Optimal Week"
        description="TempoOS builds mathematically defensible weekly plans that protect focus and adapt to reality."
      />

      <div className="mt-14 space-y-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="glass-panel rounded-[2rem] border border-white/10 p-8"
          >
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-xl font-semibold text-emerald-200">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-slate-300">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
        <a href="/planner" className="cta-button-primary min-w-[200px]">
          View Weekly Plan
        </a>
        <a href="/dashboard" className="cta-button-secondary min-w-[200px]">
          See Dashboard
        </a>
      </div>
    </div>
  );
}
