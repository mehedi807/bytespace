import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridOverlay} />

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIconWrapper}>
              <Image
                src="/images/header_logo_vector.svg"
                alt="ByteSpace"
                width={29}
                height={32}
                className={styles.logoSvg}
              />
            </div>
            <span className={styles.logoText}>ByteSpace</span>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
}

const styles = {
  wrapper: cn(
    "relative min-h-screen flex flex-col",
    "bg-brand-blue overflow-hidden text-white"
  ),
  gridOverlay: cn(
    "absolute inset-0 pointer-events-none opacity-15",
    "bg-[radial-gradient(#ffffff_1px,transparent_1px)]",
    "[background-size:24px_24px]"
  ),
  header: "relative z-10 w-full py-8 lg:py-10",
  headerContainer: "max-w-[75rem] mx-auto px-6 lg:px-0",
  logoLink: "inline-flex items-center gap-2",
  logoIconWrapper: "relative w-[1.805rem] h-[1.96875rem] shrink-0",
  logoSvg: "w-full h-full object-contain",
  logoText: cn(
    "font-clash font-bold text-2xl",
    "leading-none text-white"
  ),
  main: "relative z-10 flex-1 flex items-center justify-center pb-16 lg:pb-24",
  container: "w-full max-w-[75rem] mx-auto px-6 lg:px-0",
};
