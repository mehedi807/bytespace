import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fontSans, fontHeading } from "@/lib/fonts";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    template: "%s | ByteSpace",
    default: "ByteSpace — Online Learning & Creator Platform",
  },
  description: "Unlock your creativity, gain valuable knowledge, and grow your career with high-impact courses on ByteSpace.",
  metadataBase: new URL("https://bytespace.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(styles.html, fontSans.variable, fontHeading.variable)}
    >
      <body className={styles.body}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

const styles = {
  html: "h-full antialiased",
  body: cn(
    "min-h-full flex flex-col font-sans",
    "bg-secondary text-foreground",
    "selection:bg-brand-blue selection:text-white"
  ),
};
