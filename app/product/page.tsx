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
        eyebrow="Core platform"
        title="Built to turn ambition into a survivable week."
        description="Every feature is designed around one job: helping your life stop collapsing under misallocated hours, interruptions, and unrealistic plans."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
