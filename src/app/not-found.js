import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Ashish Katoch's portfolio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center" data-testid="page-not-found">
      <div className="container-editorial">
        <p className="overline mb-4">— Error 404</p>
        <h1 className="font-serif text-6xl md:text-8xl tracking-[-0.02em] leading-[0.95]">
          This page,
          <br />
          <span className="italic">it isn&apos;t here.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-md">
          Either I haven&apos;t built it yet, or it moved without telling me. Either
          way, let&apos;s get you somewhere useful.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] border border-border/60 px-6 py-3 hover:border-foreground/40 hover:text-foreground transition-colors"
            data-testid="404-home-link"
          >
            ← Return to index
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors"
            data-testid="404-work-link"
          >
            Browse case studies ↗
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors"
            data-testid="404-contact-link"
          >
            Get in touch ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
