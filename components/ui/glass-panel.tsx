import { cn } from "@/lib/utils";

export const GlassPanel = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => (
  <div className={cn("rounded-[2rem] border border-white/10", className)}>
    <div
      className={cn(
        "soft-noise bg-white/[0.03] backdrop-blur-[4px]",
        innerClassName
      )}
    >
      {children}
    </div>
  </div>
);
import { cn } from "@/lib/utils";

export const GlassPanel = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => (
  <div className={cn("rounded-[2rem] border border-white/10", className)}>
    <div
      className={cn(
        "soft-noise bg-white/[0.03] backdrop-blur-[4px]",
        innerClassName
      )}
    >
      {children}
    </div>
  </div>
);
