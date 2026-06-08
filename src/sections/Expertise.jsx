import { expertise } from "../data/experience";
import { Reveal } from "../components/Reveal";

const MARQUEE_WORDS = [
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "GraphQL",
  "Design Systems",
  "Performance",
  "Accessibility",
  "Editorial Web",
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="expertise-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-5">
              <p className="overline mb-4">— Expertise</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                Eight years+
                <br />
                <span className="italic">One discipline.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
                I work across the modern React stack with a bias toward small,
                composable systems and a deep affection for typography, motion, and
                the parts of the web that aren&apos;t in the framework docs.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 border-t border-border/60 pt-12">
            {expertise.map((group) => (
              <div key={group.category} data-testid={`expertise-group-${group.category}`}>
                <p className="overline mb-4">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-serif text-xl md:text-2xl tracking-tight text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="mt-20 md:mt-28 overflow-hidden border-y border-border/60 py-6 md:py-8">
        <div className="marquee-track flex whitespace-nowrap gap-12">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="font-serif italic text-3xl md:text-5xl text-foreground/80"
            >
              {w} <span className="text-muted-foreground/50 mx-3">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
