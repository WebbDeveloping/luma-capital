"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialize from localStorage / system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : prefersDark
        ? "dark"
        : "light";

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/95 px-4 py-2 text-xs font-medium text-[var(--foreground)] shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl"
      aria-label="Toggle color theme"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-accent)]" />
      <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
