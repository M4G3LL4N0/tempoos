export const metadata = {
  title: "Waitlist — TempoOS",
  description:
    "Join the TempoOS waitlist for early access to the AI operating system for time allocation."
};

export default function WaitlistPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-4xl px-6 pb-28 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">
            Early access
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Join the first wave of TempoOS
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            We’re rolling out access gradually to ensure quality. Join the waitlist
            to get early access, product updates, and first access to the AI system
            designed to help ambitious people stop losing days to chaos.
          </p>
        </div>

        <div className="glass-panel mx-auto mt-14 max-w-xl rounded-[2rem] border border-white/10 p-8 md:p-10">
          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-sky-400/40"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                What best describes you?
              </label>
              <select
                id="role"
                name="role"
                defaultValue=""
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none focus:border-sky-400/40"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="founder">Founder</option>
                <option value="operator">Operator</option>
                <option value="creator">Creator</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                What do you want TempoOS to help you solve?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                placeholder="Weekly planning, focus protection, deadline realism, schedule overload, life balance..."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-sky-400/40"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full border border-white/10 bg-white px-6 py-4 text-sm font-medium text-slate-950 transition hover:scale-[1.01]"
            >
              Request early access
            </button>
          </form>

          <p className="mt-5 text-center text-xs leading-6 text-slate-400">
            Static waitlist UI for now. Backend capture can be connected next.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-7 text-slate-400">
            TempoOS is building the operating system for human time — helping people
            allocate hours more intelligently across work, focus, health, recovery,
            and life direction.
          </p>
        </div>
      </section>
    </main>
  );
}
