export function ProductProof() {
  return (
    <section className="section-shell py-24">
      <div className="section-card rounded-[2rem] p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Live system output
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Your week, optimized before it starts.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              TempoOS simulates your upcoming week, detects weak points, protects
              high-value work, and continuously adapts as your schedule evolves.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Prevents schedule collapse before it happens",
                "Automatically rebalances when new events land",
                "Protects deep work from fragmentation",
                "Identifies hidden time loss patterns"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel-strong rounded-[2rem] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Weekly projection
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              84 / 100
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Strong alignment across focus, execution, and recovery. Thursday overload risk detected.
            </p>

            <div className="green-glow mt-6 rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/80">
                Recommendation
              </p>

              <p className="mt-3 text-lg font-medium text-white">
                Shift one meeting cluster to preserve a protected morning block.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
