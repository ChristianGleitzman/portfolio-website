"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { SigilMark } from "@/components/SigilMark";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Christian Gleitzman | Portfolio</title>
        <meta name="description" content="Final-year Computer Science student at the University of Southampton and Programmer RA / Technical Lead at Teleagriculture, building backend, cloud, and systems-focused software." />
        <meta name="keywords" content="Christian Gleitzman, portfolio, software engineer, computer science, backend development, cloud engineering" />
        <meta name="author" content="Christian Gleitzman" />
        <meta name="theme-color" content="#0b0f10" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Christian Gleitzman | Software Engineering Portfolio" />
        <meta property="og:description" content="Final-year Computer Science student and Programmer RA / Technical Lead, building backend and cloud-based software." />
        <meta property="og:url" content="https://christian-gleitzman.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Christian Gleitzman | Portfolio" />
        <meta name="twitter:description" content="Final-year Computer Science student building backend and cloud-based software." />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Christian Gleitzman",
              url: "https://christian-gleitzman.me",
              sameAs: [
                "https://github.com/ChristianGleitzman",
                "https://www.linkedin.com/in/christian-gleitzman",
              ],
              jobTitle: "Programmer RA / Technical Lead",
              worksFor: {
                "@type": "Organization",
                name: "Teleagriculture",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Southampton",
              },
              award: "Netcraft Prize",
              description:
                "Final-year Computer Science student at the University of Southampton specialising in backend development and systems design",
            }),
          }}
        />
      </head>
      <body className="landing-body">
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          {!isLanding && (
            <header className="navbar">
              <Link href="/" className="page-title">
                <SigilMark size={24} />
                Christian Gleitzman
              </Link>
              <nav className="nav-links">
                <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                <Link href="/about" className={pathname === "/about" ? "active" : ""}>About Me</Link>
                <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>My Projects</Link>
                <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact Me</Link>
              </nav>
              <ThemeToggle />
            </header>
          )}

          <main className="content-wrapper" style={{ flex: 1, width: '100%' }}>
            {/* Keyed on the route so each navigation replays the enter animation. */}
            <div key={pathname} className="page-enter">
              {children}
            </div>
          </main>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Christian Gleitzman</p>
            <ul className="social-list">
              <li className="social-list-item">
                <a href="https://github.com/ChristianGleitzman" className="social-list-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubLogoIcon size={20} weight="fill" />
                </a>
              </li>
              <li className="social-list-item">
                <a href="https://www.linkedin.com/in/christian-gleitzman" className="social-list-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </li>
            </ul>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}