"use client";

import { useState, useEffect, useCallback } from "react";

const CLARITY_ID = "ya38cmioy3";
const STORAGE_KEY = "analytics-consent";

function injectClarity() {
  if (document.querySelector(`script[data-clarity]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  s.setAttribute("data-clarity", "");
  document.head.appendChild(s);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "yes") {
        injectClarity();
      } else if (stored !== "no") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const respond = useCallback((accepted) => {
    try {
      localStorage.setItem(STORAGE_KEY, accepted ? "yes" : "no");
    } catch {}
    if (accepted) injectClarity();
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-border/60 bg-background/95 backdrop-blur-sm"
    >
      <div className="container-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
        <p className="text-sm text-foreground/75 max-w-xl">
          This site uses Microsoft Clarity for anonymous analytics.
          No personal data is sold or shared.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => respond(false)}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={() => respond(true)}
            className="font-mono text-[11px] uppercase tracking-[0.18em] bg-foreground text-background px-4 py-2 hover:opacity-80 transition-opacity"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
