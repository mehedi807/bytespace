import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

const styles = {
  wrapper: "flex min-h-screen flex-col bg-white",
  main: "flex-1",
};
