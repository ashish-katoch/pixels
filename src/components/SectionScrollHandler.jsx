"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Reads ?section=<id> on the home page, smooth-scrolls to that section,
 * then cleans the URL. Must be wrapped in <Suspense> (useSearchParams
 * requirement under static export).
 */
export function SectionScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;
    // Wait for sections to render & route transition to settle
    const t = setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Clean the URL
      window.history.replaceState({}, "", "/");
    }, 250);
    return () => clearTimeout(t);
  }, [searchParams]);

  return null;
}
