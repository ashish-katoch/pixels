import { Suspense } from "react";
import { Hero } from "@/sections/Hero";
import { Clients } from "@/sections/Clients";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Expertise } from "@/sections/Expertise";
import { Experience } from "@/sections/Experience";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Process } from "@/sections/Process";
import { WritingTeaser } from "@/sections/WritingTeaser";
import { Pricing } from "@/sections/Pricing";
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
      <Clients />
      <FeaturedProjects />
      <Expertise />
      <Experience />
      <About />
      <Testimonials />
      <Process />
      <WritingTeaser />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
