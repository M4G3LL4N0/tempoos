import { SectionHeading } from "@/components/site-shell";

export const metadata = {
  title: "Waitlist — TempoOS",
  description: "Join the first wave of TempoOS"
};

export default function WaitlistPage() {
  return (
    <>
      <SectionHeading
        eyebrow="Early access"
        title="Join the first wave of TempoOS"
        description="We're rolling out access gradually to ensure quality. Enter your email below to get early access."
      />

      <div className="mx-auto mt-14 max-w-md">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="use-case" className="block text-sm font-medium text-slate-300">
                How do you plan to use TempoOS?
              </label>
              <select
                id="use-case"
                className="mt-2 w-full rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option>Founder/Executive</option>
                <option>Creative Professional</option>
                <option>Knowledge Worker</option>
                <option>Team/Organization</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Join waitlist
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
