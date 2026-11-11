import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";

function getSavedTheme() {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

export default function useTheme() {
  const [preference, setPreference] = useState(getSavedTheme);
  const theme = preference || "light";

  useEffect(() => {
    const updatePreference = (event) => {
      if (event.key === storageKey || event.key === null) setPreference(getSavedTheme());
    };
    window.addEventListener("storage", updatePreference);
    return () => {
      window.removeEventListener("storage", updatePreference);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#111827" : "#ffffff";
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setPreference(next);
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  };

  return [theme, toggleTheme];
}
