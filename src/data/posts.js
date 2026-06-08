export const posts = [
  {
    slug: "the-quiet-frontend",
    title: "The Quiet Frontend",
    excerpt:
      "On building interfaces that don't shout. A meditation on restraint, hierarchy, and the small details that recruiters notice and users don't.",
    date: "2025-09-12",
    readTime: "7 min",
    tag: "Craft",
    body: [
      "There is a version of frontend work where every page does too much — too many animations, too many gradients, too many states fighting for the same six hundred pixels of attention. Quiet frontends do the opposite. They edit, ruthlessly. They earn the right to move.",
      "The quiet frontend respects the reader's time. It assumes intelligence. It refuses to treat motion as decoration. When a quiet interface animates, it does so because the animation carries information — that something opened, that something closed, that a value changed and you can trust the new one.",
      "Building a quiet frontend is an engineering discipline more than a visual one. It requires a design system that holds the line, a motion grammar that is documented and reused, and a culture where 'we don't need this' is a normal sentence in code review.",
      "I have spent the last seven years building software in this register. The work below is the result.",
    ],
  },
  {
    slug: "react-server-components-in-practice",
    title: "React Server Components, two years in",
    excerpt:
      "A practitioner's note on what works, what still hurts, and the mental model that finally clicked for our team.",
    date: "2025-06-04",
    readTime: "11 min",
    tag: "Engineering",
    body: [
      "Server components are not a frontend feature. They are a deployment topology with a new vocabulary, and the vocabulary is the easy part.",
      "Once you stop reaching for useEffect on instinct, the model becomes oddly calm. Data lives near the page that needs it. Interactivity is a verb you reach for when you mean it, not a default everything wears.",
      "Two years in, our codebase ships less JavaScript, renders faster on cold cache, and is easier to read at three in the morning. That last metric matters more than the other two.",
    ],
  },
  {
    slug: "designing-the-empty-state",
    title: "Designing the empty state first",
    excerpt:
      "Why I now sketch the empty state of a product before I sketch anything else, and what changed when I did.",
    date: "2025-03-21",
    readTime: "5 min",
    tag: "Design",
    body: [
      "The empty state is the first impression that scales. Every new user hits it. Every demo opens with it. Every screenshot in the case study features it. And yet we usually design it last, when the deadline is breathing and the will to write copy is gone.",
      "I now sketch the empty state first. The empty state forces you to answer the only question that matters: why would anyone start using this thing?",
    ],
  },
  {
    slug: "the-portfolio-is-the-product",
    title: "The portfolio is the product",
    excerpt:
      "Treating your portfolio like a real product changes how recruiters read it — and how you build it.",
    date: "2024-11-08",
    readTime: "6 min",
    tag: "Career",
    body: [
      "A portfolio is the only software you will ever build for an audience that is actively trying to disqualify you in under twelve seconds. Build accordingly.",
      "Lead with the work. Trust the typography. Make the case studies easy to skim and rewarding to read. And ship the thing — a half-finished portfolio is the only kind of portfolio that does not work.",
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
