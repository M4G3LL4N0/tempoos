import { SectionHeading, FeatureCards } from "@/components/site-shell";
import { features } from "@/lib/constants";

export const metadata = {
  title: "Product — TempoOS",
  description: "AI-powered time allocation and focus protection system"
};

export default function ProductPage() {
  return (
    <>
      <SectionHeading
        eyebrow="AI Time Operating System"
        title="Reclaim Your Most Valuable Asset"
        description="TempoOS is the premium workflow for professionals who want to take control of their time. It's not just a calendar - it's your personal time operating system."
      />

      <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
        <a href="/generate" className="cta-button-primary min-w-[200px]">
          Generate Your Week
        </a>
        <a href="/dashboard" className="cta-button-secondary min-w-[200px]">
          See Weekly Insights
        </a>
      </div>

      <div className="mt-24 section-shell">
        <div className="glass-panel p-8">
          <h2 className="text-2xl font-semibold text-white">Core Principles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card-edge soft-noise p-6">
              <h3 className="text-lg font-semibold text-emerald-300">Time Allocation</h3>
              <p className="mt-2 text-sm text-muted">
                Intelligent distribution of hours based on priorities and energy levels
              </p>
            </div>
            <div className="card-edge soft-noise p-6">
              <h3 className="text-lg font-semibold text-emerald-300">Focus Protection</h3>
              <p className="mt-2 text-sm text-muted">
                Automated shielding of deep work periods from interruptions
              </p>
            </div>
            <div className="card-edge soft-noise p-6">
              <h3 className="text-lg font-semibold text-emerald-300">Adaptive Planning</h3>
              <p className="mt-2 text-sm text-muted">
                Dynamic adjustments when life throws curveballs
              </p>
            </div>
          </div>
        </div>
      </div>

      <FeatureCards items={features} />

      <div className="mt-24 section-shell">
        <div className="glass-panel p-8">
          <h2 className="text-2xl font-semibold text-white">What Our Users Say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="card-edge soft-noise p-6">
              <p className="text-sm text-muted">
                "TempoOS has fundamentally changed how I approach my week. I'm getting 20% more done with less stress."
              </p>
              <div className="mt-3 text-xs text-emerald-300">— Sarah, Product Manager</div>
            </div>
            <div className="card-edge soft-noise p-6">
              <p className="text-sm text-muted">
                "The focus protection feature alone is worth it. I've never been this productive before."
              </p>
              <div className="mt-3 text-xs text-emerald-300">— James, Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
