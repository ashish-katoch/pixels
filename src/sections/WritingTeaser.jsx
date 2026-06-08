import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { posts } from "../data/posts";
import { Reveal } from "../components/Reveal";

export function WritingTeaser() {
  return (
    <section
      id="writing"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="writing-section"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="overline mb-4">— Writing</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                Notes on craft,
                <br />
                <span className="italic">code, and quiet design.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Link
                to="/writing"
                className="link-editorial font-mono text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-2"
                data-testid="writing-index-link"
              >
                Index of essays
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </Reveal>

        <ul className="border-t border-border/60">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li className="border-b border-border/60" data-testid={`teaser-post-${post.slug}`}>
                <Link
                  to={`/writing/${post.slug}`}
                  className="group grid grid-cols-12 gap-4 py-7 md:py-8 items-baseline"
                >
                  <span className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                  <h3 className="col-span-7 md:col-span-7 font-serif text-xl md:text-3xl tracking-tight leading-tight transition-all duration-500 group-hover:italic">
                    {post.title}
                  </h3>
                  <span className="hidden md:block col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {post.tag}
                  </span>
                  <span className="col-span-2 md:col-span-1 text-right font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {post.readTime}
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
