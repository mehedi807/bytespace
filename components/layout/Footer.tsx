"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BROWSE_LINKS = [
  { label: "Featured Courses", href: "/courses" },
  { label: "Featured Categories", href: "/courses" },
  { label: "Business", href: "/courses?category=business" },
  { label: "IT", href: "/courses?category=it" },
  { label: "Design", href: "/courses?category=design" },
];

const CATEGORY_LINKS = [
  { label: "Development", href: "/courses?category=development" },
  { label: "Marketing", href: "/courses?category=marketing" },
  { label: "Photography", href: "/courses?category=photography" },
  { label: "Finance", href: "/courses?category=finance" },
  { label: "Sport", href: "/courses?category=sport" },
];

const PLATFORM_LINKS = [
  { label: "Become a Creator", href: "/register?role=creator" },
  { label: "Affiliate Program", href: "/courses" },
  { label: "Contact", href: "/courses" },
  { label: "Help", href: "/courses" },
  { label: "About", href: "/courses" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/courses" },
  { label: "Terms of Service", href: "/courses" },
  { label: "Cookies Settings", href: "/courses" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navRow}>
          <div className={styles.brandColumn}>
            <div className={styles.brandGroup}>
              <Link href="/" className={styles.brandLogoLink}>
                <div className={styles.brandLogoIcon}>
                  <Image
                    src="/images/header_logo_vector.svg"
                    alt="ByteSpace"
                    width={29}
                    height={32}
                    className={styles.brandLogoSvg}
                  />
                </div>
                <span className={styles.brandLogoText}>ByteSpace</span>
              </Link>
              <p className={styles.brandSubtitle}>
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <div className={styles.newsletterGroup}>
              <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterButton}>
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>

              <p className={styles.newsletterDisclaimer}>
                By subscribing, you agree to our{" "}
                <Link href="/courses" className={styles.disclaimerLink}>
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <div className={styles.linksRow}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkColumnTitle}>Browse</h4>
              <ul className={styles.linkList}>
                {BROWSE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <div className={styles.emptyColumnTitle} aria-hidden="true" />
              <ul className={styles.linkList}>
                {CATEGORY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkColumnTitle}>Platform</h4>
              <ul className={styles.linkList}>
                {PLATFORM_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.copyrightDivider} />

        <div className={styles.copyrightRow}>
          <p className={styles.copyrightText}>
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className={styles.legalList}>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.legalLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: cn(
    "relative w-full bg-white",
    "border-t border-border",
    "pt-[4.5rem] pb-10"
  ),
  container: cn(
    "max-w-[75rem] mx-auto",
    "px-6 lg:px-0 flex flex-col"
  ),
  navRow: cn(
    "flex flex-col lg:flex-row",
    "justify-between gap-12 lg:gap-[5.75rem]",
    "pb-[8.125rem]"
  ),
  brandColumn: cn(
    "w-full max-w-[33rem]",
    "flex flex-col gap-[2.8125rem]"
  ),
  brandGroup: "flex flex-col gap-4",
  brandLogoLink: "flex items-center gap-2",
  brandLogoIcon: "relative w-[1.805rem] h-[1.96875rem] shrink-0",
  brandLogoSvg: "w-full h-full object-contain",
  brandLogoText: cn(
    "font-clash font-bold text-2xl",
    "leading-none text-brand-dark"
  ),
  brandSubtitle: cn(
    "font-satoshi text-sm leading-[1.6em]",
    "text-brand-dark max-w-[33rem]"
  ),
  newsletterGroup: "flex flex-col gap-6",
  newsletterForm: cn(
    "flex flex-col sm:flex-row",
    "items-stretch sm:items-center gap-4 sm:gap-6"
  ),
  newsletterInput: cn(
    "w-full sm:w-[23.5rem] h-[3.25rem] px-6",
    "rounded-full bg-white border border-brand-gray-200",
    "font-satoshi text-base text-brand-dark",
    "placeholder:text-brand-gray-400 outline-none",
    "focus:border-brand-blue transition-colors"
  ),
  newsletterButton: cn(
    "h-[3.25rem] px-6 rounded-full",
    "bg-brand-lime hover:bg-brand-lime-hover",
    "font-satoshi font-medium text-[1.125rem]",
    "leading-[1.2em] text-brand-dark cursor-pointer",
    "transition-colors shrink-0 flex items-center justify-center"
  ),
  newsletterDisclaimer: cn(
    "font-satoshi text-xs leading-[1.6em]",
    "text-brand-dark max-w-[31.5rem]"
  ),
  disclaimerLink: cn(
    "underline hover:text-brand-blue",
    "transition-colors"
  ),
  linksRow: cn(
    "w-full max-w-[36.25rem]",
    "grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10"
  ),
  linkColumn: "flex flex-col gap-6",
  linkColumnTitle: cn(
    "font-satoshi font-normal text-base",
    "leading-6 text-brand-dark"
  ),
  emptyColumnTitle: "h-6 hidden sm:block",
  linkList: "flex flex-col gap-4",
  navLink: cn(
    "font-satoshi text-sm leading-[1.6em]",
    "text-brand-dark hover:text-brand-blue transition-colors"
  ),
  copyrightDivider: "w-full h-px bg-brand-gray-200",
  copyrightRow: cn(
    "pt-6 flex flex-col sm:flex-row",
    "items-center justify-between gap-4"
  ),
  copyrightText: cn(
    "font-satoshi text-xs leading-[1.6em]",
    "text-brand-dark"
  ),
  legalList: "flex items-center gap-6",
  legalLink: cn(
    "font-satoshi text-xs leading-[1.6em]",
    "text-brand-dark hover:text-brand-blue transition-colors"
  ),
};
