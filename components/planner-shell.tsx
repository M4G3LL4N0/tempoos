const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const hours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00"
];

const blocks = [
  {
    title: "Deep Work",
    day: 0,
    start: 0,
    span: 2,
    tone:
      "bg-[linear-gradient(180deg,rgba(143,248,212,0.22),rgba(42,216,144,0.14))] border-emerald-300/20",
    text: "Strategy + writing"
  },
  {
    title: "Founder Ops",
    day: 0,
    start: 3,
    span: 1,
    tone:
      "bg-[linear-gradient(180deg,rgba(139,164,255,0.18),rgba(139,164,255,0.10))] border-indigo-300/20",
    text: "Admin + execution"
  },
  {
    title: "Meetings",
    day: 1,
    start: 5,
    span: 2,
    tone:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] border-white/10",
    text: "Contained cluster"
  },
  {
    title: "Peak Window",
    day: 2,
    start: 1,
    span: 3,
    tone:
      "bg-[linear-gradient(180deg,rgba(143,248,212,0.18),rgba(139,164,255,0.10))] border-emerald-200/20",
    text: "Creative systems work"
  },
  {
    title: "Review + Reset",
    day: 3,
    start: 8,
    span: 2,
    tone:
      "bg-[linear-gradient(180deg,rgba(157,124,255,0.18),rgba(139,164,255,0.08))] border-violet-300/20",
    text: "Weekly adaptation"
  },
  {
    title: "Recovery",
    day: 5,
    start: 2,
    span: 3,
    tone:
      "bg-[linear-gradient(180deg,rgba(143,248,212,0.16),rgba(255,255,255,0.04))] border-emerald-300/20",
    text: "Protected block"
  }
];

const aiAdjustments = [
  {
    title: "Compress meetings on Tuesday",
    detail: "Recover 55 minutes of fragmentation by consolidating two short calls.",
    impact: "+0.8 weekly score"
  },
  {
    title: "Move admin work out of peak hours",
    detail: "Shift low-leverage tasks to 11:30–12:15 on Monday and Wednesday.",
    impact: "+1.3 focus quality"
  },
  {
    title: "Protect Thursday morning",
    detail: "Current meeting density increases slip risk for strategic work.",
    impact: "-14% overload risk"
  }
];

const priorities = [
  "Finalize weekly roadmap",
  "Protect Wednesday strategy block",
  "Reduce Thursday schedule pressure",
  "Preserve Saturday recovery window"
];

