import { SectionHeading } from "@/components/ui";

export const metadata = {
  title: "Vision — TempoOS",
  description: "The operating system for human time and focus"
};

export default function VisionPage() {
  return (
    <>
      <SectionHeading
        eyebrow="The idea"
        title="Not another calendar. Not another to-do list."
        description="TempoOS is built around a bigger truth: most people do not have a task problem. They have a time allocation problem under uncertainty. The system is meant to decide what your next hours should become — and defend them."
      />

      <div className="mt-14 space-y-8">
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8">
          <h3 className="text-xl font-semibold text-white">The Problem</h3>
          <p className="mt-4 text-slate-300 leading-7">
            Modern knowledge work is a series of interruptions, context switches, and reactive decisions. 
            Without a system to protect and allocate time, even the most ambitious people lose weeks to chaos.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
          <h3 className="text-xl font-semibold text-white">The Solution</h3>
          <p className="mt-4 text-slate-300">
            TempoOS acts as a control layer between your goals and reality. It learns your real pace, 
            protects your focus, and adapts when life happens. The result is weeks that actually 
            move your life forward.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
          <h3 className="text-xl font-semibold text-white">The Future</h3>
          <p className="mt-4 text-slate-300">
            We're building the operating system for human time — a platform that understands 
            energy, focus, recovery, and momentum at a fundamental level.
          </p>
        </div>
      </div>

      <SectionHeading 
        eyebrow="How TempoOS Works"
        title="From Chaos to Control"
        description="Four core steps transform fragmented weeks into adaptive, mathematically-defensible time allocation"
        className="mt-24"
      />

      <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
        <a href="/generate" className="cta-button-primary min-w-[200px]">
          Generate Your Week
        </a>
        <a href="/dashboard" className="cta-button-secondary min-w-[200px]">
          See Weekly Insights
        </a>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: "Input",
            description: "Goals, constraints, priorities"
          },
          {
            name: "Model", 
            description: "AI generates optimal allocation"
          },
          {
            name: "Adapt",
            description: "Live adjustments to reality"
          },
          {
            name: "Output",
            description: "Defensible weekly plan"
          }
        ].map((item) => (
          <div key={item.name} className="glass-panel rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
