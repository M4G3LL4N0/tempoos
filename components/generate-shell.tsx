const steps = [
  {
    title: "Ingest goals",
    detail: "Parsing priorities, deadlines, and desired outcomes.",
    status: "complete"
  },
  {
    title: "Map constraints",
    detail: "Reading meetings, fixed commitments, and unavailable time.",
    status: "complete"
  },
  {
    title: "Allocate focus windows",
    detail: "Placing deep work into peak-energy blocks.",
    status: "complete"
  },
  {
    title: "Insert buffers",
    detail: "Protecting the week from estimation error and spillover.",
    status: "active"
  },
  {
    title: "Detect overload",
    detail: "Stress-testing the schedule for collapse points.",
    status: "pending"
  },
  {
    title: "Output optimized week",
    detail: "Generating the final tempo plan, score, and recommendations.",
    status: "pending"
  }
] as const;

const generatedBlocks = [
  {
    title: "Deep Work Block",
    time: "Mon · 08:00–10:30",
    note: "Reserved for strategy, writing, and highest-leverage execution."
  },
  {
    title: "Contained Meetings",
    time: "Tue · 14:00–15:30",
    note: "Clustered to reduce fragmentation across the rest of the day."
  },
  {
    title: "Peak Window",
    time: "Wed · 09:00–12:00",
    note: "Protected creative block aligned to strongest cognitive hours."
  },
  {
    title: "Recovery Buffer",
    time: "Sat · 10:00–12:00",
    note: "Preserved to prevent compounding fatigue and schedule degradation."
  }
];

const recommendations = [
  "Move one Thursday meeting to Tuesday afternoon to recover a protected morning block.",
  "Shift low-value admin into buffered execution windows after 11:30.",
  "Preserve Saturday recovery time to stabilize next-week output.",
  "Keep Monday and Wednesday mornings protected from reactive work."
];

export function GenerateShell() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid-premium opacity-[0.06]" />
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-6 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-4 md:px-6 md:py-6">
        <header className="glass-panel rounded-[1.75rem] px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold tracking-[0.22em] text-white">
                TEMPOOS
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                AI generation preview
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/planner"
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                Open planner
              </a>
              <a
                href="/dashboard"
                className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200"
              >
                View dashboard
              </a>
            </div>
          </div>
        </header>

        <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Generate weekly plan
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              AI time allocation engine
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              TempoOS converts goals, calendar constraints, energy windows, and
              schedule pressure into an optimized weekly structure before your
              week starts breaking apart.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Input goals
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    Finalize roadmap priorities
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    Protect 3 deep-work blocks
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    Reduce meeting fragmentation
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Constraints
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    Existing meetings Tue / Thu
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    Peak energy: mornings
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    Saturday reserved for recovery
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(143,248,212,0.10),rgba(255,255,255,0.02))] p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Generation stages
              </p>

              <div className="mt-5 space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xl font-semibold ${
                          step.status === "complete"
                            ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
                            : step.status === "active"
                              ? "border-indigo-300/20 bg-indigo-300/10 text-white"
                              : "border-white/10 bg-white/[0.04] text-slate-400"
                        }`}
                      >
                        {step.status === "complete" ? (
                          <span className="text-lg leading-none">✓</span>
                        ) : (
                          index + 1
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-base font-semibold text-white">
                            {step.title}
                          </p>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                            {step.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="section-card rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Output preview
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Generated week structure
              </h2>

              <div className="mt-6 grid gap-4">
                {generatedBlocks.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <p className="text-lg font-semibold text-white">{block.title}</p>
                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                        {block.time}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {block.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Weekly projection
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="metric-card rounded-[1.4rem] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Weekly score
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">84 / 100</p>
                </div>

                <div className="metric-card rounded-[1.4rem] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Slip risk
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-emerald-300">Low</p>
                </div>

                <div className="metric-card rounded-[1.4rem] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Focus recovered
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">+3.2h</p>
                </div>

                <div className="metric-card rounded-[1.4rem] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Pressure point
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">Thu</p>
                </div>
              </div>
            </div>

            <div className="green-glow rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/80">
                Recommendations
              </p>

              <div className="mt-5 space-y-3">
                {recommendations.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-emerald-100/15 bg-black/10 px-4 py-4 text-sm leading-7 text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
