"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/courses?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <div className={styles.inputContainer}>
        <div className={styles.iconWrapper}>
          <Image
            src="/images/hero_search_icon.svg"
            alt="Search"
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

const styles = {
  form: cn(
    "mt-6 sm:mt-9 lg:mt-[3.75rem]",
    "flex items-center justify-center",
    "gap-2 sm:gap-4 w-full max-w-[33.125rem] px-1 sm:px-0"
  ),
  inputContainer: cn(
    "flex items-center gap-2 bg-white",
    "rounded-full px-3.5 sm:px-6 py-2 sm:py-3",
    "flex-1 max-w-[28.8125rem] h-11 sm:h-[3.25rem] shadow-2xl"
  ),
  iconWrapper: "relative w-[1.125rem] sm:w-6 h-[1.125rem] sm:h-6 shrink-0",
  icon: "w-full h-full object-contain",
  input: cn(
    "w-full font-satoshi text-brand-gray-950",
    "placeholder:text-brand-gray-400 outline-none bg-transparent",
    "text-[0.8125rem] sm:text-base lg:text-[1.125rem] leading-[1.6em]"
  ),
  button: cn(
    "flex items-center justify-center",
    "px-3.5 sm:px-6 py-2 sm:py-3",
    "h-11 sm:h-[3.25rem] rounded-full",
    "bg-brand-lime text-brand-gray-950 font-satoshi font-medium",
    "text-[0.8125rem] sm:text-[1.125rem] leading-[1.2em]",
    "hover:bg-brand-lime-alt transition-colors shrink-0 cursor-pointer shadow-sm"
  ),
};
