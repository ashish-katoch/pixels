import { useEffect } from "react";

const SITE_URL = "https://ashishpixels.com";
const DEFAULT_TITLE = "Ashish Katoch — Frontend Engineer (React.js, Next.js, TypeScript)";
const DEFAULT_DESCRIPTION =
  "Ashish Katoch is a Frontend Engineer with 8+ years of experience building React.js and Next.js applications for Sobeys, Safeway, FreshCo, and The Beer Store. Portfolio, case studies, and writing.";

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Updates document title, meta description, OG/Twitter tags, canonical URL,
 * and robots directive for the current route. Resets to site defaults on
 * unmount so navigating back to another page doesn't leak stale metadata.
 */
export function useSeo({ title, description, path = "/", noindex = false } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Ashish Katoch` : DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta("name", "description", DEFAULT_DESCRIPTION);
      setMeta("name", "robots", "index, follow");
      setMeta("property", "og:title", DEFAULT_TITLE);
      setMeta("property", "og:description", DEFAULT_DESCRIPTION);
      setMeta("property", "og:url", `${SITE_URL}/`);
      setMeta("name", "twitter:title", DEFAULT_TITLE);
      setMeta("name", "twitter:description", DEFAULT_DESCRIPTION);
      if (canonical) canonical.setAttribute("href", `${SITE_URL}/`);
    };
  }, [title, description, path, noindex]);
}