function SideLink({
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

function Metric({
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
      ? "bg-[linear-gradient(180deg,rgba(143,248,212,0.10),rgba(255,255,255,0.02))]"
      : tone === "blue"
        ? "bg-[linear-gradient(180deg,rgba(139,164,255,0.11),rgba(255,255,255,0.02))]"
        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]";

  return (
    <div className={`metric-card rounded-[1.4rem] p-4 ${toneClass}`}>
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function PlannerBlock({
  title,
  day,
  start,
  span,
  tone,
  text
}: {
  title: string;
  day: number;
  start: number;
  span: number;
  tone: string;
  text: string;
}) {
  const top = start * 76 + 8;
  const height = span * 76 - 12;
  const left = `calc(${day} * (100% / 7) + 8px)`;
  const width = `calc((100% / 7) - 16px)`;

  return (
    <div
      className={`absolute rounded-[1.1rem] border p-3 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur ${tone}`}
      style={{
        top: `${top}px`,
        left,
        width,
        height
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-white">{title}</p>
            <div className="flex gap-1 opacity-60">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            </div>
          </div>
          <p className="mt-2 text-[11px] leading-5 text-slate-200/90">{text}</p>
        </div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300/80">
          drag-ready preview
        </p>
      </div>
    </div>
  );
}

export function PlannerShell() {
  const gridHeight = hours.length * 76;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid-premium opacity-[0.06]" />
      <div className="pointer-events-none absolute left-[8%] top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-6 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1680px] px-4 py-4 md:px-6 md:py-6">
        <header className="glass-panel rounded-[1.75rem] px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold tracking-[0.22em] text-white">
                TEMPOOS
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                Planner shell preview
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Weekly planner
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                AI adaptive mode
              </div>
            </div>
          </div>
        </header>

        <div className="mt-4 grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)_340px]">
          <aside className="glass-panel h-fit rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Planner mode
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">Week 14</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Static interactive-feeling shell for weekly planning, block defense, and adaptive scheduling.
              </p>
            </div>

            <nav className="mt-4 space-y-2">
              <SideLink label="Overview" />
              <SideLink label="Planner" active />
              <SideLink label="Focus Blocks" />
              <SideLink label="Time Map" />
              <SideLink label="Insights" />
              <SideLink label="Settings" />
            </nav>

            <div className="green-glow mt-4 rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">
                Weekly score
              </p>
              <p className="mt-3 text-4xl font-semibold text-white">86 / 100</p>
              <p className="mt-2 text-sm leading-7 text-emerald-50/90">
                Current planner structure supports strong output if Thursday pressure is reduced.
              </p>
            </div>
          </aside>

          <section className="space-y-4">
            <div className="section-card rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Planner shell
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Adaptive weekly allocation.
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                    This screen previews how TempoOS will organize a week into protected work,
                    buffered execution, contained meetings, and preserved recovery windows.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Metric label="Recovered" value="10.2h" tone="green" />
                  <Metric label="Deep work" value="14.5h" tone="blue" />
                  <Metric label="Slip risk" value="Low" />
                  <Metric label="Pressure" value="Thu" tone="green" />
                </div>
              </div>
            </div>

            <div className="glass-panel overflow-hidden rounded-[2rem] p-4 md:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Weekly planner
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Drag-ready time blocks
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    Protected blocks
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    AI suggestions
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                    Weekly pressure map
                  </div>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <div className="min-w-[980px]">
                  <div className="grid grid-cols-[88px_repeat(7,minmax(120px,1fr))] gap-2">
                    <div />
                    {days.map((day) => (
                      <div
                        key={day}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                      >
                        <p className="text-sm font-medium text-white">{day}</p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-2">
                    <div className="grid grid-cols-[88px_1fr] gap-2">
                      <div className="space-y-2">
                        {hours.map((hour) => (
                          <div
                            key={hour}
                            className="flex h-[74px] items-start justify-end pr-3 pt-2 text-xs text-slate-400"
                          >
                            {hour}
                          </div>
                        ))}
                      </div>

                      <div
                        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
                        style={{ height: `${gridHeight}px` }}
                      >
                        <div className="absolute inset-0 grid grid-cols-7">
                          {days.map((day) => (
                            <div
                              key={day}
                              className="border-r border-white/[0.05] last:border-r-0"
                            />
                          ))}
                        </div>

                        <div className="absolute inset-0">
                          {hours.map((hour, index) => (
                            <div
                              key={hour}
                              className="absolute left-0 right-0 border-t border-white/[0.05]"
                              style={{ top: `${index * 76}px` }}
                            />
                          ))}
                        </div>

                        <div className="absolute inset-0">
                          {blocks.map((block) => (
                            <PlannerBlock key={`${block.title}-${block.day}`} {...block} />
                          ))}
                        </div>

                        <div className="pointer-events-none absolute inset-x-0 top-[390px] border-t border-dashed border-emerald-300/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="glass-panel rounded-[2rem] p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                AI adjustment rail
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Suggested moves
              </h2>

              <div className="mt-6 space-y-4">
                {aiAdjustments.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-base font-semibold text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                    <div className="mt-4 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                      {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Priority stack
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                This week’s leverage
              </h2>

              <div className="mt-6 space-y-3">
                {priorities.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="green-glow rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/80">
                Slip-risk engine
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Thursday overload detected
              </h2>
              <p className="mt-4 text-sm leading-7 text-emerald-50/90">
                The current planner is strong overall, but Thursday morning carries too much strategic load relative to available protected time.
              </p>
              <div className="mt-5 rounded-[1.25rem] border border-emerald-100/20 bg-black/10 px-4 py-4 text-sm text-white/90">
                Recommended: move one meeting cluster and preserve a 90-minute protected window.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
