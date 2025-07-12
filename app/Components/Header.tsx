"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaSignInAlt,
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-3 flex items-center justify-between">
      {/* Left: Blog */}
      <div className="font-bold text-lg flex items-center space-x-2 cursor-pointer">
        <FaProjectDiagram />
        <span>Blog</span>
      </div>

      {/* Center: Nav + Search */}
      <nav className="flex items-center space-x-6">
        <a href="" className="flex items-center space-x-1 hover:underline">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="/about" className="flex items-center space-x-1 hover:underline">
          <FaInfoCircle />
          <span>About</span>
        </a>
        <a href="/projects" className="flex items-center space-x-1 hover:underline">
          <FaProjectDiagram />
          <span>Projects</span>
        </a>
        {/* Search box */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="pl-8 pr-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
      </nav>

      {/* Right: Dark mode toggle + Sign in */}
      <div className="flex items-center space-x-4">
        {mounted && (
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            aria-label="Toggle Theme"
          >
            {currentTheme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        )}
        <button className="flex items-center space-x-1 px-3 py-1 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
          <FaSignInAlt />
          <span>Sign In</span>
        </button>
      </div>
    </header>
  );
}
