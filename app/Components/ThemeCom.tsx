"use client";

import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function ThemeCom({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:bg-[rgb(16,23,42)] dark:text-gray-200 min-h-screen">
        {children}
      </div>
    </div>
  );
}