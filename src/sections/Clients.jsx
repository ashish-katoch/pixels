import { Reveal } from "../components/Reveal";

const CLIENT_NAMES = [
  "Safeway",
  "Kiehl's",
  "Sobeys",
  "The Body Shop",
  "CSA Group",
  "Avon",
  "Polín et moi",
  "FreshCo",
];

export function Clients() {
  return (
    <section
      className="py-16 md:py-20 border-t border-border/60"
      data-testid="clients-section"
    >
      <div className="container-editorial">
        <Reveal>
          <p className="overline mb-8 md:mb-10 text-center">
            — Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
            {CLIENT_NAMES.map((name) => (
              <span
                key={name}
                className="font-serif text-xl md:text-2xl tracking-tight text-foreground/50"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
