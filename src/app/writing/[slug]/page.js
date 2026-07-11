import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPost, posts } from "@/data/posts";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://ashishpixels.com";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `${SITE_URL}/writing/${slug}` },
    twitter: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const next = posts[(idx + 1) % posts.length];

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${SITE_URL}/writing/${slug}`,
    author: { "@type": "Person", name: "Ashish Katoch", url: SITE_URL },
    keywords: post.tag,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Writing", item: `${SITE_URL}/writing` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/writing/${slug}` },
    ],
  };

  return (
    <main className="pt-28 md:pt-36" data-testid={`post-${post.slug}`}>
      <JsonLd data={blogPostingJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <article className="container-editorial">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-10"
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

        <div
          className="mt-16 max-w-2xl flex items-center gap-4 border-t border-border/60 pt-8"
          data-testid="post-author-byline"
        >
          <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center font-serif text-lg shrink-0">
            AK
          </div>
          <div>
            <p className="text-sm font-medium">Written by Ashish Katoch</p>
            <p className="text-sm text-muted-foreground">
              Frontend Engineer — 8+ years — {" "}
              <a
                href="https://www.linkedin.com/in/ashishkatoch/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial hover:text-foreground"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href="https://github.com/ashish-katoch"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial hover:text-foreground"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </article>

      <section className="mt-32 border-t border-border/60" data-testid="post-next">
        <Link href={`/writing/${next.slug}`} className="group block container-editorial py-16 md:py-20">
          <p className="overline mb-4">— Next essay</p>
          <div className="flex items-baseline justify-between gap-6 flex-wrap">
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.02] transition-all duration-700 group-hover:italic">
              {next.title}
            </h2>
            <span className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground">
              Read
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}
