"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { Reveal } from "../components/Reveal";

export function FeaturedProjects() {
  return (
    <section id="work" className="py-24 md:py-32" data-testid="featured-projects">
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="overline mb-4">— Selected Work, 2021 — 2025</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                Featured <span className="italic">Projects</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                Each case study is a short essay — the challenge, the approach, and
                the result. No screenshots without a sentence to earn them.
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="border-t border-border/60" data-testid="projects-list">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-end">
            <Link
              href="/more-work"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
              data-testid="more-work-link"
            >
              See more work
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PREVIEW_BOX_HEIGHT = 260;

function ProjectRow({ project, index }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [panDistance, setPanDistance] = useState(0);
  const imgRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 32, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 350, damping: 32, mass: 0.6 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleImageLoad = () => {
    const el = imgRef.current;
    if (!el) return;
    setPanDistance(Math.max(0, el.offsetHeight - PREVIEW_BOX_HEIGHT));
  };

  return (
    <li className="border-b border-border/60" data-testid={`project-row-${project.slug}`}>
      <Link
        href={`/work/${project.slug}`}
        className="group relative grid grid-cols-12 gap-4 md:gap-6 items-center py-7 md:py-9"
        data-cursor="hover"
        onMouseEnter={() => !reduce && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={reduce ? undefined : handleMouseMove}
      >
        {/* Index */}
        <span className="col-span-2 md:col-span-1 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
          {project.index}
        </span>

        {/* Title */}
        <div className="col-span-10 md:col-span-5">
          <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
            <span className="transition-all duration-500 group-hover:italic">
              {project.title}
            </span>
          </h3>
        </div>

        {/* Subtitle */}
        <p className="col-span-12 md:col-span-4 text-sm md:text-base text-foreground/70 leading-snug">
          {project.subtitle}
        </p>

        {/* Year + arrow */}
        <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end gap-4 md:gap-6">
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
            {project.year}
          </span>
          <motion.span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-foreground/70 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors"
            whileHover={reduce ? undefined : { rotate: 45 }}
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </div>

        {/* Hover preview — follows the cursor within the row */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-10 w-80 md:w-[420px] h-[260px] overflow-hidden rounded-sm border border-border/60 shadow-2xl bg-background hidden md:block"
          style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.previewScroll ? (
            <motion.img
              ref={imgRef}
              src={project.previewScroll}
              alt={`${project.title} project preview`}
              loading="lazy"
              onLoad={handleImageLoad}
              className="w-full h-auto"
              animate={
                reduce || panDistance === 0
                  ? { y: 0 }
                  : { y: hovered ? [0, -panDistance, 0] : 0 }
              }
              transition={
                hovered
                  ? { duration: panDistance / 40, ease: "linear", repeat: Infinity }
                  : { duration: 0.4, ease: "easeOut" }
              }
            />
          ) : (
            <img
              src={project.cover}
              alt={`${project.title} project cover`}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          )}
        </motion.div>
      </Link>
    </li>
  );
}
