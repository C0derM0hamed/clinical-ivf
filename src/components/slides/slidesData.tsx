import { ReactNode } from "react";
import {
  Link as LinkIcon,
  Activity, Brain, Database, Dna, FlaskConical, GitBranch, Globe2, Layers,
  LineChart, Microscope, Rocket, ShieldCheck, Sparkles, Stethoscope, Target,
  TrendingUp, Users, Workflow, Zap, Server, Cpu, Cloud, Lock, Code2,
  HeartPulse, AlertTriangle, CheckCircle2, FileWarning, Network,
  Info, Sparkle, CircleDollarSign
} from "lucide-react";
import { SlideShell, GlassCard, ChartFrame } from "@/components/SlideShell";
import drMahmoud from "@/assets/dr-mahmoud.jpg";

export interface Slide {
  id: string;
  label: string;
  render: (i: number, total: number) => ReactNode;
}

const team = [ "Mohamed Mostafa", "Islam Khalid", "Mohamed Sayed", "Mostafa Mohamed", "Tork Ali", "Androw Sameh", "kerollos Ayman"];

export const slides: Slide[] = [
  {
    id: "cover",
    label: "Cover",
    render: (i, t) => (
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-12 animate-slide-in">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-base uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> AI Clinical Decision Support
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span className="text-gradient">IVF Intelligence</span>
            <br /> Platform
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl">
            Predict · Explain · Optimize IVF outcomes with machine learning,
            RAG architecture, and explainable AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {[ "RAG Architecture", "Vector Search", "Explainable AI"].map((t) => (
              <span key={t} className="glass px-4 py-2 rounded-full text-lg text-foreground/90">{t}</span>
            ))}
          </div>
          <div className="mt-10 w-full max-w-3xl glass-strong rounded-2xl p-6">
            <div className="text-base uppercase tracking-[0.2em] text-muted-foreground mb-4">Presented By</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {team.map((n) => (
                <div key={n} className="text-foreground/90 text-lg md:text-lg font-medium">{n}</div>
              ))}
            </div>
          </div>
          <div className="text-base text-muted-foreground tracking-widest mt-4">
            {String(i + 1).padStart(2, "0")} / {String(t).padStart(2, "0")}
          </div>
        </div>
      </section>
    ),
  },
  {
    id: "partner",
    label: "Medical Partner",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Strategic Medical Partnership"
        title={<>Built in partnership with <span className="text-gradient">leading IVF expertise</span></>}>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <GlassCard className="p-4 md:p-5">
            <div className="relative rounded-xl overflow-hidden glow-ring">
              <img src={drMahmoud} alt="Dr. Mahmoud Abdelaleem" className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-base uppercase tracking-[0.2em] text-primary mb-1">Strategic Medical Partner</div>
                <div className="text-2xl font-semibold">Dr. Mahmoud Abdelaleem</div>
                <div className="text-lg text-muted-foreground">Senior IVF Consultant</div>
              </div>
            </div>
          </GlassCard>
          <div className="space-y-6">
            {[
              { icon: Stethoscope, t: "Senior IVF Consultant", d: "Decades of clinical fertility expertise" },
              { icon: Workflow, t: "Clinical Workflow Advisor", d: "Real IVF treatment workflow design" },
              { icon: Database, t: "Real-World Data Provider", d: "Authentic IVF datasets & outcomes" },
              { icon: ShieldCheck, t: "Clinical Validation", d: "Verifies AI predictions in practice" },
            ].map((x, k) => (
              <GlassCard key={x.t} delay={k} className="p-6 md:p-8 flex items-center gap-5">
                <div className="size-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <x.icon className="size-6" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground mb-1">{x.t}</div>
                  <div className="text-lg text-muted-foreground">{x.d}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "problem-egypt",
    label: "Crisis in Egypt",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Problem in Egypt"
        title={<>A Growing Fertility Crisis in <span className="text-gradient">Egypt</span></>}>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <GlassCard delay={0} className="p-8">
            <div className="text-5xl md:text-6xl font-semibold text-gradient mb-2">~15%</div>
            <div className="text-xl text-muted-foreground">of Egyptian couples suffer from infertility</div>
            <div className="mt-8 text-5xl md:text-6xl font-semibold text-gradient mb-2">50-80k</div>
            <div className="text-xl text-muted-foreground">IVF cycles performed annually</div>
            <div className="mt-8 text-5xl md:text-6xl font-semibold text-gradient mb-2">150+</div>
            <div className="text-xl text-muted-foreground">specialized fertility centers in Egypt</div>
          </GlassCard>
          <div className="space-y-6">
            <GlassCard delay={1} className="p-6 flex items-start gap-4">
              <Stethoscope className="size-8 text-primary shrink-0 mt-1" />
              <div>
                <div className="text-xl font-semibold mb-2">Current Standard of Care</div>
                <div className="text-lg text-muted-foreground">Most clinics still rely mainly on physician experience rather than data-driven predictions.</div>
              </div>
            </GlassCard>
            <GlassCard delay={2} className="p-8 bg-gradient-to-br from-destructive/15 to-transparent">
              <AlertTriangle className="size-10 text-destructive mb-4" />
              <div className="text-2xl font-semibold leading-tight text-foreground">
                Doctors make life-changing decisions without intelligent clinical prediction systems.
              </div>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "burden",
    label: "Emotional & Financial Burden",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Emotional & Financial Burden"
        title={<>The <span className="text-gradient">Emotional and Financial</span> Cost of IVF</>}>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            { icon: CircleDollarSign, t: "High Costs", d: "One IVF cycle can cost 55,000–65,000 EGP." },
            { icon: TrendingUp, t: "Multiple Attempts", d: "Many families require several cycles." },
            { icon: HeartPulse, t: "Psychological Pressure", d: "Failed cycles create massive emotional stress." },
          ].map((x, k) => (
            <GlassCard key={x.t} delay={k} className="p-6">
              <x.icon className="size-8 text-primary mb-4" />
              <div className="text-xl font-semibold mb-2">{x.t}</div>
              <div className="text-lg text-muted-foreground">{x.d}</div>
            </GlassCard>
          ))}
        </div>
                <div className="grid md:grid-cols-2 gap-6">
          <GlassCard delay={3} className="overflow-hidden p-0 relative min-h-[250px]">
            <img 
              src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop" 
              alt="Emotional Mother" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
              <div className="text-2xl font-medium leading-snug drop-shadow-sm text-foreground">
                Behind every failed cycle is a family carrying emotional stress.
              </div>
            </div>
          </GlassCard>
            
          <GlassCard delay={4} className="p-8 text-center bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent flex flex-col justify-center">
            <div className="inline-flex items-center justify-center p-4 bg-background/50 rounded-full mb-6 mx-auto relative glow-ring">
              <Users className="size-10 text-primary" />
            </div>
            <div className="text-xl md:text-2xl font-medium leading-snug drop-shadow-sm text-foreground/90">
              Families spend huge amounts with no guaranteed outcome.
            </div>
            <div className="text-lg text-muted-foreground mt-4">
              Financial and psychological burdens pile up.
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "market-opportunity",
    label: "Market Growth Opportunity",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Market Growth Opportunity"
        title={<>AI-Powered Fertility Market Is <span className="text-gradient">Rapidly Growing</span></>}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: Globe2, t: "Global Transformation", d: "AI is transforming fertility medicine globally." },
              { icon: Target, t: "Rapid Adoption", d: "Fertility clinics are rapidly adopting intelligent systems." },
              { icon: Cpu, t: "Major Healthcare Trend", d: "AI-assisted embryo selection is becoming standard." },
              { icon: LineChart, t: "Investor Focus", d: "Healthcare investors are increasingly targeting fertility AI startups." },
            ].map((x, k) => (
              <GlassCard key={x.t} delay={k} className="p-5 flex items-start gap-4">
                <x.icon className="size-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-lg font-semibold">{x.t}</div>
                  <div className="text-lg text-muted-foreground">{x.d}</div>
                </div>
              </GlassCard>
            ))}
          </div>
          <GlassCard delay={3} className="p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 pointer-events-none" />
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-6 relative z-10">AI-Powered Embryo Selection Market</div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-end justify-between border-b border-border/50 pb-4">
                <div className="text-lg text-muted-foreground">Market Value (2025)</div>
                <div className="text-3xl font-semibold text-foreground">$183.4 Million</div>
              </div>
              <div className="flex items-end justify-between border-b border-border/50 pb-4">
                <div className="text-lg text-muted-foreground">Forecast Value (2035)</div>
                <div className="text-3xl font-semibold text-primary">$537.2 Million</div>
              </div>
              <div className="flex items-end justify-between pb-2">
                <div className="text-lg text-muted-foreground">Forecast CAGR (2025 to 2035)</div>
                <div className="text-4xl font-bold text-gradient">11%</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-background/50 rounded-xl relative z-10 border border-foreground/10">
              <div className="text-sm text-center text-muted-foreground">Based on Future Market Insights projections.</div>
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "local-gap",
    label: "Local Market Gap",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Local Market Gap"
        title={<>No <span className="text-gradient">Local AI Fertility Platform</span> Exists in Egypt</>}>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <GlassCard delay={0} className="p-6 md:p-8 border-destructive/20">
            <div className="text-base uppercase tracking-[0.2em] text-destructive mb-4">The Challenge</div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-lg"><AlertTriangle className="size-6 text-destructive shrink-0" /> <span className="text-foreground/90">No Egyptian AI platform exists for IVF prediction.</span></li>
              <li className="flex gap-3 text-lg"><AlertTriangle className="size-6 text-destructive shrink-0" /> <span className="text-foreground/90">Most global systems are trained on Western populations.</span></li>
              <li className="flex gap-3 text-lg"><AlertTriangle className="size-6 text-destructive shrink-0" /> <span className="text-foreground/90">Egyptian patient profiles and protocols are very different.</span></li>
              <li className="flex gap-3 text-lg"><AlertTriangle className="size-6 text-destructive shrink-0" /> <span className="text-foreground/90">Clinics still lack localized intelligent systems.</span></li>
            </ul>
          </GlassCard>
          <GlassCard delay={1} className="p-6 md:p-8 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">The Opportunity</div>
            <Rocket className="size-12 text-primary mb-6" />
            <div className="text-2xl font-semibold text-foreground leading-snug">
              This creates a major opportunity for the <span className="text-gradient">first localized fertility AI platform</span> in the region.
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "solution",
    label: "Our Solution",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Our Solution"
        title={<>AI-Powered Fertility <span className="text-gradient">Intelligence Platform</span></>}>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-4">
            <div className="text-base uppercase tracking-[0.2em] text-muted-foreground mb-2">Platform Capabilities</div>
            {[
              { icon: Target, t: "Predict IVF success probability" },
              { icon: Brain, t: "Generate explainable smart reports" },
              { icon: Stethoscope, t: "Support physician decision-making" },
              { icon: Microscope, t: "Analyze medical and embryology factors" },
              { icon: TrendingUp, t: "Reduce failed IVF attempts" },
            ].map((x, k) => (
              <GlassCard key={x.t} delay={k} className="p-5 flex items-center gap-4 hover:border-primary/40 transition-colors">
                <div className="size-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0"><x.icon className="size-6" /></div>
                <div className="text-xl font-medium">{x.t}</div>
              </GlassCard>
            ))}
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="text-base uppercase tracking-[0.2em] text-muted-foreground mb-2">Core Features</div>
            {[
              "Prediction System",
              "Explainability Reports",
              "Clinical Decision Support",
              "Interactive Dashboard"
            ].map((x, k) => (
              <GlassCard key={x} delay={k+3} className="p-5 flex items-center gap-3 bg-gradient-to-r from-accent/10 to-transparent">
                <CheckCircle2 className="size-5 text-accent shrink-0" />
                <div className="text-lg font-medium">{x}</div>
              </GlassCard>
            ))}
            <GlassCard delay={7} className="mt-6 p-6 border-primary/30 glow-ring bg-primary/5">
              <Sparkles className="size-6 text-primary mb-3" />
              <div className="text-lg text-foreground/90 font-medium">Built specifically to support fertility clinics with actionable intelligence.</div>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "workflow",
    label: "How the System Works",
    render: (i, t) => {
      const steps = [
        { n: "1", t: "Doctor enters patient information", icon: Users },
        { n: "2", t: "AI analyzes clinical data", icon: Cpu },
        { n: "3", t: "Similar historical cases are retrieved", icon: Layers },
        { n: "4", t: "System generates prediction & recommendations", icon: Target },
        { n: "5", t: "Doctor receives explainable clinical report", icon: FileWarning }, // Using a generic file icon
      ];
      return (
        <SlideShell index={i} total={t} eyebrow="How the System Works"
          title={<>Simple <span className="text-gradient">Clinical Workflow</span></>}>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {steps.map((s, k) => (
              <GlassCard key={s.n} delay={k} className="relative p-6 flex flex-col items-center text-center group">
                <div className="absolute top-4 left-4 text-sm font-bold text-primary/40 font-mono">0{s.n}</div>
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="size-6 text-primary" />
                </div>
                <div className="text-lg font-medium leading-snug text-foreground/90">{s.t}</div>
              </GlassCard>
            ))}
          </div>
          <div className="max-w-3xl mx-auto flex items-center justify-center">
            <GlassCard delay={5} className="p-6 w-full text-center bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="text-xl text-foreground font-medium flex items-center justify-center gap-3">
                <ShieldCheck className="size-6 text-accent" /> Designed to fit seamlessly into existing consultations.
              </div>
            </GlassCard>
          </div>
        </SlideShell>
      );
    },
  },
  {
    id: "doctor-experience",
    label: "Doctor Experience",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Doctor Experience"
        title={<>Designed for <span className="text-gradient">Real Clinical Usage</span></>}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-2">Doctors Can:</div>
            {[
              "View IVF success probability based on vast data",
              "Understand key clinical contributing factors",
              "Compare with similar historical outcomes",
              "Receive explainable AI recommendations instantly"
            ].map((x, k) => (
              <GlassCard key={k} delay={k} className="p-5 flex items-center gap-4 bg-muted/20">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5 text-primary" />
                </div>
                <div className="text-xl font-medium text-foreground/90">{x}</div>
              </GlassCard>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <GlassCard delay={4} className="p-10 border-accent/30 bg-gradient-to-b from-accent/5 to-accent/10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6">
                <Sparkles className="size-24 text-accent/10" />
              </div>
              <Stethoscope className="size-16 text-accent mx-auto mb-6 drop-shadow-sm" />
              <div className="text-3xl font-semibold text-foreground leading-tight mb-4">
                The platform <span className="text-gradient">supports</span> physicians — it does not replace them.
              </div>
              <div className="text-xl text-muted-foreground">
                Enhancing human expertise with superhuman data retrieval.
              </div>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "explainable-ai",
    label: "Explainable AI",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Why Doctors Will Trust It"
        title={<>Explainable AI Instead of <span className="text-gradient">Black Box Predictions</span></>}>
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 space-y-4">
            {[
              { t: "Evidence-Based", d: "Predictions are supported by real historical cases." },
              { t: "Clear Reasoning", d: "AI explains contributing factors clearly and clinically." },
              { t: "Comparative Analysis", d: "Doctors can review similar historic outcomes." },
              { t: "High Trust", d: "Transparent reasoning significantly improves physician trust." },
            ].map((x, k) => (
              <GlassCard key={x.t} delay={k} className="p-6 flex items-start gap-4">
                <Brain className="size-7 text-primary shrink-0 mt-1" />
                <div>
                  <div className="text-xl font-semibold mb-1">{x.t}</div>
                  <div className="text-lg text-muted-foreground">{x.d}</div>
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="md:col-span-5 flex flex-col space-y-4">
            <GlassCard delay={4} className="flex-1 p-8 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent flex flex-col justify-center items-center text-center">
              <ShieldCheck className="size-16 text-primary mb-6" />
              <div className="text-2xl font-semibold leading-snug">
                The platform provides intelligence, transparency, and confidence.
              </div>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "competitor",
    label: "Competitor Comparison",
    render: (i, t) => {
      const highlights = [
        "Built strictly for Egyptian demographics & clinics",
        "Arabic and English interface support",
        "No expensive hardware required (cloud-native)",
        "Localized medical understanding (protocols & guidelines)",
        "Lower operational complexity & cost",
      ];
      return (
        <SlideShell index={i} total={t} eyebrow="Competitor Comparison"
          title={<>Why Our Platform Is <span className="text-gradient">Different</span></>}>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <GlassCard className="p-6 h-full border-muted-foreground/20">
                <div className="text-base uppercase tracking-[0.2em] text-muted-foreground mb-6">Global Competitors</div>
                <div className="space-y-6">
                  {["Alife Health", "Fairtility", "Life Whisperer"].map((x, k) => (
                    <div key={x} className="flex items-center gap-4 text-xl text-muted-foreground">
                      <div className="size-3 rounded-full bg-border" />
                      {x}
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t border-border/50 text-base text-muted-foreground">
                  Western-focused datasets, hardware requirements, and high barriers to entry.
                </div>
              </GlassCard>
            </div>
            <div className="md:col-span-8">
              <GlassCard className="p-8 border-primary/30 h-full bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Target className="size-48 text-primary" />
                </div>
                <div className="text-base uppercase tracking-[0.2em] text-primary mb-6 relative z-10">The Local Advantage</div>
                <div className="space-y-5 relative z-10">
                  {highlights.map((x, k) => (
                    <div key={k} className="flex items-start gap-4">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="size-5 text-primary" />
                      </div>
                      <div className="text-xl font-medium text-foreground/90">{x}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </SlideShell>
      );
    },
  },
  {
    id: "regional",
    label: "Regional Opportunity",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Regional Opportunity"
        title={<>A Massive <span className="text-gradient">Regional Opportunity</span></>}>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-5">
            {[
              "Egypt is one of the region’s largest IVF markets.",
              "AI adoption in Middle Eastern healthcare is increasing rapidly.",
              "Fertility clinics across MENA need intelligent support systems.",
              "Clear expansion opportunities exist across the Gulf region."
            ].map((x, k) => (
              <GlassCard key={k} delay={k} className="p-6 flex items-start gap-4">
                <Globe2 className="size-6 text-accent shrink-0 mt-0.5" />
                <div className="text-xl font-medium text-foreground/90">{x}</div>
              </GlassCard>
            ))}
          </div>
          <GlassCard delay={4} className="p-8 border-accent/20 bg-gradient-to-tl from-accent/15 to-transparent flex flex-col justify-center text-center">
            <Activity className="size-20 text-accent mx-auto mb-8 drop-shadow-md" />
            <div className="text-3xl font-semibold leading-tight text-foreground">
              The first successful local fertility AI platform can <span className="text-gradient">lead the regional market</span>.
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "future",
    label: "Future Vision",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Future Vision"
        title={<>Building the Future of <span className="text-gradient">Fertility Intelligence</span></>}>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            
            { icon: Brain, t: "Smarter, personalized AI recommendations" },
            { icon: Network, t: "Multi-clinic distributed intelligence systems" },
            { icon: Globe2, t: "Scalable expansion across the Middle East" },
          ].map((x, k) => (
            <GlassCard key={k} delay={k} className="p-6 text-center group">
              <div className="mx-auto size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <x.icon className="size-8 text-primary" />
              </div>
              <div className="text-xl font-medium">{x.t}</div>
            </GlassCard>
          ))}
        </div>
        <GlassCard delay={4} className="p-8 text-center max-w-4xl mx-auto border-primary/30 glow-ring bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
          <div className="text-3xl font-medium leading-snug">
            The goal is to become the <span className="text-gradient font-bold">intelligence layer</span> for fertility medicine in the Arab world.
          </div>
        </GlassCard>
      </SlideShell>
    ),
  },
  {
    id: "what-we-need",
    label: "What We Need",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Pilot Clinics & Partnerships"
        title={<>Pilot Clinics & <span className="text-gradient">Strategic Partnerships</span></>}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-2">We are looking for:</div>
            {[
              { icon: Users, t: "Fertility clinics willing to test the platform" },
              { icon: Stethoscope, t: "Strong clinical partnerships" },
              { icon: Activity, t: "Deep medical feedback & iteration" },
              { icon: Rocket, t: "Real-world deployment opportunities" }
            ].map((x, k) => (
              <GlassCard key={k} delay={k} className="p-5 flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <x.icon className="size-5 text-primary" />
                </div>
                <div className="text-xl font-medium">{x.t}</div>
              </GlassCard>
            ))}
          </div>
          <GlassCard delay={4} className="p-10 border-primary/20 bg-gradient-to-bl from-primary/10 to-transparent flex flex-col justify-center h-full">
            <Sparkle className="size-12 text-primary mb-6" />
            <div className="text-3xl font-semibold leading-snug text-foreground">
              Early partnerships will help shape the <span className="text-gradient">first localized fertility AI platform</span> in Egypt.
            </div>
            <div className="mt-6 text-xl text-muted-foreground">
              Join us in transforming IVF outcomes with data.
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "closing",
    label: "Closing",
    render: (i, t) => (
      <section className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16 animate-slide-in flex flex-col justify-center min-h-[80vh]">
        {/* Note: Background layer is now globally handled in SlideDeck.tsx */}
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Thank You</span>
          </h1>
          
          <div className="max-w-4xl text-2xl md:text-3xl font-medium leading-relaxed drop-shadow-md mb-8">
            We are not building just another AI tool — we are building a platform that helps families make one of the most important decisions in their lives with greater <span className="text-primary font-semibold">confidence</span> and <span className="text-primary font-semibold">transparency</span>.
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mt-4">
            <GlassCard className="p-6 text-left border-primary/20 bg-background/80 backdrop-blur-md">
              <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Team</div>
              <div className="grid grid-cols-2 gap-2 text-lg text-foreground/90 font-medium">
                {team.map((n) => (
                  <div key={n} className="truncate">{n}</div>
                ))}
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 text-left border-accent/20 bg-gradient-to-br from-accent/10 to-background/80 backdrop-blur-md">
              <div className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Strategic Medical Partner</div>
              <div className="text-2xl font-bold text-foreground mb-1">Dr. Mahmoud Abdelaleem</div>
              <div className="text-lg text-muted-foreground mb-6">Senior IVF Consultant</div>
              <div className="text-xl font-semibold text-foreground/90 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-accent" /> Questions & Discussion
              </div>
            </GlassCard>
          </div>
          
          <div className="text-base text-muted-foreground tracking-widest mt-8">
            {String(i + 1).padStart(2, "0")} / {String(t).padStart(2, "0")}
          </div>
        </div>
      </section>
    ),
  },
];