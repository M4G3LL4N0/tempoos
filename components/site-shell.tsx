function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

const features = [
  {
    title: "AI Week Builder",
    text: "Turns goals, deadlines, and obligations into a realistic plan that survives real life."
  },
  {
    title: "Focus Defense",
    text: "Protects deep work from meeting sprawl, app-switching, and fake urgency."
  },
  {
    title: "Reality Buffers",
    text: "Learns your planning fallacy and adds the right amount of time where you always underestimate."
  },
  {
    title: "Energy Mapping",
    text: "Schedules creative, analytical, and admin work into the hours where you are actually strongest."
  },
  {
    title: "Slip Alerts",
    text: "Warns you early when your week is mathematically collapsing before the damage compounds."
  },
  {
    title: "Time Analytics",
    text: "Shows where your life is really going, not where you hoped it was going."
  }
];

const steps = [
  "Connect your calendar, priorities, and deadlines",
  "Let TempoOS build your week automatically",
  "Watch it re-balance when reality changes",
  "Finish each week with clarity, scorecards, and momentum"
];

export function SiteShell() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-10">
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-[0.22em] text-white">TEMPOOS</div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#vision" className="transition hover:text-white">Vision</a>
          </nav>
        </header>

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
                href="#waitlist"
                className="rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Join the waitlist
              </a>
              <a
                href="#features"
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
      </section>

      <section id="vision" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          eyebrow="The idea"
          title="Not another calendar. Not another to-do list."
          description="TempoOS is built around a bigger truth: most people do not have a task problem. They have a time allocation problem under uncertainty. The system is meant to decide what your next hours should become — and defend them."
        />
      </section>

      <section id="features" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
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
      </section>

      <section id="how" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <SectionHeading
          eyebrow="How it works"
          title="A system that adapts when reality hits."
          description="TempoOS starts simple, then compounds. It learns your real pace, your real capacity, and your real life."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-sm text-sky-300">0{index + 1}</div>
              <p className="mt-4 text-lg font-medium leading-7 text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Why it matters</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            The people who control their hours control the direction of their lives.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            TempoOS is the beginning of a larger platform: a control layer for human time,
            focus, goals, tradeoffs, recovery, and momentum.
          </p>
        </div>
      </section>

      <section id="waitlist" className="relative mx-auto max-w-4xl px-6 pb-28 pt-8 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Early access</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Join the first wave of TempoOS.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Start with a premium landing page now, then expand into onboarding, waitlist capture,
            dashboards, AI scheduling, and analytics.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="w-full max-w-md rounded-full border border-white/10 bg-slate-950/70 px-5 py-4 text-left text-sm text-slate-500">
              email capture coming next
            </div>
            <button className="rounded-full border border-white/10 bg-white px-6 py-4 text-sm font-medium text-slate-950">
              Request access
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
