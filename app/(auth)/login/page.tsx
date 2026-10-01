"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { AuthVisualShowcase } from "@/components/auth/AuthVisualShowcase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/courses");
    }, 600);
  };

  return (
    <div className={styles.grid}>
      <div className={styles.leftCol}>
        <AuthVisualShowcase
          title="Sign in with ease"
          description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />
      </div>

      <div className={styles.formCard}>
        <div className={styles.formHeader}>
          <span className={styles.categoryBadge}>Sign In</span>
          <h1 className={styles.formTitle}>Welcome Back</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="designer@example.com"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={styles.input}
            />
          </div>

          <div className={styles.btnRow}>
            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>

        <div className={styles.dividerRow}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>or</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.socialRow}>
          <button type="button" className={styles.socialBtn}>
            <Image
              src="/images/auth/social_google.svg"
              alt="Google"
              width={72}
              height={72}
              className={styles.socialImg}
            />
          </button>
          <button type="button" className={styles.socialBtn}>
            <Image
              src="/images/auth/social_apple.svg"
              alt="Apple"
              width={72}
              height={72}
              className={styles.socialImg}
            />
          </button>
        </div>

        <div className={styles.footerRow}>
          <span className={styles.footerText}>New user?</span>
          <Link href="/register" className={styles.footerLink}>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  grid: cn(
    "grid grid-cols-1 lg:grid-cols-12",
    "gap-12 lg:gap-16 items-start lg:items-center w-full"
  ),
  leftCol: "lg:col-span-6 w-full flex flex-col justify-center",
  formCard: cn(
    "lg:col-span-6 w-full max-w-[36.1875rem] lg:ml-auto",
    "bg-white rounded-[1.5rem] p-8 sm:p-12 lg:p-[3.8125rem]",
    "flex flex-col gap-10 shadow-2xl"
  ),
  formHeader: "flex flex-col gap-0",
  categoryBadge: cn(
    "font-satoshi font-normal text-[1.125rem]",
    "leading-[1.6em] text-brand-blue"
  ),
  formTitle: cn(
    "font-heading font-semibold text-brand-dark tracking-[-0.01em]",
    "text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.2em]",
    "max-w-[28.3125rem]"
  ),
  form: "flex flex-col gap-6",
  inputGroup: "flex flex-col gap-2",
  label: cn(
    "font-satoshi font-medium text-sm leading-[1.2em]",
    "text-brand-dark"
  ),
  input: cn(
    "w-full h-[3.25rem] px-6 rounded-xl",
    "bg-white border border-brand-gray-100",
    "font-satoshi text-lg text-brand-dark placeholder:text-brand-gray-400",
    "focus:border-brand-blue outline-none transition-colors"
  ),
  btnRow: "flex justify-end pt-1",
  submitBtn: cn(
    "h-[3.25rem] px-6 rounded-full",
    "bg-brand-lime hover:bg-brand-lime-hover",
    "font-satoshi font-medium text-[1.125rem]",
    "leading-[1.2em] text-brand-dark transition-colors cursor-pointer",
    "flex items-center justify-center shadow-xs"
  ),
  dividerRow: "flex items-center justify-center gap-3",
  dividerLine: "w-[12.5rem] h-px bg-[#D1D1D1]",
  dividerText: "font-satoshi text-[1.125rem] leading-[1.6em] text-[#888888] px-1",
  socialRow: "flex items-center justify-center gap-4",
  socialBtn: cn(
    "w-[4.5rem] h-[4.5rem] rounded-2xl",
    "flex items-center justify-center transition-transform hover:scale-105",
    "cursor-pointer shrink-0"
  ),
  socialImg: "w-full h-full object-contain",
  footerRow: "flex items-center justify-center gap-1",
  footerText: "font-satoshi text-base leading-[1.6em] text-[#888888]",
  footerLink: "font-satoshi text-base leading-[1.6em] text-brand-blue hover:underline",
};
