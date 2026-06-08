import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-9" aria-hidden data-testid="theme-toggle-placeholder" />
    );
  }

  const current = theme === "system" ? resolvedTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      data-testid="theme-toggle-button"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
        strokeWidth={1.5}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
        strokeWidth={1.5}
      />
    </button>
  );
}
