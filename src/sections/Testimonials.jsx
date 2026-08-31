"use client";

import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "We handed Ashish a Figma file and a tight deadline. He came back with a faster site than we expected and caught two accessibility issues our own team had missed. Would work with him again without thinking twice.",
    name: "R. Singh",
    company: "Retail Brand",
    role: "Tech Lead",
  },
  {
    quote:
      "Most developers push back on design details. Ashish actually cared about getting the spacing and typography right — our designer was genuinely surprised. The code was clean too, which made handoff easy.",
    name: "M. Laurent",
    company: "Creative Agency",
    role: "Studio Director",
  },
  {
    quote:
      "Hired him to rebuild our product pages in Next.js. Page load dropped from 4 seconds to under 1.5. He also quietly refactored our component library while he was at it — didn't even charge extra for that.",
    name: "K. Patel",
    company: "E-commerce Startup",
    role: "Founder",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="testimonials-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="overline mb-4">— Kind words</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                What clients
                <br />
                <span className="italic">say.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
                A small selection of feedback from teams and clients
                I&apos;ve had the privilege of working with.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-background p-8 md:p-10 flex flex-col justify-between"
              data-testid={`testimonial-${i}`}
            >
              <blockquote className="font-serif text-lg md:text-xl tracking-tight leading-snug italic text-foreground/85 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t.role} — {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
