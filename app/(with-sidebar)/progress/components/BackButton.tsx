"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes"; // ✅ Importamos el hook
import React from "react";

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = "Volver a Niveles",
}) => {
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme(); // ✅ Captura el tema dinámico

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  const currentTheme = resolvedTheme || theme || "light";

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium p-2 transition duration-300"
    >
      <Image
        src={`/assets/${currentTheme}/arrow-left.svg`}
        alt="Volver"
        width={20}
        height={20}
      />
      {label}
    </button>
  );
};

export default BackButton;
