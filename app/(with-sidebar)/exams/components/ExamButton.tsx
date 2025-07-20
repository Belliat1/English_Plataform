"use client";

import Link from "next/link";
import React from "react";

interface ExamButtonProps {
  isDisabled: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  moduleId?: number; // solo si es examen por módulo
  levelTitle?: "Principiante" | "Intermedio" | "Avanzado"; // para examen por nivel
}

const ExamButton: React.FC<ExamButtonProps> = ({
  isDisabled,
  moduleId,
  levelTitle,
  children,
  variant = "primary",
}) => {
  // 🔀 Decide la URL según lo que venga
  const href = isDisabled
    ? "#"
    : levelTitle
    ? `/exams/level/${levelTitle.toLowerCase()}`
    : moduleId !== undefined
    ? `/exams/${moduleId}`
    : "#";

  const buttonClass = isDisabled
    ? "button--disabled cursor-not-allowed"
    : variant === "primary"
    ? "button--primary"
    : "button--secondary";

  return (
    <Link
      href={href}
      className={`${buttonClass} inline-block text-center ${
        isDisabled ? "pointer-events-none opacity-60" : ""
      }`}
      aria-disabled={isDisabled}
    >
      {children}
    </Link>
  );
};

export default ExamButton;
