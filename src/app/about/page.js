import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { About } from "@/sections/About";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = "https://ashishpixels.com";

export const metadata = {
  title: "About",
  description:
    "Ashish Katoch is a frontend engineer based in Mohali, India, with 8+ years building React.js and Next.js applications — a background in UI design baked in.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <main className="pt-28 md:pt-36" data-testid="page-about">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="container-editorial">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-10"
          data-testid="about-back-link"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Back to index
        </Link>
      </div>
      <About />
    </main>
  );
}
