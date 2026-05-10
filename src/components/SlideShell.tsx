import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideShellProps {
  index: number;
  total: number;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "center" | "start";
}

export function SlideShell({
  index,
  total,
  eyebrow,
  title,
  children,
  className,
  align = "start",
}: SlideShellProps) {
  return (
    <section
      key={index}
      className={cn(
        "relative w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 animate-slide-in",
        className,
      )}
    >
      <header
        className={cn(
          "flex flex-col gap-3 mb-8 md:mb-10",
          align === "center" && "items-center text-center",
        )}
      >
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {eyebrow && (
            <>
              <span className="opacity-30">·</span>
              <span>{eyebrow}</span>
            </>
          )}
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
          {title}
        </h2>
      </header>
      <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
        {children}
      </div>
    </section>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 md:p-7 transition-all hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.16_200/0.4)] animate-fade-up",
        className,
      )}
      style={{ animationDelay: `${0.15 + delay * 0.06}s` }}
    >
      {children}
    </div>
  );
}

export function ChartFrame({
  src,
  caption,
  className,
}: {
  src: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "glass-strong rounded-2xl p-3 md:p-4 overflow-hidden glow-ring animate-fade-up",
        className,
      )}
    >
      <div className="rounded-xl overflow-hidden bg-white/95">
        <img src={src} alt={caption ?? "Analytics chart"} className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground mt-3 px-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}