import { SectionHeading } from "@/components/site-shell";
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
        title="Not another calendar. Not another to-do list."
        description="TempoOS is a premium workflow for people whose weeks keep collapsing under misallocated hours. It plans your week, protects focus, and adapts when reality interrupts."
      />

      <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
        <a href="/generate" className="cta-button-primary min-w-[200px]">
          Generate Your Week
        </a>
        <a href="/dashboard" className="cta-button-secondary min-w-[200px]">
          See Weekly Insights
        </a>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="glass-panel rounded-[2rem] border border-white/10 p-6"
          >
            <div className="mb-5 h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(143,248,212,0.28),rgba(73,242,184,0.08))]" />
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
