import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { moreWork } from "@/data/moreWork";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "More Work",
  description:
    "Additional client projects across React/Next.js, WordPress, Shopify, Magento, and more — listed without the full case-study treatment.",
  alternates: { canonical: "/more-work" },
};

const CATEGORY_ORDER = [
  "React / Next.js",
  "WordPress",
  "WordPress + WooCommerce",
  "PrestaShop",
  "Shopify",
  "Magento",
  "Laravel",
  "Confidential",
];

function groupByCategory(items) {
  const groups = new Map();
  for (const item of items) {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  }
  return CATEGORY_ORDER.filter((c) => groups.has(c)).map((c) => ({
    category: c,
    items: groups.get(c),
  }));
}

export default function MoreWork() {
  const groups = groupByCategory(moreWork);

  return (
    <main className="pt-28 md:pt-36" data-testid="page-more-work">
      <section className="container-editorial">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-10"
          data-testid="more-work-back-link"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Back to index
        </Link>

        <Reveal>
          <p className="overline mb-4">— More Work</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.98]">
            Everywhere
            <br />
            <span className="italic">else.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed">
            {moreWork.length} additional client projects across a range of stacks —
            listed here by tech, without the full case-study treatment the featured
            work gets.
          </p>
        </Reveal>
      </section>

      <div className="mt-20 md:mt-28 space-y-20 md:space-y-24">
        {groups.map((group, gi) => (
          <section
            key={group.category}
            className="container-editorial"
            data-testid={`more-work-group-${group.category}`}
          >
            <Reveal delay={Math.min(gi * 0.03, 0.15)}>
              <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b border-border/60 pb-4">
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
                  {group.category}
                </h2>
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                  {group.items.length} project{group.items.length > 1 ? "s" : ""}
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {group.items.map((item, i) => (
                <Reveal key={item.name} delay={Math.min(i * 0.03, 0.2)}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between h-full border border-border/60 p-6 hover:border-foreground/40 hover:bg-secondary/30 transition-all duration-300"
                      data-testid={`more-work-card-${item.name}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-serif text-xl tracking-tight group-hover:italic transition-all duration-300">
                          {item.name}
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.tech}
                      </span>
                    </a>
                  ) : (
                    <div
                      className="flex flex-col justify-between h-full border border-dashed border-border/60 p-6"
                      data-testid={`more-work-card-${item.name}`}
                    >
                      <span className="font-serif text-xl tracking-tight text-foreground/75">
                        {item.name}
                      </span>
                      <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.tech}
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-24 md:mt-32 py-16 md:py-20 border-t border-border/60">
        <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              Want the full story on something?
            </h2>
            <p className="text-foreground/70 max-w-sm">
              These are quick references — the featured case studies on the home
              page go deeper.
            </p>
          </div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-3 border border-white/10 text-foreground/80 font-mono text-sm tracking-widest uppercase px-7 py-4 hover:border-foreground/30 hover:text-foreground transition-all duration-300"
          >
            ← Selected work
          </Link>
        </div>
      </section>
    </main>
  );
}
