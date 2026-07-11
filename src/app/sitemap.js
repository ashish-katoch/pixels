import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

const SITE_URL = "https://ashishpixels.com";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();

  const staticEntries = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/more-work`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/writing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const workEntries = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const writingEntries = posts.map((p) => ({
    url: `${SITE_URL}/writing/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...workEntries, ...writingEntries];
}
