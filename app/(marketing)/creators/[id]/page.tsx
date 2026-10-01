import { use } from "react";
import { notFound } from "next/navigation";
import { creators, courses } from "@/lib/data";
import { CreatorProfileView } from "@/components/creators/CreatorProfileView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CreatorPage({ params }: PageProps) {
  const { id } = use(params);

  const creator =
    creators.find(
      (c) =>
        c.id === id ||
        c.handle.replace("@", "").toLowerCase() === id.toLowerCase() ||
        c.name.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
    ) || creators[0];

  if (!creator) {
    notFound();
  }

  return <CreatorProfileView creator={creator} courses={courses} />;
}
