"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-20 h-10 p-1 rounded-full transition-colors duration-300 ${
        isDark ? "bg-purple-400" : "bg-gray-200"
      }`}
    >
      {/* Luna (solo visible en dark) */}
      <div className={`flex items-center justify-center w-8 h-8 z-10 transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0"}`}>
        <Image src="/assets/moon.svg" alt="Moon Icon" width={20} height={20} />
      </div>

      {/* Sol (switch móvil) */}
      <div
        className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-10"
        }`}
      >
        <div className={`flex items-center justify-center w-full h-full transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`}>
          <Image src="/assets/sun.svg" alt="Sun Icon" width={20} height={20} />
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
