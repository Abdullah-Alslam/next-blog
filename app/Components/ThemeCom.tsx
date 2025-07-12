"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeCom({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme(); // ✅ Correct destructuring
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className={currentTheme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}
