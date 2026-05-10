import { ReactNode } from "react";
import {
  Activity, Brain, Database, Dna, FlaskConical, GitBranch, Globe2, Layers,
  LineChart, Microscope, Rocket, ShieldCheck, Sparkles, Stethoscope, Target,
  TrendingUp, Users, Workflow, Zap, Server, Cpu, Cloud, Lock, Code2,
  HeartPulse, AlertTriangle, CheckCircle2, FileWarning, Network,
} from "lucide-react";
import { SlideShell, GlassCard, ChartFrame } from "@/components/SlideShell";
import drMahmoud from "@/assets/dr-mahmoud.jpg";
import chartTarget from "@/assets/chart-target-variable.png";
import chartBmi from "@/assets/chart-bmi.png";
import chartDemo from "@/assets/chart-demographic.png";
import chartOvarian from "@/assets/chart-ovarian.png";
import chartFert from "@/assets/chart-fertilization.png";
import chartTransfer from "@/assets/chart-transfer.png";
import chartAmhAge from "@/assets/chart-amh-age.png";
import chartComp from "@/assets/chart-complications.png";

export interface Slide {
  id: string;
  label: string;
  render: (i: number, total: number) => ReactNode;
}

const team = ["Mohamed Mostafa", "Islam Khalid", "Mohamed Sayed", "Mostafa Mohamed", "Tork Ali", "Androw Sameh"];

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
            {["Machine Learning", "RAG Architecture", "Vector Search", "Explainable AI"].map((t) => (
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
    id: "problem",
    label: "The Problem",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="The Problem"
        title={<>IVF success prediction is still <span className="text-gradient">uncertain</span></>}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: HeartPulse, t: "Emotionally stressful", d: "IVF is expensive and weighs on patients." },
            { icon: TrendingUp, t: "Variable outcomes", d: "Success rates fluctuate dramatically." },
            { icon: Stethoscope, t: "Experience-driven", d: "Decisions rely on physician intuition." },
            { icon: Database, t: "Underused data", d: "Historical IVF data sits unanalyzed." },
            { icon: Brain, t: "No predictive AI", d: "Most clinics lack ML decision tools." },
            { icon: Target, t: "The opportunity", d: "Smarter, data-driven treatment decisions." },
          ].map((x, k) => (
            <GlassCard key={x.t} delay={k}>
              <x.icon className="size-6 text-primary mb-4" />
              <div className="font-semibold text-lg text-foreground mb-1">{x.t}</div>
              <div className="text-lg text-muted-foreground">{x.d}</div>
            </GlassCard>
          ))}
        </div>
      </SlideShell>
    ),
  },
  {
    id: "market",
    label: "Market",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Market Opportunity"
        title={<>Fertility & IVF market is <span className="text-gradient">growing rapidly</span></>}>
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {[
            { v: "$28B+", l: "Global IVF market 2025" },
            { v: "$85B", l: "Fertility market by 2034" },
            { v: "1 in 6", l: "People affected by infertility" },
            { v: "$45B+", l: "Healthcare AI investments" },
          ].map((x, k) => (
            <GlassCard key={x.l} delay={k} className="p-8">
              <div className="text-5xl md:text-6xl font-semibold text-gradient mb-2">{x.v}</div>
              <div className="text-muted-foreground">{x.l}</div>
            </GlassCard>
          ))}
        </div>
        <GlassCard delay={4}>
          <div className="text-base uppercase tracking-[0.2em] text-primary mb-3">Why this matters</div>
          <div className="grid md:grid-cols-3 gap-4 text-lg">
            <div className="flex items-center gap-2"><Globe2 className="size-4 text-primary" /> Global IVF demand rising</div>
            <div className="flex items-center gap-2"><Cpu className="size-4 text-primary" /> Clinics digitizing fast</div>
            <div className="flex items-center gap-2"><Rocket className="size-4 text-primary" /> Healthcare AI accelerating</div>
          </div>
        </GlassCard>
      </SlideShell>
    ),
  },
  {
    id: "pain",
    label: "Clinic Pain Points",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Pain Points"
        title={<>Clinics operate without <span className="text-gradient">predictive intelligence</span></>}>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="text-base uppercase tracking-[0.2em] text-destructive mb-4">Current Problems</div>
            <ul className="space-y-3">
              {["No accurate AI prediction systems","Manual interpretation of IVF history","Fragmented patient records","Difficult treatment optimization","Limited use of historical patterns"].map((x) => (
                <li key={x} className="flex items-start gap-3 text-foreground/90">
                  <AlertTriangle className="size-4 text-destructive mt-1 shrink-0" />{x}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard delay={1}>
            <div className="text-base uppercase tracking-[0.2em] text-accent mb-4">Business Impact</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "↓", l: "Failed IVF cycles" },
                { v: "↓", l: "Patient confidence" },
                { v: "↑", l: "Operational costs" },
                { v: "↓", l: "Clinic efficiency" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-muted/40 p-4">
                  <div className="text-2xl font-semibold text-accent mb-1">{x.v}</div>
                  <div className="text-lg text-muted-foreground">{x.l}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "solution",
    label: "Solution",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Our Solution"
        title={<>AI-powered <span className="text-gradient">IVF clinical intelligence</span> platform</>}>
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-3 space-y-4">
            {[
              { icon: Target, t: "Predict IVF success probability" },
              { icon: Layers, t: "Retrieve similar historical cases" },
              { icon: Brain, t: "Generate explainable AI insights" },
              { icon: Stethoscope, t: "Assist physicians in treatment planning" },
              { icon: Microscope, t: "Analyze clinical & embryology data" },
            ].map((x, k) => (
              <GlassCard key={x.t} delay={k} className="p-4 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center"><x.icon className="size-5" /></div>
                <div className="font-medium">{x.t}</div>
              </GlassCard>
            ))}
          </div>
          <div className="md:col-span-2">
            <GlassCard delay={2} className="h-full">
              <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">Core Technologies</div>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning","RAG","GPT Reasoning","Vector Search","Embeddings","pgvector"].map(x => (
                  <span key={x} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-lg text-primary">{x}</span>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-5">
                <Sparkles className="size-6 text-primary mb-2" />
                <div className="text-lg text-foreground/90">A unified AI layer for fertility medicine — built for real clinical workflows.</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "workflow",
    label: "How It Works",
    render: (i, t) => {
      const steps = [
        { n: "01", t: "Doctor enters patient & embryology data", icon: Stethoscope },
        { n: "02", t: "System preprocesses IVF records", icon: Workflow },
        { n: "03", t: "Embeddings generated from IVF cases", icon: Dna },
        { n: "04", t: "Vector DB retrieves similar historical cases", icon: Database },
        { n: "05", t: "GPT generates explainable medical reasoning", icon: Brain },
      ];
      return (
        <SlideShell index={i} total={t} eyebrow="How The System Works"
          title={<>The <span className="text-gradient">AI workflow</span></>}>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {steps.map((s, k) => (
              <GlassCard key={s.n} delay={k} className="relative">
                <div className="text-base text-primary font-mono mb-3">{s.n}</div>
                <s.icon className="size-6 text-primary mb-3" />
                <div className="text-lg font-medium leading-snug">{s.t}</div>
              </GlassCard>
            ))}
          </div>
          <GlassCard delay={5}>
            <div className="text-base uppercase tracking-[0.2em] text-accent mb-4">Final Output</div>
            <div className="grid md:grid-cols-4 gap-3">
              {["Success probability","Risk indicators","Similar cases","Clinical insights"].map(x => (
                <div key={x} className="rounded-xl bg-accent/10 border border-accent/20 p-4 text-lg font-medium text-foreground/90 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" />{x}
                </div>
              ))}
            </div>
          </GlassCard>
        </SlideShell>
      );
    },
  },
  {
    id: "dataset",
    label: "Dataset",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Dataset Overview"
        title={<>Real <span className="text-gradient">IVF clinical dataset</span></>}>
        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-4 space-y-4">
            {[{v:"927",l:"IVF cycles"},{v:"27",l:"Medical features"},{v:"100%",l:"Real clinical data"}].map((x,k)=>(
              <GlassCard key={x.l} delay={k} className="p-6">
                <div className="text-4xl font-semibold text-gradient">{x.v}</div>
                <div className="text-lg text-muted-foreground mt-1">{x.l}</div>
              </GlassCard>
            ))}
            <GlassCard delay={3}>
              <div className="text-base uppercase tracking-[0.2em] text-primary mb-3">Key features</div>
              <div className="flex flex-wrap gap-1.5">
                {["Wife age","Husband age","BMI","AMH","AFC","Fertilization rate","ET day","Fresh/Frozen"].map(x=>(
                  <span key={x} className="text-base px-2.5 py-1 rounded-full bg-muted/50 border border-border text-foreground/80">{x}</span>
                ))}
              </div>
            </GlassCard>
          </div>
          <div className="md:col-span-8">
            <ChartFrame src={chartTarget} caption="Fig 1 · Live birth outcome distribution. 86.8% success rate signals severe class imbalance." />
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "demographic",
    label: "Demographic & BMI",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Demographic & BMI Analysis"
        title={<>Demographic <span className="text-gradient">insights</span></>}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            "Average wife age centered in late twenties",
            "Higher success rates in younger age groups",
            "BMI affects IVF & pregnancy probability",
          ].map((x,k)=>(
            <GlassCard key={x} delay={k} className="p-5 flex items-start gap-3">
              <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
              <span className="text-lg">{x}</span>
            </GlassCard>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <ChartFrame src={chartDemo} caption="Fig 2 · Age distributions and success rates by age group." />
          <ChartFrame src={chartBmi} caption="Fig 3 · BMI distribution, boxplot by outcome, and success rate by BMI category." />
        </div>
      </SlideShell>
    ),
  },
  {
    id: "ovarian",
    label: "Ovarian Reserve",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Ovarian Reserve Analysis"
        title={<>AMH & AFC <span className="text-gradient">impact</span></>}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            "Higher AMH correlates with stronger outcomes",
            "AFC categories influence success probability",
            "Ovarian reserve is a major fertility indicator",
          ].map((x,k)=>(
            <GlassCard key={x} delay={k} className="p-5 flex items-start gap-3">
              <FlaskConical className="size-5 text-accent shrink-0 mt-0.5" />
              <span className="text-lg">{x}</span>
            </GlassCard>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <ChartFrame src={chartOvarian} caption="Fig 4-5 · AMH distribution, outcome boxplots, success by AMH level, and AFC category breakdown." />
          <ChartFrame src={chartAmhAge} caption="Fig 10 · Scatter plot of AMH vs wife age, split by outcome with trend lines." />
        </div>
      </SlideShell>
    ),
  },
  {
    id: "embryology",
    label: "Embryology",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Fertilization & Embryo Analysis"
        title={<>Embryology <span className="text-gradient">insights</span></>}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { i: Microscope, t: "Fertilization rate strongly impacts success" },
            { i: Layers, t: "Embryo transfer count influences outcomes" },
            { i: Activity, t: "Frozen transfers achieved higher success" },
          ].map((x,k)=>(
            <GlassCard key={x.t} delay={k} className="p-5 flex items-start gap-3">
              <x.i className="size-5 text-primary shrink-0 mt-0.5" />
              <span className="text-lg font-medium">{x.t}</span>
            </GlassCard>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <ChartFrame src={chartFert} caption="Fig 6 · Injection and fertilization counts, fertilization rate by outcome, and embryos transferred." />
          <ChartFrame src={chartTransfer} caption="Fig 7 · Success rate and cycle count by embryo transfer day. Fig 5 · Live birth rates: fresh vs frozen." />
        </div>
      </SlideShell>
    ),
  },
  {
    id: "challenge",
    label: "Data Challenge",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Healthcare Data Challenge"
        title={<>The <span className="text-gradient">missing labels</span> problem</>}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { i: FileWarning, t: "Many live-birth labels missing" },
              { i: AlertTriangle, t: "Outcome tracking is difficult" },
              { i: Users, t: "Patients continue treatment elsewhere" },
              { i: Database, t: "Clinical datasets are fragmented" },
            ].map((x, k) => (
              <GlassCard key={x.t} delay={k} className="p-4 flex items-center gap-4">
                <x.i className="size-5 text-destructive" /><span>{x.t}</span>
              </GlassCard>
            ))}
          </div>
          <GlassCard delay={2} className="p-8 flex flex-col justify-center bg-gradient-to-br from-destructive/15 to-primary/10">
            <AlertTriangle className="size-10 text-destructive mb-4" />
            <div className="text-xl md:text-2xl font-semibold mb-3">Traditional supervised learning struggles with incomplete labels.</div>
            <p className="text-muted-foreground">Real healthcare data demands engineered solutions that respect uncertainty without leaking future information.</p>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "engineering",
    label: "Engineering Solution",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Our Engineering Solution"
        title={<>Composite <span className="text-gradient">outcome strategy</span></>}>
        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-7 space-y-4">
            <GlassCard>
              <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">Hierarchical Label Engineering</div>
              {[
                { n:"1", t:"Live Birth", d:"Strongest signal", cls:"bg-primary/15 text-primary" },
                { n:"2", t:"Clinical Pregnancy", d:"Secondary signal", cls:"bg-accent/15 text-accent" },
                { n:"3", t:"Chemical Pregnancy", d:"Weaker signal", cls:"bg-muted text-muted-foreground" },
              ].map((x)=>(
                <div key={x.n} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <div className={`size-9 rounded-full flex items-center justify-center font-semibold ${x.cls}`}>{x.n}</div>
                  <div className="flex-1">
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-base text-muted-foreground">{x.d}</div>
                  </div>
                </div>
              ))}
            </GlassCard>
            <GlassCard delay={1} className="bg-gradient-to-br from-destructive/10 to-transparent">
              <div className="text-base uppercase tracking-[0.2em] text-destructive mb-2">Important rule</div>
              <p className="text-lg">Pregnancy complications were used <strong>only</strong> for inferred labeling — never as model input or training predictors. This prevents data leakage and unrealistic accuracy.</p>
            </GlassCard>
          </div>
          <div className="md:col-span-5">
            <ChartFrame src={chartComp} caption="Fig 11 · Complication rates among clinically confirmed pregnancies." />
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "stack",
    label: "Tech Stack",
    render: (i, t) => {
      const stack = [
        { icon: Code2, t: "Frontend", items: ["React 18", "Tailwind CSS", "Recharts", "TanStack Query"] },
        { icon: Server, t: "Backend", items: ["Node.js 20+", "Fastify v5", "JWT Auth", "BullMQ"] },
        { icon: Brain, t: "AI & ML", items: ["Python 3.12", "FastAPI", "XGBoost", "GPT-4o", "OpenAI Embeddings"] },
        { icon: Database, t: "Database", items: ["PostgreSQL", "pgvector"] },
        { icon: Cloud, t: "Infrastructure", items: ["Docker", "Nginx", "Prometheus", "Grafana"] },
      ];
      return (
        <SlideShell index={i} total={t} eyebrow="Technology Stack"
          title={<>Production-grade <span className="text-gradient">AI architecture</span></>}>
          <div className="grid md:grid-cols-3 gap-5">
            {stack.map((s, k) => (
              <GlassCard key={s.t} delay={k}>
                <s.icon className="size-6 text-primary mb-3" />
                <div className="font-semibold text-lg mb-3">{s.t}</div>
                <div className="space-y-1.5">
                  {s.items.map(it => (
                    <div key={it} className="text-lg text-foreground/80 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-primary/60" />{it}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </SlideShell>
      );
    },
  },
  {
    id: "architecture",
    label: "Architecture",
    render: (i, t) => {
      const flow = ["Patient Data","Embeddings","Vector Search","Similar IVF Cases","GPT Reasoning","Prediction Dashboard"];
      const icons = [Stethoscope, Dna, Network, Database, Brain, LineChart];
      return (
        <SlideShell index={i} total={t} eyebrow="AI + RAG Architecture"
          title={<>System <span className="text-gradient">architecture</span></>}>
          <div className="grid md:grid-cols-12 gap-5">
            <GlassCard className="md:col-span-7">
              <div className="text-base uppercase tracking-[0.2em] text-primary mb-6">Workflow Pipeline</div>
              <div className="space-y-3">
                {flow.map((step, k) => {
                  const Icon = icons[k];
                  return (
                    <div key={step}>
                      <div className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/15">
                        <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center"><Icon className="size-5" /></div>
                        <div className="font-medium">{step}</div>
                      </div>
                      {k < flow.length - 1 && (
                        <div className="ml-7 my-1 h-4 w-px bg-gradient-to-b from-primary/60 to-primary/0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </GlassCard>
            <div className="md:col-span-5 space-y-3">
              <div className="text-base uppercase tracking-[0.2em] text-accent mb-2">Main Components</div>
              {[
                { i: LineChart, t: "Frontend Dashboard" },
                { i: Server, t: "Backend API" },
                { i: Cpu, t: "ML Prediction Engine" },
                { i: Database, t: "Vector Database" },
                { i: Brain, t: "GPT Reasoning Layer" },
                { i: Network, t: "Retrieval System" },
              ].map((x, k) => (
                <GlassCard key={x.t} delay={k} className="p-3 flex items-center gap-3">
                  <x.i className="size-5 text-accent" /><span className="text-lg font-medium">{x.t}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </SlideShell>
      );
    },
  },
  {
    id: "doctor-workflow",
    label: "Doctor Workflow",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Doctor Workflow & Dashboard"
        title={<>Clinical <span className="text-gradient">workflow</span></>}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {[
              "Enter patient information",
              "Receive IVF success prediction",
              "View similar historical cases",
              "Read explainable AI recommendations",
              "Analyze contributing factors",
            ].map((x, k) => (
              <GlassCard key={x} delay={k} className="p-4 flex items-center gap-4">
                <div className="size-8 rounded-full bg-primary/15 text-primary flex items-center justify-center text-lg font-semibold">{k+1}</div>
                <div className="font-medium">{x}</div>
              </GlassCard>
            ))}
            <GlassCard delay={6} className="bg-gradient-to-br from-accent/15 to-primary/10">
              <Sparkles className="size-5 text-accent mb-2" />
              <div className="font-semibold">Goal</div>
              <p className="text-lg text-muted-foreground">Support physicians with intelligent, explainable decision-making tools.</p>
            </GlassCard>
          </div>
          <GlassCard delay={2} className="p-5">
            <div className="rounded-xl bg-background/60 border border-border p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-base uppercase tracking-[0.2em] text-muted-foreground">Patient · #4291</div>
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[{l:"Age",v:"31"},{l:"BMI",v:"24.8"},{l:"AMH",v:"3.4"}].map(x=>(
                  <div key={x.l} className="rounded-lg bg-muted/50 p-3">
                    <div className="text-2xl font-semibold text-primary">{x.v}</div>
                    <div className="text-base text-muted-foreground">{x.l}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/15 p-5 text-center">
                <div className="text-base uppercase tracking-[0.2em] text-primary mb-1">Predicted Success</div>
                <div className="text-5xl font-semibold text-gradient">74%</div>
              </div>
              <div className="space-y-2">
                {["Younger maternal age","High AMH level","Frozen transfer"].map(x=>(
                  <div key={x} className="flex items-center gap-2 text-lg"><CheckCircle2 className="size-4 text-emerald-400" />{x}</div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "prediction",
    label: "Example Prediction",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Example AI Prediction"
        title={<>Example <span className="text-gradient">prediction output</span></>}>
        <div className="grid md:grid-cols-12 gap-5">
          <GlassCard className="md:col-span-5 flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-primary/15 to-accent/10">
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">Success Probability</div>
            <div className="relative size-48 flex items-center justify-center mb-4">
              <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                <circle cx="50" cy="50" r="44" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="oklch(0.78 0.16 200)" strokeWidth="6"
                  strokeDasharray={`${2*Math.PI*44}`} strokeDashoffset={`${2*Math.PI*44*(1-0.74)}`} strokeLinecap="round" />
              </svg>
              <div className="text-6xl font-semibold text-gradient">74%</div>
            </div>
            <div className="text-lg text-muted-foreground">High-confidence prediction</div>
          </GlassCard>
          <div className="md:col-span-7 grid grid-cols-1 gap-4">
            <GlassCard delay={1}>
              <div className="text-base uppercase tracking-[0.2em] text-emerald-400 mb-3">Positive Factors</div>
              <div className="grid grid-cols-2 gap-2">
                {["Younger maternal age","High AMH level","Frozen transfer","Strong fertilization rate"].map(x=>(
                  <div key={x} className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-lg flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />{x}
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard delay={2}>
              <div className="text-base uppercase tracking-[0.2em] text-destructive mb-3">Risk Factors</div>
              <div className="grid grid-cols-2 gap-2">
                {["Elevated BMI","Lower embryo quality"].map(x=>(
                  <div key={x} className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-lg flex items-center gap-2">
                    <AlertTriangle className="size-4 text-destructive shrink-0" />{x}
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard delay={3}>
              <div className="text-base uppercase tracking-[0.2em] text-accent mb-2">AI Explanation</div>
              <p className="text-lg text-foreground/90">The prediction is supported by similarity to previous successful IVF cases with comparable clinical characteristics.</p>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "advantage",
    label: "Advantage",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Competitive Advantage"
        title={<>Why our platform is <span className="text-gradient">different</span></>}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { i: Brain, t: "Explainable AI predictions" },
            { i: Network, t: "RAG-powered retrieval" },
            { i: Dna, t: "Semantic embedding search" },
            { i: Layers, t: "Similar case intelligence" },
            { i: Lock, t: "Leakage-safe engineering" },
            { i: Sparkles, t: "Modern AI SaaS architecture" },
          ].map((x, k) => (
            <GlassCard key={x.t} delay={k} className="p-5 flex items-center gap-3">
              <x.i className="size-5 text-primary" /><span className="text-lg font-medium">{x.t}</span>
            </GlassCard>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <GlassCard delay={6}>
            <div className="text-base uppercase tracking-[0.2em] text-muted-foreground mb-3">Traditional Systems</div>
            <ul className="space-y-2 text-lg text-muted-foreground">
              <li>· Static calculators</li><li>· Rule-based logic</li><li>· Limited personalization</li>
            </ul>
          </GlassCard>
          <GlassCard delay={7} className="bg-gradient-to-br from-primary/15 to-accent/10">
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-3">Our Platform</div>
            <ul className="space-y-2 text-lg text-foreground">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" />Dynamic AI reasoning</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" />Context-aware predictions</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" />Explainable outputs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" />Retrieval-powered intelligence</li>
            </ul>
          </GlassCard>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "revenue",
    label: "Revenue Model",
    render: (i, t) => {
      const plans = [
        { n: "Pay-As-You-Go", p: "2,000", u: "EGP / case", f: ["Full prediction report","No commitment","Instant access"] },
        { n: "Basic", p: "30,000", u: "EGP / month", f: ["Up to 20 cases/mo","Standard analytics","Email support"] },
        { n: "Pro", p: "50,000", u: "EGP / month", f: ["Unlimited cases","Advanced analytics","Priority support"], featured: true },
        { n: "Enterprise", p: "Custom", u: "pricing", f: ["Dedicated deployment","White-label","SLA & integrations"] },
      ];
      return (
        <SlideShell index={i} total={t} eyebrow="Revenue Model"
          title={<>SaaS <span className="text-gradient">business model</span></>}>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {plans.map((p, k) => (
              <div key={p.n} className={`rounded-2xl p-6 animate-fade-up ${p.featured ? "glass-strong glow-ring border-primary/40 scale-[1.02]" : "glass"}`} style={{animationDelay:`${0.15+k*0.06}s`}}>
                {p.featured && <div className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2">Most popular</div>}
                <div className="font-semibold text-lg mb-1">{p.n}</div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-semibold text-gradient">{p.p}</span>
                  <span className="text-base text-muted-foreground">{p.u}</span>
                </div>
                <ul className="space-y-2 text-lg">
                  {p.f.map(x=>(
                    <li key={x} className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <GlassCard delay={5}>
            <div className="text-base uppercase tracking-[0.2em] text-accent mb-3">Additional Revenue Streams</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-lg">
              {["AI analytics reports","API integrations","White-label solutions","Enterprise deployment"].map(x=>(
                <div key={x} className="px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">{x}</div>
              ))}
            </div>
          </GlassCard>
        </SlideShell>
      );
    },
  },
  {
    id: "infra",
    label: "Infrastructure Cost",
    render: (i, t) => {
      const items = [
        { l: "Cloud Server", v: "$40 – $80" },
        { l: "OpenAI API", v: "$50 – $150" },
        { l: "Storage & Backups", v: "$20" },
        { l: "Monitoring & Security", v: "$20" },
        { l: "Domain & SSL", v: "$10" },
      ];
      return (
        <SlideShell index={i} total={t} eyebrow="Estimated Infrastructure Cost"
          title={<>Lean <span className="text-gradient">AI SaaS infrastructure</span></>}>
          <div className="grid md:grid-cols-12 gap-5">
            <GlassCard className="md:col-span-7">
              <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">Estimated Monthly Cost</div>
              <div className="divide-y divide-border">
                {items.map(x=>(
                  <div key={x.l} className="flex items-center justify-between py-3">
                    <span className="text-foreground/90">{x.l}</span>
                    <span className="font-mono font-semibold text-primary">{x.v}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
            <div className="md:col-span-5 space-y-4">
              <GlassCard className="bg-gradient-to-br from-primary/20 to-accent/10 text-center p-8">
                <div className="text-base uppercase tracking-[0.2em] text-primary mb-2">Total Estimate</div>
                <div className="text-5xl font-semibold text-gradient">$120–$280</div>
                <div className="text-lg text-muted-foreground mt-1">per month</div>
              </GlassCard>
              <GlassCard delay={1}>
                <div className="text-base uppercase tracking-[0.2em] text-accent mb-3">Why Cost is Low</div>
                <ul className="text-lg space-y-2">
                  {["Lightweight SaaS architecture","API-based AI inference","No expensive GPU servers","Efficient vector DB"].map(x=>(
                    <li key={x} className="flex items-start gap-2"><Zap className="size-4 text-accent mt-0.5" />{x}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </SlideShell>
      );
    },
  },
  {
    id: "roadmap",
    label: "Roadmap",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Scalability & Future Roadmap"
        title={<>Future <span className="text-gradient">vision</span></>}>
        <div className="grid md:grid-cols-2 gap-5">
          <GlassCard>
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">Future Features</div>
            <div className="space-y-3">
              {[
                { i: Microscope, t: "Embryo image analysis" },
                { i: Target, t: "Personalized IVF optimization" },
                { i: Brain, t: "AI physician copilot" },
                { i: Network, t: "Federated learning across clinics" },
                { i: Layers, t: "Multimodal fertility foundation models" },
              ].map((x,k)=>(
                <div key={x.t} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 animate-fade-up" style={{animationDelay:`${0.15+k*0.06}s`}}>
                  <x.i className="size-5 text-primary" /><span className="font-medium">{x.t}</span>
                </div>
              ))}
            </div>
          </GlassCard>
          <div className="space-y-4">
            <GlassCard delay={1}>
              <div className="text-base uppercase tracking-[0.2em] text-accent mb-4">Expansion Plan</div>
              <div className="space-y-3">
                {[
                  { i: Stethoscope, t: "Local fertility clinics", l: "Phase 1" },
                  { i: Globe2, t: "GCC market expansion", l: "Phase 2" },
                  { i: Rocket, t: "Enterprise partnerships", l: "Phase 3" },
                ].map((x)=>(
                  <div key={x.t} className="flex items-center gap-3 p-3 rounded-xl bg-accent/10">
                    <x.i className="size-5 text-accent" />
                    <div className="flex-1"><div className="font-medium">{x.t}</div></div>
                    <span className="text-base text-accent font-mono">{x.l}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard delay={2} className="bg-gradient-to-br from-primary/20 to-accent/15 p-8">
              <div className="text-base uppercase tracking-[0.2em] text-primary mb-3">Long-term Goal</div>
              <p className="text-xl font-semibold leading-snug">Become the intelligence infrastructure for fertility medicine.</p>
            </GlassCard>
          </div>
        </div>
      </SlideShell>
    ),
  },
  {
    id: "investment",
    label: "Investment",
    render: (i, t) => (
      <SlideShell index={i} total={t} eyebrow="Investment Opportunity"
        title={<>Why this startup has <span className="text-gradient">potential</span></>}>
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <GlassCard>
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-4">Strong Market Signals</div>
            <ul className="space-y-3">
              {[
                { i: TrendingUp, t: "Rapidly growing fertility industry" },
                { i: Brain, t: "Increasing healthcare AI adoption" },
                { i: Target, t: "Limited AI competition in IVF" },
              ].map((x)=>(
                <li key={x.t} className="flex items-center gap-3"><x.i className="size-5 text-primary" />{x.t}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard delay={1}>
            <div className="text-base uppercase tracking-[0.2em] text-accent mb-4">Technical Advantage</div>
            <ul className="space-y-3">
              {[
                { i: Network, t: "RAG-powered reasoning" },
                { i: Dna, t: "Embeddings & vector search" },
                { i: Sparkles, t: "Explainable AI" },
                { i: ShieldCheck, t: "Healthcare-oriented architecture" },
              ].map((x)=>(
                <li key={x.t} className="flex items-center gap-3"><x.i className="size-5 text-accent" />{x.t}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
        <GlassCard delay={2} className="text-center p-10 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent">
          <Sparkles className="size-8 text-primary mx-auto mb-4 animate-pulse-glow" />
          <p className="text-2xl md:text-3xl font-semibold leading-snug max-w-3xl mx-auto">
            Transform fertility medicine using <span className="text-gradient">AI-powered clinical intelligence</span>.
          </p>
        </GlassCard>
      </SlideShell>
    ),
  },
  {
    id: "thanks",
    label: "Thank You",
    render: (i, t) => (
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-16 animate-slide-in">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-base uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> AI-Powered IVF Intelligence Platform
          </div>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">
            <span className="text-gradient">Thank You</span>
          </h1>
          <p className="text-2xl text-muted-foreground">Questions?</p>
          <GlassCard className="mt-6 max-w-md">
            <div className="text-base uppercase tracking-[0.2em] text-primary mb-2">Strategic Medical Partner</div>
            <div className="text-xl font-semibold">Dr. Mahmoud Abdelaleem</div>
            <div className="text-lg text-muted-foreground">Senior IVF Consultant</div>
          </GlassCard>
          <div className="text-base text-muted-foreground tracking-widest mt-4">
            {String(i + 1).padStart(2, "0")} / {String(t).padStart(2, "0")}
          </div>
        </div>
      </section>
    ),
  },
];