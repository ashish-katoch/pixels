import { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { Reveal } from "../components/Reveal";

export default function Writing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="pt-28 md:pt-36" data-testid="page-writing">
      <section className="container-editorial">
        <Reveal>
          <p className="overline mb-4">— Writing, Index</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.98]">
            Notes,
            <br />
            <span className="italic">written slowly.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed">
            Occasional essays on frontend craft, design systems, and the
            increasingly editorial weight of building for the web.
          </p>
        </Reveal>

        <ul className="mt-16 md:mt-20 border-t border-border/60" data-testid="writing-list">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li
                className="border-b border-border/60"
                data-testid={`post-item-${post.slug}`}
              >
                <Link
                  to={`/writing/${post.slug}`}
                  className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-start"
                >
                  <span className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground pt-2">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                  <div className="col-span-9 md:col-span-7">
                    <h2 className="font-serif text-2xl md:text-4xl tracking-tight leading-tight transition-all duration-500 group-hover:italic">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-base text-foreground/70 leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:flex col-span-3 flex-col items-end gap-2 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {post.tag}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
