import { useState, useEffect } from "react";
import type { theme } from "../types/theme";
import themeContext from "../context/themeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
  storageKey: string;
};

export function ThemeProvider({ children, storageKey }: ThemeProviderProps) {
  const [theme, setTheme] = useState<theme>(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return stored as theme;
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Sync the class whenever the theme state changes
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Persist to storage
    localStorage.setItem(storageKey, theme);

    // Remove no-transitions right after browser repaints
    if (root.classList.contains("no-transitions")) {
      setTimeout(() => {
        root.classList.remove("no-transitions");
      }, 0);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
