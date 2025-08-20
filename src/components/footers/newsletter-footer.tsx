"use client"

import { Linkedin, Twitter, Youtube } from "lucide-react";

const navigation = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    title: "Solutions", 
    links: [
      { name: "K-12 Schools", href: "#" },
      { name: "Higher Education", href: "#" },
      { name: "Special Needs", href: "#" },
      { name: "Homeschool", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "#" },
      { name: "Research Papers", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "API Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            {/* Logo */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary font-[var(--font-display)]">
                EduPulse
              </h2>
            </div>
            
            <h3 className="mb-4 text-lg font-semibold font-[var(--font-display)]">
              Stay Updated with Education Innovation
            </h3>
            <p className="mb-8 text-base text-muted-foreground">
              Get the latest insights on emotion-aware learning, AI in education, and platform updates.
            </p>

            {/* Newsletter subscription */}
            <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-12 flex-1 rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm"
              />
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-base font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 text-lg font-semibold">
                    {section.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm text-muted-foreground sm:text-left md:order-1">
            © {new Date().getFullYear()} EduPulse. Transforming education through emotional intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};