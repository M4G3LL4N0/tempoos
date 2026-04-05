import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const GlassPanel = ({
  children,
  className,
  innerClassName,
  as: Component = "div",
}: GlassPanelProps) => (
  <Component className={cn("rounded-[2rem] border border-white/10", className)}>
    <div
      className={cn(
        "soft-noise bg-white/[0.03] backdrop-blur-[4px]",
        innerClassName
      )}
    >
      {children}
    </div>
  </Component>
);
