import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "../data/projects";
import { Reveal } from "../components/Reveal";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <main className="pt-28 md:pt-36" data-testid={`case-study-${project.slug}`}>
      {/* Header */}
      <section className="container-editorial">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-10"
          data-testid="case-back-link"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Back to index
        </Link>

        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-8">
            <p className="overline mb-4">
              {project.index} — Case study — {project.year}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.98]">
              {project.title}
            </h1>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-foreground/80 max-w-2xl leading-snug">
              {project.tagline}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end space-y-4">
            <Detail label="Client" value={project.client} />
            <Detail label="Role" value={project.role} />
            <Detail label="Year" value={project.year} />
            <Detail label="Duration" value={project.duration} />
            <Detail label="Stack" value={project.stack.join(" · ")} />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground hover:opacity-70 transition-opacity pt-2"
                data-testid="case-live-link"
              >
                <span className="link-editorial">Visit live site</span>
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Cover */}
      <Reveal>
        <div className="container-editorial">
          <motion.div
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[16/9] overflow-hidden rounded-sm border border-border/60"
          >
            <img
              src={project.cover}
              alt={`${project.title} cover`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </Reveal>

      {/* Metrics */}
      <section className="container-editorial mt-24 md:mt-32">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-background p-8 md:p-10">
                <p className="font-serif text-5xl md:text-6xl tracking-tight leading-none">
                  {m.value}
                </p>
                <p className="overline mt-4">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Narrative */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="overline mb-4">— The challenge</p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight">
            Where it started.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
            {project.challenge}
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="overline mb-4">— The approach</p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight">
            How we worked.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
            {project.approach}
          </p>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {project.gallery.map((src, i) => (
          <Reveal key={src} delay={i * 0.08}>
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border/60">
              <img
                src={src}
                alt={`${project.title} — visual ${i + 1}`}
                className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-[1500ms] ease-out"
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Outcome */}
      <section className="container-editorial mt-24 md:mt-32 grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="overline mb-4">— The outcome</p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight">
            What shipped.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
            {project.outcome}
          </p>
        </Reveal>
      </section>

      {/* Next project */}
      <section className="mt-32 md:mt-40 border-t border-border/60" data-testid="case-next-project">
        <Link
          to={`/work/${next.slug}`}
          className="group block container-editorial py-16 md:py-24"
        >
          <p className="overline mb-4">— Next case</p>
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h2 className="font-serif text-4xl md:text-7xl tracking-[-0.02em] leading-[1] transition-all duration-700 group-hover:italic">
              {next.title}
            </h2>
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground">
              View case
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>
          <p className="mt-4 text-foreground/70 max-w-xl">{next.subtitle}</p>
        </Link>
      </section>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="overline mb-1">{label}</p>
      <p className="text-base md:text-lg text-foreground/85">{value}</p>
    </div>
  );
}
