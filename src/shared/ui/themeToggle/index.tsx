"use client";

import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      aria-label="Изменить тему"
      title="Изменить тему"
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 grid size-9 place-items-center rounded-full border border-text/20 bg-background text-text text-xl leading-none shadow-sm transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="theme-toggle-icon theme-toggle-icon--sun" aria-hidden="true">
        ☼︎
      </span>
      <span className="theme-toggle-icon theme-toggle-icon--moon" aria-hidden="true">
        ☾
      </span>
    </button>
  );
};
