export function CTAButtons() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="/planner"
        className="cta-button-primary min-w-[200px]"
      >
        Open planner
      </a>

      <a
        href="/dashboard"
        className="cta-button-secondary min-w-[200px]"
      >
        View dashboard
      </a>
    </div>
  );
}
