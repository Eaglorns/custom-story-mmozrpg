"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const baseClass =
  "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 sm:py-2";

const activeClass =
  "border-white/30 bg-white/10 text-zinc-100 pointer-events-none";
const inactiveClass = "border-white/20 text-zinc-100 hover:bg-white/10";

export default function AuthLinks() {
  const pathname = usePathname();

  const signInActive = pathname === "/signin";
  const signUpActive = pathname === "/signup";

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/signin"
        aria-current={signInActive ? "page" : undefined}
        aria-disabled={signInActive}
        className={`${baseClass} ${signInActive ? activeClass : inactiveClass}`}
      >
        Войти
      </Link>
      <Link
        href="/signup"
        aria-current={signUpActive ? "page" : undefined}
        aria-disabled={signUpActive}
        className={`${baseClass} ${signUpActive ? activeClass : inactiveClass}`}
      >
        Регистрация
      </Link>
    </div>
  );
}
