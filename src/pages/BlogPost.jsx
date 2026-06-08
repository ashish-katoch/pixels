import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPost, posts } from "../data/posts";
import { Reveal } from "../components/Reveal";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) return <Navigate to="/writing" replace />;

  const idx = posts.findIndex((p) => p.slug === slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <main className="pt-28 md:pt-36" data-testid={`post-${post.slug}`}>
      <article className="container-editorial">
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-10"
          data-testid="post-back-link"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Index of writing
        </Link>

        <header className="max-w-3xl">
          <p className="overline mb-4">
            {post.tag} ·{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}{" "}
            · {post.readTime} read
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.02]">
            {post.title}
          </h1>
          <p className="mt-6 font-serif italic text-xl md:text-2xl text-foreground/80 leading-snug">
            {post.excerpt}
          </p>
        </header>

        <div className="mt-16 max-w-2xl space-y-7 text-lg md:text-xl leading-relaxed text-foreground/90">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="text-pretty">{para}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="mt-32 border-t border-border/60" data-testid="post-next">
        <Link to={`/writing/${next.slug}`} className="group block container-editorial py-16 md:py-20">
          <p className="overline mb-4">— Next essay</p>
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.02] transition-all duration-700 group-hover:italic">
              {next.title}
            </h2>
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground">
              Read
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}
