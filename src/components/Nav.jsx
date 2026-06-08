import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { to: "/", label: "Index", end: true },
  { to: "/#work", label: "Work" },
  { to: "/#expertise", label: "Expertise" },
  { to: "/#about", label: "About" },
  { to: "/writing", label: "Writing" },
  { to: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/?section=${id}`);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border/50"
            : "bg-transparent"
        }`}
        data-testid="site-nav"
      >
        <div className="container-editorial flex h-16 md:h-20 items-center justify-between">
          <Link
            to="/"
            className="font-serif text-lg md:text-xl tracking-tight"
            data-testid="nav-logo"
          >
            Ashish<span className="text-muted-foreground">.</span>Katoch
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em]">
            {NAV.slice(1)
              .filter((i) => i.label !== "Writing")
              .map((item) => (
              <a
                key={item.to}
                href={item.to.startsWith("/#") ? item.to.replace("/", "") : item.to}
                className="link-editorial text-foreground/70 hover:text-foreground transition-colors"
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                onClick={(e) => {
                  if (item.to.startsWith("/#")) {
                    e.preventDefault();
                    goToSection(item.to.slice(2));
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <NavLink
              to="/writing"
              className={({ isActive }) =>
                `link-editorial transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`
              }
              data-testid="nav-link-writing"
            >
              Writing
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80 hover:text-foreground transition-colors"
              data-testid="nav-resume-download"
            >
              <span className="link-editorial">Résumé</span>
              <span aria-hidden>↗</span>
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-testid="mobile-menu-open"
            >
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu-overlay"
          >
            <div className="container-editorial flex h-16 items-center justify-between">
              <Link to="/" onClick={() => setOpen(false)} className="font-serif text-lg">
                Ashish.Katoch
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60"
                aria-label="Close menu"
                data-testid="mobile-menu-close"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="container-editorial mt-16 flex flex-col gap-7 font-serif text-4xl">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.to.startsWith("/#") ? item.to.replace("/", "") : item.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                  onClick={(e) => {
                    setOpen(false);
                    if (item.to.startsWith("/#")) {
                      e.preventDefault();
                      setTimeout(() => goToSection(item.to.slice(2)), 280);
                    }
                  }}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground mt-8"
                data-testid="mobile-nav-resume"
              >
                ↗ Résumé
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
