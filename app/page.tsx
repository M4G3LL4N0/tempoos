import { Pill } from "@/components/site-shell";

export const metadata = {
  title: "TempoOS — Your time is your real net worth",
  description: "TempoOS is the AI operating system for time allocation, focus protection, and adaptive weekly planning."
};

export default function HomePage() {
  return (
    <div className="grid min-h-[78vh] items-center gap-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
      <div>
        <Pill>AI operating system for time allocation</Pill>
        <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
          Your time is your real net worth.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          TempoOS helps ambitious people stop losing days to chaos. It builds your week,
          protects your focus, adapts when reality changes, and pushes your time toward
          what actually moves your life forward.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/waitlist"
            className="rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Join the waitlist
          </a>
          <a
            href="/product"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore the platform
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Pill>Weekly planning</Pill>
          <Pill>Focus protection</Pill>
          <Pill>Adaptive scheduling</Pill>
          <Pill>Time intelligence</Pill>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-glow backdrop-blur-2xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Week status</p>
                <p className="mt-2 text-2xl font-semibold text-white">Recovered 9.5 hrs</p>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                On track
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Deep Work", "08:00–10:30", "Protected"],
                ["Founder Ops", "11:00–12:30", "Buffered"],
                ["Calls / Meetings", "14:00–15:30", "Contained"],
                ["Strategy Block", "16:00–18:00", "Peak Window"]
              ].map(([label, time, status]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="mt-1 text-xs text-slate-400">{time}</p>
                    </div>
                    <span className="text-xs text-sky-300">{status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Priority alignment</p>
                <p className="mt-3 text-3xl font-semibold text-white">87%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Slip risk</p>
                <p className="mt-3 text-3xl font-semibold text-white">Low</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
