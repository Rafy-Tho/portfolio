import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = ({ className = "" }) => {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  const handleClick = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full p-1.5 md:p-2.5 text-foreground border border-border bg-surface/80 hover:bg-primary/10 hover:text-primary hover:border-primary/40 transition-all ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className=" w-4 h-4 md:w-5 md:h-5 " />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};
