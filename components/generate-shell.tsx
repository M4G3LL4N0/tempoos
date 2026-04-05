import { SectionHeading } from "@/components/site-shell";

const steps = [
  {
    title: "Priority Input",
    description: "Analyzing your top 3 goals and deadlines...",
    status: "complete",
    output: "Identified: Launch prep, Investor deck, Team hiring"
  },
  {
    title: "Calendar Mapping",
    description: "Synchronizing with your calendar...",
    status: "complete", 
    output: "12 fixed events mapped across 4 days"
  },
  {
    title: "Focus Allocation", 
    description: "Optimizing deep work blocks...",
    status: "active",
    output: "Morning peak focus protected x 4 mornings"
  },
  {
    title: "Buffer Insertion",
    description: "Calculating buffer requirements...",
    status: "pending",
    output: ""
  },
  {
    title: "Slip Risk Scan", 
    description: "Checking for overcommitment...",
    status: "pending",
    output: ""
  },
  {
    title: "Pressure Detection",
    description: "Assessing schedule tightness...", 
    status: "pending",
    output: ""
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
            className={`glass-panel rounded-[2rem] border ${
              step.status === 'complete' ? 'border-emerald-400/30' : 
              step.status === 'active' ? 'border-white/20' : 'border-white/10'
            } p-8`}
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  step.status === 'complete' ? 'bg-emerald-400/20 text-emerald-400' :
                  step.status === 'active' ? 'bg-white/[0.07] text-white' : 'bg-white/[0.03] text-slate-400'
                } text-xl font-semibold`}>
                  {step.status === 'complete' ? (
                    <CheckIcon className="h-6 w-6" />
                  ) : (
                    index + 1
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  {step.status === 'active' && (
                    <span className="animate-pulse rounded-full bg-emerald-400/[0.15] px-2 py-1 text-xs text-emerald-400">
                      LIVE
                    </span>
                  )}
                </div>
                <p className="text-slate-300">{step.description}</p>
                {step.output && (
                  <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3 text-sm font-medium text-emerald-300">
                    {step.output}
                  </div>
                )}
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
