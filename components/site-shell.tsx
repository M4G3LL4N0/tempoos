export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs tracking-[0.18em] text-emerald-200/90 backdrop-blur">
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

const metrics = [
  { label: "Hours protected", value: "9.5 / week" },
  { label: "Schedule adherence", value: "87%" }, 
  { label: "Slip risk", value: "3.2%" },
  { label: "Peak focus utilization", value: "92%" }
];

const features = [
  {
    title: "AI Week Builder",
    text: "Turns goals, deadlines, and obligations into a realistic week that does not collapse the moment reality changes."
  },
  {
    title: "Focus Defense",
    text: "Protects deep work from meeting sprawl, fragmented scheduling, and the constant bleed of fake urgency."
  },
  {
    title: "Reality Buffers",
    text: "Learns where you underestimate time, then inserts intelligent buffers before your week fails."
  },
  {
    title: "Energy Mapping",
    text: "Aligns creative, analytical, admin, and recovery work to the windows where you actually perform best."
  },
  {
    title: "Slip Alerts",
    text: "Flags when your current plan is mathematically failing so you can adapt before the damage compounds."
  },
  {
    title: "Time Intelligence",
    text: "Shows where your life is going, where momentum is leaking, and what deserves the next hours of your week."
  }
];

const useCases = [
  "Founders managing multiple priorities",
  "Operators drowning in meetings",
  "Creators protecting high-value focus",
  "Students planning around real deadlines",
  "Professionals trying to reclaim their week",
  "Teams optimizing time allocation and output"
];

export function SiteShell() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-premium opacity-[0.07]" />
      <div className="pointer-events-none absolute left-[12%] top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />

      <section className="section-shell pt-8 md:pt-10">
        <header className="glass-panel rounded-full px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-lg font-semibold tracking-[0.22em] text-white">
              TEMPOOS
            </div>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#platform" className="transition hover:text-white">Platform</a>
              <a href="#use-cases" className="transition hover:text-white">Use cases</a>
              <a href="#vision" className="transition hover:text-white">Vision</a>
              <a href="#waitlist" className="transition hover:text-white">Waitlist</a>
            </nav>

            <a href="#waitlist" className="cta-button-primary whitespace-nowrap">
              Request access
            </a>
          </div>
        </header>
      </section>

      <section className="section-shell pb-24 pt-8 md:pb-32 md:pt-10">
        <div className="section-card soft-noise overflow-hidden rounded-[2rem] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <Pill>AI operating system for time allocation</Pill>

            <h1 className="hero-gradient-text mx-auto mt-7 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[1.02]">
              Stop losing days to chaos.
              <br />
              Build momentum that survives reality.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              TempoOS is a premium planning system for people whose calendars, goals,
              deadlines, and energy never fully line up. It builds your week, protects
              focus, adapts live, and helps your time move your life forward.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/generate" className="cta-button-primary min-w-[180px]">
                Generate Your Week
              </a>
              <a href="/dashboard" className="cta-button-secondary min-w-[180px]">
                See Dashboard
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="metric-card rounded-[1.5rem] p-5 text-left"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div
            id="platform"
            className="glass-panel-strong card-edge mt-8 overflow-hidden rounded-[2rem] p-4 md:p-6"
          >
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      TempoOS live plan
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Adaptive week engine
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Stable
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    ["Deep Work", "08:00–10:30", "Protected"],
                    ["Operator Block", "11:00–12:15", "Buffered"],
                    ["Meetings", "14:00–15:30", "Contained"],
                    ["Strategy", "16:00–18:00", "Peak window"]
                  ].map(([label, time, status]) => (
                    <div
                      key={label}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-white">{label}</p>
                          <p className="mt-1 text-xs text-slate-400">{time}</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-emerald-200">
                          {status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(143,248,212,0.12),rgba(139,164,255,0.05))] p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                  Time map
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  A control layer for the next 2, 8, and 40 hours of your life.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  TempoOS is not another to-do list. It is a decision system for how
                  finite hours get allocated across focus, deadlines, admin, recovery,
                  and ambition.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Rebalances when new meetings land",
                    "Adjusts plans when deadlines slip",
                    "Learns your actual pace over time",
                    "Defends high-value blocks automatically"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 px-4 py-4 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-shell py-24">
        <SectionHeading
          eyebrow="Core platform"
          title="Built like an operating system, not a productivity toy."
          description="The category is time allocation intelligence. The job is not to store tasks. The job is to decide what your next hours should become and keep them pointed at what matters."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-edge glass-panel rounded-[1.75rem] p-6"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(143,248,212,0.28),rgba(73,242,184,0.08))]" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="section-shell py-24">
        <div className="section-card rounded-[2rem] p-8 md:p-12">
          <SectionHeading
            eyebrow="Use cases"
            title="A system for ambitious people whose time keeps getting fragmented."
            description="Start with a premium wedge: founders, operators, creators, students, and professionals who feel the cost of bad time allocation every single week."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 px-5 py-5 text-sm leading-7 text-slate-200"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="section-shell py-24">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Why now
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Work is faster, noisier, and more fragmented than the systems people use to manage it.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Existing products help schedule tasks and meetings. TempoOS goes one layer
              higher: it manages the allocation logic of human time under pressure,
              uncertainty, and interruption.
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Long-term platform
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              The operating system for human time.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Start with weekly planning. Expand into teams, workload balancing, focus
              protection, schedule intelligence, analytics, and a time graph API that
              powers the next generation of work and life systems.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section-shell pb-28 pt-16">
        <div className="section-card rounded-[2rem] p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <Pill>Early access</Pill>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Join the first wave of TempoOS.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Start with a sharper weekly system now. Then expand into onboarding,
              waitlist capture, dashboards, AI scheduling, and live time analytics.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-[1fr_220px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-shell"
            />
            <button className="cta-button-primary h-full min-h-[56px] w-full">
              Request access
            </button>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">
            Premium static waitlist shell for now. Backend capture and onboarding flow can be connected next.
          </p>
        </div>
      </section>
    </main>
  );
}
