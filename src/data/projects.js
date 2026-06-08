// Real projects from Ashish Katoch's portfolio.
// Internal case-study pages are at /work/:slug. Live sites linked via `liveUrl`.
export const projects = [
  {
    slug: "safeway",
    index: "01",
    title: "Safeway",
    subtitle: "Enhancing the digital grocery experience for a US retail leader",
    year: "2024",
    duration: "4 months",
    role: "Frontend Developer",
    client: "Safeway",
    liveUrl: "https://www.safeway.com/",
    stack: ["React.js", "JavaScript", "State Management", "SEO"],
    cover:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    accent: "#D71920",
    tagline:
      "Enhanced platform features and customised UI themes for one of the largest grocery chains in the United States.",
    metrics: [
      { value: "4mo", label: "Engagement" },
      { value: "+22%", label: "Page performance" },
      { value: "100%", label: "Brand-theme parity" },
    ],
    challenge:
      "Safeway needed deeper customisation of its existing storefront — themed pages, promotional flows, and improved data integration without disrupting a live high-traffic experience.",
    approach:
      "Shipped feature updates inside the existing React.js architecture, refined state management, and aligned new UI themes with the broader brand system. Worked closely with cross-functional teams on SEO and accessibility.",
    outcome:
      "Improved UI consistency, faster perceived performance, and a more cohesive user journey across the catalog, promotional surfaces and checkout entry points.",
    gallery: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "kiehls",
    index: "02",
    title: "Kiehl's",
    subtitle: "Premium skincare e-commerce — performance and polish",
    year: "2023",
    duration: "5 months",
    role: "Frontend Developer",
    client: "Kiehl's",
    liveUrl: "https://www.kiehls.com/",
    stack: ["React.js", "E-commerce", "Performance", "UX"],
    cover:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    accent: "#1A1A1A",
    tagline:
      "A premium skincare storefront tuned for clarity, conversion, and the kind of detail luxury customers notice.",
    metrics: [
      { value: "5mo", label: "Engagement" },
      { value: "+18%", label: "PDP conversion" },
      { value: "AA", label: "WCAG conformance" },
    ],
    challenge:
      "Premium skincare shoppers expect imagery, copy, and motion to feel considered. The team needed faster PDPs and a smoother review-led purchase journey across global markets.",
    approach:
      "Refactored product detail components, tuned image strategy, and implemented review and recommendation patterns inside the existing React stack. Audited the experience for accessibility along the way.",
    outcome:
      "Quicker page renders, an editorialised PDP feel, and an experience that holds up against the standard Kiehl's customers expect from the brand.",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "the-beer-store",
    index: "03",
    title: "The Beer Store",
    subtitle: "An e-commerce platform for Canada's largest beer retailer",
    year: "2023",
    duration: "5 months",
    role: "Frontend Developer",
    client: "The Beer Store",
    liveUrl: "https://www.thebeerstore.ca/",
    stack: ["React.js", "JavaScript", "E-commerce", "SEO"],
    cover:
      "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?auto=format&fit=crop&w=1600&q=80",
    accent: "#C99B23",
    tagline:
      "Catalog, store locator, online ordering — at the scale of a national retailer with thousands of SKUs.",
    metrics: [
      { value: "5mo", label: "Engagement" },
      { value: "1000+", label: "SKUs surfaced" },
      { value: "+30%", label: "Search efficiency" },
    ],
    challenge:
      "Customers needed to navigate thousands of products, find a nearby store, and complete an online order — across desktop and mobile, without friction.",
    approach:
      "Built reusable React components for the catalog, refined the store-locator interactions, and integrated cleaner search and filtering. Pushed SEO improvements throughout the funnel.",
    outcome:
      "A simpler, faster path from discovery to order — and a frontend codebase the in-house team can extend with confidence.",
    gallery: [
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1577905396516-7e54b2b3b6e6?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "csa-group",
    index: "04",
    title: "CSA Group",
    subtitle: "Standards, certification & resources — clearly structured",
    year: "2022",
    duration: "4 months",
    role: "UI Developer",
    client: "CSA Group",
    liveUrl: "https://www.csagroup.org/",
    stack: ["JavaScript", "CSS3", "Accessibility", "SEO"],
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    accent: "#003B71",
    tagline:
      "A global standards organisation site rebuilt around clarity, structured content, and rigorous accessibility.",
    metrics: [
      { value: "4mo", label: "Engagement" },
      { value: "AA", label: "WCAG conformance" },
      { value: "+40%", label: "Search visibility" },
    ],
    challenge:
      "CSA Group publishes dense, technical content for industries that depend on accuracy. The site needed to feel authoritative while staying easy for engineers, auditors, and consumers to navigate.",
    approach:
      "Refined the information architecture, built accessible, semantic components, and shipped consistent typographic patterns across resource pages and certification flows.",
    outcome:
      "A site that ranks well, reads cleanly, and meets WCAG AA — improving discoverability for the standards CSA's audiences rely on.",
    gallery: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "maria-marlowe",
    index: "05",
    title: "Maria Marlowe",
    subtitle: "Editorial wellness site for a holistic nutritionist",
    year: "2022",
    duration: "3 months",
    role: "UI Developer",
    client: "Maria Marlowe",
    liveUrl: "https://mariamarlowe.com/",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    cover:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80",
    accent: "#7C7B5E",
    tagline:
      "A calm, editorial site that supports a wellness brand built on trust, expertise, and beautifully written long-form content.",
    metrics: [
      { value: "3mo", label: "Engagement" },
      { value: "+45%", label: "Avg. session time" },
      { value: "100%", label: "Mobile readiness" },
    ],
    challenge:
      "Maria Marlowe's audience reads — really reads. The site needed to feel personal, calm, and editorial, with a blog at the centre rather than the periphery.",
    approach:
      "Designed a quiet typographic system, built responsive layouts that hold up on long-form articles, and integrated the blog deeply into the brand experience.",
    outcome:
      "An editorial-first wellness site that puts the writing front and centre — and reads beautifully on every device.",
    gallery: [
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "jubilee-clio",
    index: "06",
    title: "Jubilee Clio",
    subtitle: "A real-estate brand site — galleries, amenities, inquiries",
    year: "2021",
    duration: "3 months",
    role: "UI Developer",
    client: "Jubilee Group",
    liveUrl: "https://jubileeclio.in/",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    cover:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    accent: "#8A6E3A",
    tagline:
      "Property listings, amenity tours, and inquiry flows — packaged in a confident, residential identity.",
    metrics: [
      { value: "3mo", label: "Engagement" },
      { value: "+60%", label: "Inquiry submissions" },
      { value: "100%", label: "Mobile readiness" },
    ],
    challenge:
      "Premium real-estate buyers expect tactile galleries, thorough amenity coverage, and a fast path to talking to a sales rep.",
    approach:
      "Built a responsive gallery, amenity & floor-plan modules, and a clean inquiry flow. Designed for browsers on slow networks where real-estate buyers usually browse.",
    outcome:
      "A site that converts curiosity into inquiries and feels appropriate to the neighbourhood it represents.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
