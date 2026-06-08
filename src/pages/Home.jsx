import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../sections/Hero";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { Expertise } from "../sections/Expertise";
import { Experience } from "../sections/Experience";
import { About } from "../sections/About";
import { WritingTeaser } from "../sections/WritingTeaser";
import { Contact } from "../sections/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;
    // Wait for sections to render & route transition to settle
    const t = setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Clean the URL
      window.history.replaceState({}, "", "/");
    }, 250);
    return () => clearTimeout(t);
  }, [location.search]);

  return (
    <main data-testid="page-home">
      <Hero />
      <FeaturedProjects />
      <Expertise />
      <Experience />
      <About />
      <WritingTeaser />
      <Contact />
    </main>
  );
}
