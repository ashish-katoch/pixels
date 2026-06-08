import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { education } from "../data/experience";

const PRINCIPLES = [
  { n: "01", t: "Pixel-perfect UI", d: "Designs translate into clean, faithful components — every time." },
  { n: "02", t: "Component-driven", d: "Composable, reusable, and friendly to the next engineer in the file." },
  { n: "03", t: "Performance is a feature", d: "Bundle size, render budgets and tab-order all earn their place." },
  { n: "04", t: "Accessible by default", d: "WCAG AA is the floor — the keyboard works, the screen reader works." },
];

const STATS = [
  { v: "8+", l: "Years experience" },
  { v: "70+", l: "Projects delivered" },
  { v: "40%", l: "Avg. UX improvement" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="about-section"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="overline mb-4">— About</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
              A frontend
              <br />
              <span className="italic">with a point of view.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7 space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              I&apos;m Ashish — a frontend developer based in Mohali, India, with{" "}
              <span className="italic font-serif">8+ years</span> of building
              modern, scalable web applications. My background in UI design pairs
              with frontend engineering so that complex designs become clean,
              performant interfaces.
            </p>
            <p>
              I specialise in <span className="italic font-serif">React.js</span>{" "}
              and <span className="italic font-serif">Next.js</span>, with strong
              fundamentals in HTML5, CSS3, JavaScript, TypeScript and modern
              styling frameworks like Tailwind CSS and Material UI. My day-to-day
              is component-driven development, responsive design, accessibility,
              and maintainable frontend architecture.
            </p>
            <p>
              I enjoy collaborating with cross-functional teams to deliver
              products that balance performance, usability and visual quality
              across every device and browser.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10"
              data-testid={`stat-${i}`}
            >
              <p className="font-serif text-5xl md:text-7xl tracking-tight leading-none">
                {s.v}
              </p>
              <p className="overline mt-4">{s.l}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 md:mt-24 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="overline mb-4">— Education</p>
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight">
              Trained in
              <br />
              <span className="italic">computer applications.</span>
            </h3>
          </Reveal>
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={0.05 * i}>
                <div className="grid grid-cols-12 gap-4 py-5 border-b border-border/60 items-baseline">
                  <p className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {e.year}
                  </p>
                  <div className="col-span-12 md:col-span-6">
                    <p className="font-serif text-xl md:text-2xl">{e.degree}</p>
                    <p className="text-sm text-foreground/70 mt-1">{e.school}</p>
                  </div>
                  <p className="col-span-12 md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {e.score}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-4 gap-px bg-border/60 border border-border/60">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors"
              data-testid={`principle-${p.n}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
                / {p.n}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-3">
                {p.t}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
