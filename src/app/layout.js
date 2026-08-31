import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClientShell } from "@/components/ClientShell";
import { JsonLd } from "@/components/JsonLd";
import { CookieConsent } from "@/components/CookieConsent";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://ashishpixels.com";
const DEFAULT_TITLE = "Ashish Katoch — Frontend Engineer (React.js, Next.js, TypeScript)";
const DEFAULT_DESCRIPTION =
  "Ashish Katoch is a Frontend Engineer with 8+ years of experience building React.js and Next.js applications for Sobeys, Safeway, Kiehl's, and Polín et moi. Portfolio, case studies, and writing.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Ashish Katoch",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Ashish Katoch",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "frontend developer India",
    "React developer Mohali",
    "React developer Chandigarh",
    "web developer Mohali",
  ],
  authors: [{ name: "Ashish Katoch", url: SITE_URL }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: DEFAULT_TITLE,
    description:
      "Frontend Engineer with 8+ years of experience building React.js and Next.js applications for Sobeys, Safeway, Kiehl's, and Polín et moi.",
    url: SITE_URL,
    siteName: "Ashish Katoch",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Frontend Engineer with 8+ years of experience building React.js and Next.js applications for Sobeys, Safeway, Kiehl's, and Polín et moi.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Ashish Katoch",
  givenName: "Ashish",
  familyName: "Katoch",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-bg.jpg`,
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer with 8+ years of experience building React.js and Next.js applications. Based in Mohali, India. Available for freelance and full-time roles.",
  email: "mailto:me@ashishpixels.com",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Lovely Professional University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Himachal Pradesh University",
    },
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Development",
    "Web Accessibility",
    "Tailwind CSS",
    "E-commerce Development",
    "UI/UX Design",
  ],
  sameAs: [
    "https://www.linkedin.com/in/ashishkatoch/",
    "https://github.com/ashish-katoch",
    "https://www.behance.net/ashish-katoch",
  ],
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ashish Pixels",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  founder: { "@type": "Person", name: "Ashish Katoch" },
  sameAs: [
    "https://www.linkedin.com/in/ashishkatoch/",
    "https://github.com/ashish-katoch",
    "https://www.behance.net/ashish-katoch",
  ],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ashish Katoch — Portfolio",
  url: SITE_URL,
  inLanguage: "en",
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
  description: DEFAULT_DESCRIPTION,
};

const PROFILE_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Ashish Katoch — Frontend Engineer Portfolio",
  mainEntity: { "@id": `${SITE_URL}/#person` },
  dateCreated: "2025-12-01",
  dateModified: "2026-08-30",
  inLanguage: "en",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${playfairDisplay.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head />
      <body className="antialiased">
        <JsonLd data={PERSON_JSON_LD} />
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <JsonLd data={WEBSITE_JSON_LD} />
        <JsonLd data={PROFILE_PAGE_JSON_LD} />
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
