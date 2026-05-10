import { ReactNode, useEffect, useRef, useState } from "react";
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
        "relative w-full max-w-[1400px] mx-auto px-6 md:px-10 py-6 md:py-8 animate-slide-in",
        className,
      )}
    >
      <header
        className={cn(
          "flex flex-col gap-2 mb-5 md:mb-6",
          align === "center" && "items-center text-center",
        )}
      >
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
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
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.05]">
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
        "glass rounded-2xl p-4 md:p-5 transition-all hover:border-primary/30 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.16_200/0.4)] animate-fade-up",
        className,
      )}
      style={{ animationDelay: `${0.15 + delay * 0.06}s` }}
    >
      {children}
    </div>
  );
}

/**
 * AutoFit measures its child's natural size and scales it down (never up)
 * to fit inside the parent container. Keeps every slide on a single screen.
 */
export function AutoFit({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      const wrap = wrapRef.current;
      const inner = innerRef.current;
      if (!wrap || !inner) return;
      const cw = wrap.clientWidth;
      const ch = wrap.clientHeight;
      const iw = inner.scrollWidth;
      const ih = inner.scrollHeight;
      if (!iw || !ih) return;
      const s = Math.min(1, cw / iw, ch / ih);
      setScale(s);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [children]);

  return (
    <div ref={wrapRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div
        ref={innerRef}
        style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
        className="w-full"
      >
        {children}
      </div>
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