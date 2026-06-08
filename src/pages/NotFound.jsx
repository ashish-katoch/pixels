import { Link } from "react-router-dom";

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
          way, let&apos;s go back to the index.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block link-editorial font-mono text-[11px] uppercase tracking-[0.22em]"
          data-testid="404-home-link"
        >
          ↗ Return to index
        </Link>
      </div>
    </main>
  );
}
