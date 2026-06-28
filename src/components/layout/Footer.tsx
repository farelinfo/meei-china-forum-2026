import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { siteConfig, contactDetails } from "@/data/site-content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Registration", href: "/register" },
  { label: "Venue", href: "/#venue" },
  { label: "Contact", href: "/#contact" },
];

const summitLinks = [
  { label: "Summit Highlights", href: "/#highlights" },
  { label: "Why Attend", href: "/#why-attend" },
  { label: "Who Should Attend", href: "/#who-attends" },
  { label: "Partners", href: "/#partners" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--surface)]"
      aria-label="Site footer"
    >
      {/* Closing statement banner */}
      <div className="border-b border-[var(--border)] py-10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
            <span className="font-heading text-xl font-semibold uppercase tracking-[0.15em] text-[var(--green-bright)] sm:text-2xl">
              STRONGER TOGETHER
            </span>
            <span className="hidden text-[var(--border)] sm:block" aria-hidden="true">
              ·
            </span>
            <span className="font-heading text-xl font-semibold uppercase tracking-[0.15em] text-[var(--gold)] sm:text-2xl">
              PROSPEROUS TOGETHER
            </span>
            <span className="hidden text-[var(--border)] sm:block" aria-hidden="true">
              ·
            </span>
            <span className="font-heading text-xl font-semibold uppercase tracking-[0.15em] text-[var(--ivory)] sm:text-2xl">
              SUSTAINABLE TOGETHER
            </span>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Return to homepage">
              <div className="relative mb-4 h-10 w-36">
                <Image
                  src="/brand/logo.svg"
                  alt={siteConfig.organizer}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mb-1 font-heading text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              {siteConfig.organizer}
            </p>
            <p className="mb-4 text-xs text-[var(--text-secondary)]">
              {siteConfig.organizerTagline}
            </p>
            <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
              Connecting Africa and China through trade, investment, manufacturing, and sustainable industrial cooperation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--green-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Summit links */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
              Summit
            </h3>
            <ul className="flex flex-col gap-2">
              {summitLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--green-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              {contactDetails.phones.map((phone) => (
                <li key={phone.number} className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--green-primary)]" aria-hidden="true" />
                  <a
                    href={`tel:${phone.number}`}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--green-primary)]" aria-hidden="true" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--green-primary)]" aria-hidden="true" />
                <a
                  href={contactDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
                >
                  {contactDetails.websiteDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--green-primary)]" aria-hidden="true" />
                <span className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {contactDetails.venueShort}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8 xl:px-12">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; 2026 {siteConfig.organizer}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
