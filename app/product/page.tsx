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

      <FeatureCards items={features} />
    </>
  );
}
