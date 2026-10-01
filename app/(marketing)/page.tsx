import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground mb-6">
        <Sparkles className="size-3.5 text-primary" />
        <span>Next.js 16 + React 19 + Tailwind CSS v4 + shadcn</span>
      </div>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Build high-performance web applications with{" "}
        <span className="text-primary">ByteSpace</span>
      </h1>

      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        Production-ready App Router setup powered by Turbopack, Tailwind CSS v4,
        shadcn components, Motion animations, and TypeScript.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="gap-2">
          Get Started
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" size="lg">
          Documentation
        </Button>
      </div>
    </div>
  );
}
