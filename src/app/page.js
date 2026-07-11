import { Suspense } from "react";
import { Hero } from "@/sections/Hero";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Expertise } from "@/sections/Expertise";
import { Experience } from "@/sections/Experience";
import { About } from "@/sections/About";
import { WritingTeaser } from "@/sections/WritingTeaser";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";
import { SectionScrollHandler } from "@/components/SectionScrollHandler";

export default function Home() {
  return (
    <main data-testid="page-home">
      <Suspense fallback={null}>
        <SectionScrollHandler />
      </Suspense>
      <Hero />
      <FeaturedProjects />
      <Expertise />
      <Experience />
      <About />
      <WritingTeaser />
      <FAQ />
      <Contact />
    </main>
  );
}
