import { SectionHeading } from "@/components/site-shell";

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
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
          <h3 className="text-xl font-semibold text-white">The Problem</h3>
          <p className="mt-4 text-slate-300">
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
    </>
  );
}
