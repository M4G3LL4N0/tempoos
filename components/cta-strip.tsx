interface CTAButtonsProps {
  className?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function CTAButtons({
  className = "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
  primaryHref = "/planner",
  secondaryHref = "/dashboard",
}: CTAButtonsProps) {
  return (
    <div className={className}>
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
