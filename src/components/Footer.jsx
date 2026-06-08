import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/ashish-katoch", testid: "footer-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashishkatoch/", testid: "footer-linkedin" },
  { label: "Behance", href: "https://www.behance.net/ashish-katoch", testid: "footer-behance" },
];

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const opts = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(new Date()));
    };
    update();
    const id = setInterval(update, 30 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border/60 mt-24 md:mt-32" data-testid="site-footer">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-6">
            <p className="overline mb-5">— Open to work · 2026</p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-balance">
              Let&apos;s build something
              <br />
              quietly remarkable.
            </h2>
            <a
              href="mailto:ashishkatoch7113@hotmail.com"
              className="link-editorial mt-6 inline-block font-serif italic text-xl md:text-2xl text-foreground/90"
              data-testid="footer-email-link"
            >
              ashishkatoch7113@hotmail.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="overline mb-4">Elsewhere</p>
            <ul className="space-y-2 text-base">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-editorial text-foreground/80 hover:text-foreground"
                    data-testid={s.testid}
                  >
                    {s.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="overline mb-4">Coordinates</p>
            <p className="text-base text-foreground/80">Mohali, India</p>
            <p className="text-base text-muted-foreground font-mono tracking-tight mt-1">
              {time || "—"} IST <span className="blink">▍</span>
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors"
              data-testid="footer-back-to-top"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Ashish Katoch. All rights reserved.</p>
          <p>Designed &amp; built in Mohali — set in Playfair Display &amp; Outfit.</p>
        </div>
      </div>
    </footer>
  );
}
