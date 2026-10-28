import { useEffect, useSyncExternalStore } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const root = document.documentElement;

// The <html> class is the single source of truth, so every toggle instance stays in sync.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(root, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getSnapshot = () => root.classList.contains("dark");

function applyTheme(dark: boolean) {
  root.classList.toggle("dark", dark);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? "#050414" : "#f6f4ff");
}

function hasSavedChoice() {
  try {
    return localStorage.getItem("theme") !== null;
  } catch {
    return false;
  }
}

function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot);

  // Follow the OS setting until the visitor makes an explicit choice
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!hasSavedChoice()) applyTheme(e.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !isDark;
    applyTheme(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
    >
      {isDark ? <FiSun size={22} aria-hidden="true" /> : <FiMoon size={22} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;
