import { experience } from "../data/experience";
import { Reveal } from "../components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="experience-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="overline mb-4">— Experience, 2017 — Present · 8+ years</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                The trajectory,
                <br />
                <span className="italic">briefly.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80"
                data-testid="experience-resume-link"
              >
                ↗ Download résumé (PDF)
              </a>
            </div>
          </div>
        </Reveal>

        <ol className="border-t border-border/60" data-testid="experience-list">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.company} delay={i * 0.06}>
              <li className="grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 border-b border-border/60 items-baseline">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {item.year}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    {item.company} — <span className="italic">{item.location}</span>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-base text-foreground/75 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
