import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { WordReveal } from "../components/Reveal";

export function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 md:pt-32 pb-10"
      data-testid="hero-section"
    >
      <motion.div className="container-editorial flex-1 flex items-center" style={{ y, opacity }}>
        <div className="w-full">
          {/* Meta row */}
          <div className="grid grid-cols-12 mb-10 md:mb-14 items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 md:col-span-3 overline"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available · Q1 2026
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block col-span-6 overline text-center"
            >
              Portfolio — Vol. 07
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-12 md:col-span-3 overline md:text-right mt-2 md:mt-0"
            >
              Mohali · 30.7°N 76.7°E
            </motion.div>
          </div>

          {/* Editorial name */}
          <h1
            className="font-serif tracking-[-0.03em] leading-[0.92] text-[15vw] md:text-[12vw] lg:text-[10.5vw]"
            data-testid="hero-name"
          >
            <span className="block">
              <WordReveal text="Ashish" />
            </span>
            <span className="block italic font-normal">
              <WordReveal text="Katoch" delay={0.2} />
            </span>
          </h1>

          {/* Tagline */}
          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="col-span-12 md:col-span-5 md:col-start-1"
            >
              <p className="overline mb-3">— The work</p>
              <p className="text-pretty text-lg md:text-xl text-foreground/85 leading-snug font-light max-w-md">
                Frontend developer with{" "}
                <span className="italic font-serif">8+ years</span> building
                responsive, scalable web applications in React.js and Next.js — a
                background in UI design baked in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="col-span-12 md:col-span-5 md:col-start-8"
            >
              <p className="overline mb-3">— Currently</p>
              <p className="text-pretty text-lg md:text-xl text-foreground/85 leading-snug font-light max-w-md">
                Working as an{" "}
                <span className="italic font-serif">independent freelancer</span>{" "}
                since December 2025. Available for full-time roles and select
                product engagements.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="container-editorial mt-10"
      >
        <div className="flex items-end justify-between gap-6 border-t border-border/60 pt-6">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80 hover:text-foreground"
            data-testid="hero-scroll-cue"
          >
            <span className="link-editorial">Scroll — selected work</span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            </motion.span>
          </a>
          <p className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Index / 01 — Hero
          </p>
        </div>
      </motion.div>
    </section>
  );
}
