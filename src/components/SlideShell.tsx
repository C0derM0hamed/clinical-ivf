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
        "relative w-full max-w-[1600px] mx-auto px-8 md:px-16 py-8 md:py-12 animate-slide-in",
        className,
      )}
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <header
        className={cn(
          "flex flex-col gap-4 mb-10 md:mb-16 relative z-10",
          align === "center" && "items-center text-center",
        )}
      >
        <div className="flex items-center gap-4 text-base md:text-lg font-bold uppercase tracking-[0.25em]">
          <span className="inline-flex items-center gap-3 text-muted-foreground">
            <span className="size-2.5 rounded-full bg-primary animate-pulse-glow shadow-[0_0_12px_var(--primary)]" />
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {eyebrow && (
            <>
              <span className="opacity-30 text-border">|</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{eyebrow}</span>
            </>
          )}
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter text-foreground leading-[1.1] drop-shadow-sm">
          {title}
        </h2>
      </header>
      <div className="animate-fade-up relative z-10" style={{ animationDelay: "0.15s" }}>
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
        "glass rounded-2xl p-6 md:p-8 transition-all hover:border-primary/30 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.16_200/0.4)] animate-fade-up",
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
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <figure
        data-no-advance
        onClick={() => setZoomed(true)}
        className={cn(
          "glass-strong rounded-2xl p-4 md:p-6 overflow-hidden glow-ring animate-fade-up cursor-zoom-in group transition-all hover:border-primary/40",
          className,
        )}
      >
        <div className="rounded-xl overflow-hidden bg-white/95 relative">
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors z-10 pointer-events-none" />
          <img src={src} alt={caption ?? "Analytics chart"} className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        </div>
        {caption && (
          <figcaption className="text-lg text-muted-foreground mt-4 px-2 italic">
            {caption}
          </figcaption>
        )}
      </figure>

      {zoomed && (
        <div 
          data-no-advance
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-2 md:p-6 cursor-zoom-out animate-fade-in"
          onClick={() => setZoomed(false)}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center animate-zoom-cinematic"
          >
            <img 
              src={src} 
              alt={caption ?? "Expanded chart"} 
              className="w-full h-full object-contain block drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}