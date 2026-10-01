"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { CartIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoIconWrapper}>
            <Image
              src="/images/header_logo_vector.svg"
              alt="ByteSpace"
              fill
              className={styles.logoImage}
              priority
            />
          </div>
          <span className={styles.logoText}>
            ByteSpace
          </span>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLinkActive}>
            Home
          </Link>
          <Link href="/courses" className={styles.navLink}>
            Courses
          </Link>
          <Link href="/creators/purepearl-studio" className={styles.navLink}>
            Creators
          </Link>
        </nav>

        <div className={styles.desktopAuth}>
          <Link href="/login" className={styles.authLink}>
            Sign In
          </Link>
          <Link href="/register" className={styles.authLink}>
            Join Us
          </Link>
          <Link
            href="/courses"
            className={styles.cartIcon}
            aria-label="Shopping Bag"
          >
            <CartIcon className={styles.cartSvg} />
          </Link>
        </div>

        <div className={styles.mobileActions}>
          <Link href="/courses" className={styles.mobileCartLink}>
            <CartIcon className={styles.mobileCartSvg} />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.menuToggleButton}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={styles.mobileDropdownLinkActive}>
            Home
          </Link>
          <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className={styles.mobileDropdownLink}>
            Courses
          </Link>
          <Link href="/creators/purepearl-studio" onClick={() => setMobileMenuOpen(false)} className={styles.mobileDropdownLink}>
            Creators
          </Link>
          <div className={styles.mobileAuthRow}>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className={styles.mobileDropdownLink}>
              Sign In
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)} className={styles.mobileDropdownLink}>
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: "relative w-full z-50 h-[7.5rem] bg-brand-blue flex items-center",
  container: cn(
    "w-full max-w-[90rem] mx-auto px-6",
    "lg:px-[7.625rem] flex items-center justify-between"
  ),
  logoLink: "flex items-center gap-2 shrink-0",
  logoIconWrapper: "relative w-[1.805rem] h-[1.96875rem]",
  logoImage: "object-contain",
  logoText: "font-clash font-bold text-[1.5rem] leading-[1.875rem] text-brand-gray-50 tracking-normal",
  desktopNav: "hidden md:flex items-center gap-6",
  navLinkActive: "font-satoshi text-base font-medium leading-[1.2em] text-brand-gray-50 hover:opacity-80 transition-opacity",
  navLink: "font-satoshi text-base font-normal leading-[1.6em] text-brand-gray-50 hover:opacity-80 transition-opacity",
  desktopAuth: "hidden md:flex items-center justify-end gap-6",
  authLink: "font-satoshi text-base font-normal leading-6 text-brand-gray-50 hover:opacity-80 transition-opacity",
  cartIcon: "text-brand-gray-50 hover:opacity-80 transition-opacity flex items-center justify-center w-6 h-6",
  cartSvg: "w-6 h-6",
  mobileActions: "flex md:hidden items-center gap-3",
  mobileCartLink: "text-brand-gray-50",
  mobileCartSvg: "w-[1.375rem] h-[1.375rem]",
  menuToggleButton: "p-1 text-brand-gray-50 cursor-pointer",
  menuIcon: "w-6 h-6",
  mobileDropdown: cn(
    "md:hidden absolute top-[7.5rem] left-0 w-full",
    "bg-brand-blue border-t border-white/10 px-6 py-6",
    "flex flex-col gap-4 text-brand-gray-50 shadow-2xl z-40"
  ),
  mobileDropdownLinkActive: "font-satoshi text-base font-medium text-brand-gray-50",
  mobileDropdownLink: "font-satoshi text-base text-brand-gray-50",
  mobileAuthRow: "pt-4 border-t border-white/10 flex items-center justify-between",
};
