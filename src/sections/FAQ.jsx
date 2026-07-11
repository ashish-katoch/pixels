import { Reveal } from "../components/Reveal";
import { JsonLd } from "../components/JsonLd";

const FAQS = [
  {
    q: "Who is Ashish Katoch?",
    a: "Ashish Katoch is a frontend developer based in Mohali, India, with 8+ years of experience building React.js and Next.js applications. He's currently working as an independent freelancer, available for full-time roles and select product engagements.",
  },
  {
    q: "What technologies does Ashish Katoch use?",
    a: "React.js and Next.js as core tools, with TypeScript, modern JavaScript, Tailwind CSS, GSAP and Framer Motion for animation, and adjacent experience in Node.js, Express and WordPress.",
  },
  {
    q: "Where is Ashish Katoch located?",
    a: "Mohali, Punjab, India — working remotely with clients and teams internationally.",
  },
  {
    q: "How many years of experience does Ashish have?",
    a: "8+ years, starting as a web designer in 2017 and moving into frontend engineering with React.js and Next.js.",
  },
  {
    q: "Can I hire Ashish Katoch?",
    a: "Yes — he's available for full-time roles and select freelance/product engagements. The fastest way to reach him is through the contact section below or LinkedIn.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="faq-section"
    >
      <JsonLd data={FAQ_JSON_LD} />
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-6">
              <p className="overline mb-4">— FAQ</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                Quick
                <br />
                <span className="italic">answers.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-border/60">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div
                className="grid grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 border-b border-border/60"
                data-testid={`faq-item-${i}`}
              >
                <h3 className="col-span-12 md:col-span-5 font-serif text-xl md:text-2xl tracking-tight leading-snug">
                  {f.q}
                </h3>
                <p className="col-span-12 md:col-span-6 md:col-start-7 text-base md:text-lg text-foreground/75 leading-relaxed">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
