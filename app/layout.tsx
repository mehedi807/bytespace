import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fontSans, fontHeading } from "@/lib/fonts";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template: "%s | ByteSpace",
    default: "ByteSpace — Modern Web Platform",
  },
  description: "Production-ready modern web application built with Next.js 16 and React 19.",
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
      className={cn("h-full", "antialiased", fontSans.variable, fontHeading.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
