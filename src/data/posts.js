export const posts = [
  {
    slug: "rebuilding-my-own-portfolio-finally",
    title: "Rebuilding my own portfolio, finally",
    excerpt:
      "The version of this site that existed before this one had fabricated metrics, a placeholder résumé, and no real photo of me on it. Here's why that took so long to fix.",
    date: "2026-07-05",
    readTime: "6 min",
    tag: "Craft",
    body: [
      "For longer than I'd like to admit, my own portfolio was the least honest piece of software I'd shipped. It had metrics that were never measured, a résumé PDF that was still a placeholder, and copy that read like it was generated rather than written. I knew all of this and kept shipping client work instead of fixing it.",
      "The rebuild forced a rule I don't always get to enforce on client projects: nothing goes on the page unless it's true and I can stand behind it. That meant cutting case-study numbers I couldn't verify, reconciling the site against my actual résumé, and replacing stock-feeling copy with plainer, more specific writing.",
      "The part I underestimated was how much a portfolio's credibility rides on small consistency checks — the company name matching across the résumé and the site, the dates lining up, a photo that's actually you instead of a placeholder graphic. None of it is technically hard. All of it is the difference between a site that reads as real and one that reads as a template.",
      "It's live now, closer to something I'd hand to a client and say 'this is how I actually work' than the version it replaced. That's a low bar in hindsight, and it took longer than it should have to clear it.",
    ],
  },
  {
    slug: "stepping-outside-react-mobile-project",
    title: "Stepping outside React: notes from a mobile project I can't name",
    excerpt:
      "A confidential mobile app engagement pulled me out of React and into Flutter for a few months. Here's what carried over, and what didn't.",
    date: "2026-04-25",
    readTime: "7 min",
    tag: "Engineering",
    body: [
      "Most of my freelance work has stayed inside React and Next.js, but one engagement — a mobile app I'm under NDA not to name or show — meant working primarily in Flutter for a few months. Different language, different rendering model, same underlying job: build an interface someone can trust.",
      "The habits that carried over were mostly about state, not syntax. Where does this value live, what invalidates it, and how do you keep a screen from rendering a stale answer while a request is in flight — that discipline transfers almost directly from React hooks to Flutter's widget and state-management patterns.",
      "What didn't carry over as easily was the mental model for layout. Years of thinking in CSS — box model, flexbox, the cascade — don't map cleanly onto Flutter's widget tree, where everything is composition and there's no shorthand for 'just add ten pixels of margin' without wrapping a widget in another widget.",
      "Working outside your main stack for a few months is uncomfortable in a useful way. It's a fast way to find out which of your habits are actually about building good software, and which ones were really just React opinions you'd mistaken for principles.",
    ],
  },
  {
    slug: "design-system-under-nda",
    title: "What a design system engagement under NDA taught me about consistency",
    excerpt:
      "I can't name the client or show the work, but the design system project changed how I think about consistency — and what actually breaks it.",
    date: "2026-02-18",
    readTime: "6 min",
    tag: "Design",
    body: [
      "One of the engagements I picked up as a freelancer was a design system project I'm not able to show or name — the usual NDA terms that come with product work for an existing brand. I can talk about what I learned, just not what it looked like.",
      "The instinct going in was that a design system is mostly a component library — buttons, inputs, spacing tokens, documented once and reused everywhere. The reality was that the hard part is almost entirely about the exceptions: the one screen where the spacing scale doesn't quite fit, the one team that needs a variant nobody planned for.",
      "What actually breaks consistency isn't a missing component. It's a team under deadline pressure deciding a one-off is faster than a conversation with whoever owns the system. The technical solution — tokens, a documented library, clear ownership — only works if there's also a process for what happens when someone wants to break the rules.",
      "I came out of that engagement more convinced that a design system is a communication tool before it's a code artifact. The Figma file and the component library are just where the agreement gets written down.",
    ],
  },
  {
    slug: "going-independent-after-eight-years",
    title: "Going independent after eight years in agencies",
    excerpt:
      "Eight years across three agencies, then a decision to freelance. What actually changed in month one wasn't the work — it was everything around it.",
    date: "2025-12-10",
    readTime: "5 min",
    tag: "Career",
    body: [
      "Eight years, three agencies, and then in December I went independent. The work itself — React, Next.js, the same kind of e-commerce and product builds I'd been shipping for years — didn't change much in the first month. Almost everything around the work did.",
      "The obvious shift is that there's no one else deciding what 'done' means. Scope, timeline, and quality bar are now conversations you have directly with a client instead of inheriting from a project manager. That's more work, not less, at least at the start.",
      "The less obvious shift is how much agency structure quietly protects you from decision fatigue. Someone else picked the ticket, someone else prioritised the backlog, someone else answered the client's late-evening email. Freelancing means noticing how much of that structure you'll have to rebuild yourself, on your own terms, or burn out re-deciding the same things every week.",
      "One month in, the plan is simple: keep the same engineering standards I held on someone else's payroll, and be more deliberate about which engagements are worth saying yes to.",
    ],
  },
  {
    slug: "what-wcag-aa-actually-costs",
    title: "What WCAG AA actually costs (and why it's worth it)",
    excerpt:
      "Two live e-commerce builds got us to WCAG AA. Here's what actually changed in the codebase — and in the workflow — to get there.",
    date: "2025-09-12",
    readTime: "6 min",
    tag: "Craft",
    body: [
      "Accessibility work has a reputation for being a checklist you run at the end — alt text, contrast ratios, a Lighthouse score you screenshot for the report. Getting a live e-commerce site to WCAG AA taught me it's closer to a set of constraints you design with from the start, not a pass you bolt on.",
      "The expensive part was never the obvious stuff — labelling inputs, fixing colour contrast, adding focus states. It was the components that looked fine visually but broke down under a screen reader or a keyboard-only pass: modals that trapped focus in the wrong place, carousels that announced nothing useful, filters that updated a product grid without telling assistive tech anything had changed.",
      "What changed the workflow more than any single fix was treating accessibility review as part of code review, not a separate audit bolted on before launch. Once 'can you tab through this' became a normal question in a pull request, most of the expensive problems stopped shipping in the first place.",
      "AA conformance on a live storefront is a real constraint, not a badge. It shapes how you write markup, how you structure state, and how much you can get away with hiding in a div with an onClick. I'd rather build inside that constraint than retrofit around it later.",
    ],
  },
  {
    slug: "five-stacks-one-instinct",
    title: "Five stacks, one instinct: what switching frameworks actually teaches you",
    excerpt:
      "React, WordPress, Shopify, Magento, Angular — moving between stacks for different clients taught me the framework is rarely the hard part.",
    date: "2025-06-04",
    readTime: "8 min",
    tag: "Engineering",
    body: [
      "Most of my work lives in React and Next.js, but a good amount of it hasn't — WordPress builds, Shopify and Magento storefronts, the occasional Angular codebase inherited from another team. Agency work has a way of putting a different stack in front of you every few months whether you asked for it or not.",
      "The instinct that carries over isn't syntax. It's the same handful of questions: where does this data actually live, what happens when the network is slow, and what's the smallest component that does one job well. Those questions look identical in a React hook, a WordPress template, and a Liquid file.",
      "What does change is the cost of getting something wrong. A sloppy state update in a React SPA fails loudly, in the console, immediately. A sloppy template in WordPress or Magento fails quietly, months later, when a plugin update touches a file you forgot existed. Working across both kinds of systems makes you more careful in both.",
      "I don't think framework loyalty is a particularly useful trait past a certain point. Picking the right tool for a client's actual constraints — their team, their host, their timeline — has mattered more to the outcome than which one I'd have picked for myself.",
    ],
  },
  {
    slug: "premium-ecommerce-and-editorial-have-in-common",
    title: "What premium e-commerce and long-form editorial have in common",
    excerpt:
      "A skincare product page and a wellness blog look nothing alike. Building both taught me they're solving the same problem: earning trust before the CTA.",
    date: "2025-03-21",
    readTime: "5 min",
    tag: "Design",
    body: [
      "A premium skincare product detail page and a long-form wellness article don't look like they belong to the same design problem. One is dense with imagery, pricing, and reviews; the other is mostly typography and white space. Building both within the same year, I started noticing how much they actually share.",
      "Both are trying to earn trust before they ask for anything. The product page does it with photography, ingredient detail, and review density — proof stacked next to the price. The editorial page does it with a typographic system that signals the writing was taken seriously — line length, rhythm, the absence of anything fighting for attention.",
      "The lesson that carried over: on a content-heavy or product-heavy page, the layout's job is to get out of the way of the thing the visitor actually came to evaluate. Every extra badge, banner, or animation is competing with that evaluation, not supporting it.",
      "I now audit both kinds of pages the same way — read it as the visitor deciding whether to trust this, not as the developer who built it.",
    ],
  },
  {
    slug: "web-designer-to-frontend-developer",
    title: "From web designer to frontend developer: what actually changed",
    excerpt:
      "I spent my first years shipping static websites as a designer. Here's what carried over when the job title changed to frontend developer — and what didn't.",
    date: "2024-11-08",
    readTime: "6 min",
    tag: "Career",
    body: [
      "My first few years in this industry were spent as a web designer — building responsive sites, thinking in mockups and breakpoints, handing off pages that mostly worked because the scope was small enough to hold in your head.",
      "The shift to frontend developer wasn't really about learning React, though that came with it. It was learning to think in state instead of screens — the same page now had a dozen versions depending on what the user had done, what had loaded, and what had failed.",
      "The design instinct didn't disappear, it just moved earlier in the process. Knowing what a layout is supposed to feel like before a single component exists still shapes how I structure a page — which parts should be simple JSX and which parts need to actually manage state.",
      "Eight years in, the title has changed twice and the stack has changed more than that. The part of the job that hasn't moved is the same one from the first static site: does this hold together for the person using it, not just for the person who built it.",
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
