"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label="Toggle dark/light theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <i className="fa fa-sun-o"></i>
      ) : (
        <i className="fa fa-moon-o"></i>
      )}
    </button>
  );
}
