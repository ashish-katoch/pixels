import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
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
                Six clients, <span className="italic">honestly</span> told.
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
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const reduce = useReducedMotion();
  return (
    <li className="border-b border-border/60" data-testid={`project-row-${project.slug}`}>
      <Link
        to={`/work/${project.slug}`}
        className="group relative grid grid-cols-12 gap-4 md:gap-6 items-center py-7 md:py-9"
        data-cursor="hover"
      >
        {/* Index */}
        <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
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
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {project.year}
          </span>
          <motion.span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-foreground/70 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors"
            whileHover={reduce ? undefined : { rotate: 45 }}
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </div>

        {/* Hover preview card */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-4 md:right-24 top-1/2 -translate-y-1/2 w-48 md:w-64 aspect-[4/3] overflow-hidden rounded-sm border border-border/60 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-x-2 group-hover:translate-x-0 hidden md:block"
        >
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
          />
        </div>
      </Link>
    </li>
  );
}
