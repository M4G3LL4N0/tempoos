interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div className={`glass-panel rounded-[2rem] p-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
