import { ArrowUpRight } from "lucide-react";
import { moreWork } from "../data/moreWork";
import { Reveal } from "../components/Reveal";

export function MoreWork() {
  return (
    <section
      id="more-work"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="more-work-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="overline mb-4">— More Work</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                Elsewhere,
                <br />
                <span className="italic">briefly noted.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                Additional client work across a range of stacks — listed here without
                the full case-study treatment.
              </p>
            </div>
          </div>
        </Reveal>

        <ul className="border-t border-border/60" data-testid="more-work-list">
          {moreWork.map((item, i) => (
            <Reveal key={item.name} delay={Math.min(i * 0.02, 0.3)}>
              <li className="border-b border-border/60" data-testid={`more-work-row-${item.name}`}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-4 hover:pl-2 transition-all duration-300"
                  >
                    <span className="font-serif text-lg md:text-xl tracking-tight group-hover:italic transition-all duration-300">
                      {item.name}
                    </span>
                    <span className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.tech}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" strokeWidth={1.5} />
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-6 py-4">
                    <span className="font-serif text-lg md:text-xl tracking-tight text-foreground/80">
                      {item.name}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground text-right">
                      {item.tech}
                    </span>
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
