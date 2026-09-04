import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "violet" | "success" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  // Warp-inspired clean badges (no translucent gradients)
  const variants = {
    default: "bg-canvas-soft text-ink border border-hairline",
    violet: "bg-surface text-accent-violet border border-hairline",
    success: "bg-surface text-success border border-hairline",
    outline: "bg-transparent text-text-muted border border-hairline"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[3px] px-2.5 py-0.5 text-[12px] font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
