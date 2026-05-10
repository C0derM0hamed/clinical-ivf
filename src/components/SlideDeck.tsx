import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, X } from "lucide-react";
import { slides } from "@/components/slides/slidesData";
import { cn } from "@/lib/utils";

export function SlideDeck() {
  const [i, setI] = useState(0);
  const [grid, setGrid] = useState(false);
  const total = slides.length;

  const go = useCallback((n: number) => {
    setI((c) => Math.min(Math.max(n, 0), total - 1));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); go(i + 1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(i - 1); }
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
      else if (e.key.toLowerCase() === "g") setGrid((g) => !g);
      else if (e.key === "Escape") setGrid(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go, total]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [i]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-3 flex items-center justify-between glass-strong border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">IV</div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-none">IVF Intelligence</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Investor Deck</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-xs text-muted-foreground tabular-nums tracking-widest mr-2">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button onClick={() => setGrid(true)} aria-label="Overview" className="size-9 rounded-lg glass hover:border-primary/40 flex items-center justify-center transition-colors">
            <LayoutGrid className="size-4" />
          </button>
        </div>
      </header>

      {/* Progress */}
      <div className="fixed top-[52px] left-0 right-0 z-30 h-0.5 bg-border/30">
        <div className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>

      {/* Slide */}
      <main className="pt-24 pb-32 min-h-screen flex items-start md:items-center">
        {slides[i].render(i, total)}
      </main>

      {/* Bottom controls */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 glass-strong rounded-full px-2 py-2 shadow-[0_20px_60px_-20px_oklch(0_0_0/0.8)]">
        <button onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous"
          className="size-10 rounded-full bg-muted/40 hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors">
          <ChevronLeft className="size-5" />
        </button>
        <div className="px-4 text-sm font-medium tabular-nums min-w-[80px] text-center">
          {i + 1} <span className="text-muted-foreground">/ {total}</span>
        </div>
        <button onClick={() => go(i + 1)} disabled={i === total - 1} aria-label="Next"
          className="size-10 rounded-full bg-primary/20 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors text-primary">
          <ChevronRight className="size-5" />
        </button>
      </nav>

      {/* Grid overlay */}
      {grid && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto animate-fade-up">
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 glass-strong border-b border-border">
            <div className="text-sm font-semibold">All slides · {total}</div>
            <button onClick={() => setGrid(false)} aria-label="Close" className="size-9 rounded-lg glass flex items-center justify-center hover:border-primary/40">
              <X className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {slides.map((s, k) => (
              <button key={s.id} onClick={() => { go(k); setGrid(false); }}
                className={cn(
                  "group text-left rounded-2xl glass p-5 aspect-video flex flex-col justify-between hover:border-primary/40 hover:-translate-y-1 transition-all",
                  k === i && "border-primary/60 glow-ring"
                )}>
                <div className="text-xs font-mono text-primary">{String(k + 1).padStart(2, "0")}</div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-gradient">{s.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">Slide {k + 1}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}