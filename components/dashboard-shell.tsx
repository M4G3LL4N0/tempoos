const todayBlocks = [
  {
    title: "Deep Work",
    time: "08:00–10:30",
    status: "Protected",
    detail: "Product strategy, writing, and high-focus execution."
  },
  {
    title: "Operator Block",
    time: "11:00–12:15",
    status: "Buffered",
    detail: "Admin, coordination, email, and async cleanup."
  },
  {
    title: "Meetings",
    time: "14:00–15:30",
    status: "Contained",
    detail: "Compressed into a controlled communication window."
  },
  {
    title: "Strategy Window",
    time: "16:00–18:00",
    status: "Peak",
    detail: "Reserved for high-value thinking and roadmap work."
  }
];

const priorities = [
  {
    title: "Finalize weekly operating plan",
    tag: "Critical",
    note: "Needs 90 focused minutes before noon."
  },
  {
    title: "Reduce Thursday meeting load",
    tag: "Optimization",
    note: "Current concentration is damaging deep work quality."
  },
  {
    title: "Protect Saturday recovery block",
    tag: "Recovery",
    note: "Energy drop risk rises sharply without it."
  }
];

const insights = [
  "Your week is strongest when strategy work happens before noon on Monday and Tuesday.",
  "Meeting clustering is improving. You recovered 2.1 hours of fragmentation this week.",
  "You consistently underestimate admin overhead by 22–28 minutes per day.",
  "Current schedule supports momentum, but Thursday is still your weakest day."
];

const allocations = [
  { label: "Deep work", value: "31%", width: "31%" },
  { label: "Execution / Ops", value: "24%", width: "24%" },
  { label: "Meetings", value: "17%", width: "17%" },
  { label: "Admin", value: "11%", width: "11%" },
  { label: "Recovery", value: "17%", width: "17%" }
];

function SideNavLink({
  label,
  active = false
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={[
        "flex items-center rounded-2xl px-4 py-3 text-sm transition",
        active
          ? "border border-emerald-300/20 bg-emerald-300/10 text-white"
          : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
      ].join(" ")}
    >
      {label}
    </a>
  );
}

function MetricCard({
  label,
  value,
  tone = "default"
}: {
  label: string;
  value: string;
  tone?: "default" | "green" | "blue";
}) {
  const toneClass =
    tone === "green"
      ? "bg-[linear-gradient(180deg,rgba(143,248,212,0.09),rgba(255,255,255,0.02))]"
      : tone === "blue"
        ? "bg-[linear-gradient(180deg,rgba(139,164,255,0.10),rgba(255,255,255,0.02))]"
        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]";

  return (
    <div className={`metric-card rounded-[1.5rem] p-5 ${toneClass}`}>
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

export function DashboardShell() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid-premium opacity-[0.06]" />
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[14%] top-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-4 py-4 md:px-6 md:py-6">
        <header className="glass-panel rounded-[1.75rem] px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold tracking-[0.22em] text-white">
                TEMPOOS
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                Time allocation dashboard
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Week 14
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                System stable
              </div>
            </div>
          </div>
        </header>

        <div className="mt-4 grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="glass-panel h-fit rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Control center
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">Today</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Monday is optimized for deep work, roadmap execution, and controlled communication.
              </p>
            </div>

            <nav className="mt-4 space-y-2">
              <SideNavLink label="Planner" />
              <SideNavLink label="Overview" active />
              <SideNavLink label="Week Plan" />
              <SideNavLink label="Focus Blocks" />
              <SideNavLink label="Time Allocation" />
              <SideNavLink label="Insights" />
              <SideNavLink label="Settings" />
            </nav>

            <div className="green-glow mt-4 rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">
                Core promise
              </p>
              <p className="mt-3 text-lg font-medium text-white">
                Build a week that does not collapse under reality.
              </p>
            </div>
          </aside>

          <section className="space-y-4">
            <div className="section-card rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Adaptive weekly system
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Your week is aligned.
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                    TempoOS is defending your highest-value hours, containing schedule drift,
                    and preserving momentum across strategy, execution, and recovery.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <MetricCard label="Recovered" value="9.5h" tone="green" />
                  <MetricCard label="Alignment" value="87%" tone="blue" />
                  <MetricCard label="Slip risk" value="Low" />
                  <MetricCard label="Focus gain" value="+31%" tone="green" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 2xl:grid-cols-[1.15fr_0.85fr]">
              <div className="glass-panel rounded-[2rem] p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Today’s timeline
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      Protected schedule blocks
                    </h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    Live preview
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {todayBlocks.map((block) => (
                    <div
                      key={block.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 md:p-5"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <p className="text-lg font-semibold text-white">{block.title}</p>
                            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                              {block.status}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-400">{block.time}</p>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                            {block.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass-panel rounded-[2rem] p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Week health
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Stability profile
                  </h2>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Peak hours
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">12.5h</p>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Overload risk
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-emerald-300">Managed</p>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Meeting density
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">Contained</p>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Recovery blocks
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">Protected</p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-[2rem] p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Time allocation
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Weekly distribution
                  </h2>

                  <div className="mt-6 space-y-4">
                    {allocations.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-slate-300">{item.label}</span>
                          <span className="text-slate-400">{item.value}</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-white/[0.05]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#8ff8d4_0%,#49f2b8_50%,#2ad890_100%)]"
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="glass-panel rounded-[2rem] p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  System insights
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Adaptive intelligence
                </h2>

                <div className="mt-6 space-y-3">
                  {insights.map((insight) => (
                    <div
                      key={insight}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-200"
                    >
                      {insight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Next priorities
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Highest-leverage actions
                </h2>

                <div className="mt-6 space-y-4">
                  {priorities.map((priority) => (
                    <div
                      key={priority.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 md:p-5"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">
                            {priority.title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-300">
                            {priority.note}
                          </p>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
                          {priority.tag}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="green-glow mt-6 rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">
                    Weekly score
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-white">84 / 100</p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-emerald-50/90">
                    TempoOS projects a strong week if current protection rules remain in place.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
