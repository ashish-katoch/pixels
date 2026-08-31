import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description: "Your message has been received. Ashish Katoch will respond within 48 hours.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYou() {
  return (
    <main
      className="min-h-[80vh] flex items-center"
      data-testid="page-thank-you"
    >
      <div className="container-editorial">
        <p className="overline mb-4">— Message received</p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.98]">
          Thank you,
          <br />
          <span className="italic">sincerely.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-lg leading-relaxed">
          Your message has been received. I typically respond within 48 hours —
          sooner if the coffee is strong.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] border border-border/60 px-6 py-3 hover:border-foreground/40 hover:text-foreground transition-colors"
            data-testid="thankyou-home-link"
          >
            ← Back to index
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors"
            data-testid="thankyou-work-link"
          >
            Browse case studies ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
