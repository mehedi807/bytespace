"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/utils/icons";
import { cn } from "@/lib/utils";

interface CourseVideoPreviewProps {
  previewImage?: string;
  courseTitle: string;
  onPlay?: () => void;
}

export default function CourseVideoPreview({
  previewImage = "/images/course-details/course_preview_main.png",
  courseTitle,
  onPlay,
}: CourseVideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.videoWrapper}>
      <Image
        src={previewImage}
        alt={courseTitle}
        fill
        className={styles.videoImage}
        priority
      />

      <button
        onClick={() => {
          setIsPlaying(!isPlaying);
          onPlay?.();
        }}
        className={styles.playButton}
        aria-label="Play course preview"
        type="button"
      >
        <div className={styles.playIconWrapper}>
          <PlayIcon className={styles.playIcon} />
        </div>
      </button>
    </div>
  );
}

const styles = {
  videoWrapper: cn(
    "relative w-full aspect-[720/479] max-w-[45rem]",
    "rounded-[1.5rem] overflow-hidden bg-[#443131]",
    "flex items-center justify-center shadow-lg"
  ),
  videoImage: "object-cover",
  playButton: cn(
    "relative z-10 p-4 rounded-[1.5rem]",
    "bg-[rgba(61,61,61,0.24)] border border-brand-gray-700",
    "backdrop-blur-[20px] hover:scale-105 active:scale-95",
    "transition-transform cursor-pointer"
  ),
  playIconWrapper: "w-[4.5rem] h-[4.5rem] flex items-center justify-center text-white",
  playIcon: "w-10 h-10 fill-white translate-x-0.5",
};
