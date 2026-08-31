"use client";

import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We talk about what you're building, who it's for, and what success looks like. I ask the questions that save weeks later.",
  },
  {
    n: "02",
    title: "Scope & Plan",
    description:
      "A clear proposal with timeline, deliverables, and cost. No surprises, no scope creep — just an honest plan we both agree on.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "I build in the open — regular check-ins, working previews, and iterative feedback loops. You see the work as it takes shape.",
  },
  {
    n: "04",
    title: "Deliver & Support",
    description:
      "Clean handoff with documentation. Post-launch support to catch anything that needs tuning. The relationship doesn't end at deploy.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="process-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="overline mb-4">— How I work</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                No black boxes,
                <br />
                <span className="italic">just clear process.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
                Every engagement follows the same four steps — adapted to fit
                the project, never skipped for convenience.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border/60 border border-border/60">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors"
              data-testid={`process-step-${step.n}`}
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
                / {step.n}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
