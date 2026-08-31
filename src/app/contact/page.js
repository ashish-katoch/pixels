import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Contact } from "@/sections/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Ashish Katoch for freelance React.js and Next.js projects. Based in Mohali, India — available for remote work worldwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-28 md:pt-36" data-testid="page-contact">
      <div className="container-editorial">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Back to index
        </Link>
      </div>
      <Contact />
    </main>
  );
}
