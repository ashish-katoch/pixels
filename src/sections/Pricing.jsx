"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

const PLANS = [
  {
    name: "Starter",
    price: "$500 – $1,200",
    unit: "per project",
    description: "For small businesses needing a polished landing page or a single-page site built fast.",
    features: [
      "Responsive single-page site",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Start a project",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,500 – $3,500",
    unit: "per project",
    description: "For companies that need a multi-page site or web app with custom interactions and polished UI.",
    features: [
      "Multi-page React / Next.js site",
      "Custom animations & interactions",
      "Performance optimisation",
      "SEO & accessibility audit",
      "CMS integration",
      "3 rounds of revisions",
      "4-week delivery",
    ],
    cta: "Let’s talk scope",
    highlight: true,
  },
  {
    name: "Retainer",
    price: "$1,000 – $2,000",
    unit: "per month",
    description: "Ongoing frontend support — ideal for product teams that need a reliable senior developer on call.",
    features: [
      "Dedicated hours each month",
      "Priority response (< 24 hrs)",
      "Code reviews & architecture",
      "Bug fixes & feature builds",
      "Performance monitoring",
      "Monthly progress reports",
    ],
    cta: "Discuss availability",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="pricing-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="overline mb-4">— Pricing</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                Clear scope,
                <br />
                <span className="italic">honest pricing.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
                Every project is different — these are starting points, not ceilings.
                Complex builds, tight timelines, and custom requirements are scoped individually.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`bg-background p-8 md:p-10 flex flex-col ${
                plan.highlight
                  ? "ring-1 ring-foreground/20 relative"
                  : ""
              }`}
              data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
            >
              {plan.highlight && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-1 font-mono text-[10px] uppercase tracking-[0.22em]">
                  Most popular
                </span>
              )}

              <p className="overline mb-6">{plan.name}</p>

              <div className="mb-6">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  {plan.unit}
                </span>
              </div>

              <p className="text-base text-foreground/75 leading-relaxed mb-8">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`group inline-flex items-center justify-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] py-4 px-6 border transition-colors duration-300 ${
                  plan.highlight
                    ? "bg-foreground text-background border-foreground hover:bg-foreground/90"
                    : "border-border/60 text-foreground/80 hover:border-foreground/40 hover:text-foreground"
                }`}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
              >
                <span className="link-editorial">{plan.cta}</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            All prices in USD. Scope and timelines are discussed before any commitment.
            Need something outside these tiers?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="link-editorial text-foreground/70 hover:text-foreground"
            >
              Let&apos;s talk
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
