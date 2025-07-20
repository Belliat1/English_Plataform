"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

interface SidebarItemProps {
  iconName: string;
  label: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ iconName, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { theme } = useTheme();

  const iconPath =
    theme === "dark"
      ? `/assets/dark/${iconName}.svg`
      : isActive
      ? `/assets/dark/${iconName}.svg`
      : `/assets/light/${iconName}.svg`;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all 
        ${isActive ? "text-[var(--primary-color)]" : "text-[var(--color-primary-700)]"}
      `}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-all
          ${isActive ? "bg-[var(--primary-color)]" : "bg-transparent"}
        `}
      >
        <Image src={iconPath} alt={label} width={20} height={20} />
      </div>
      <span
        className={`font-medium transition-all 
          ${isActive ? "text-[var(--primary-color)]" : "text-[var(--color-primary-700)]"}
        `}
      >
        {label}
      </span>
    </Link>
  );
};

export default SidebarItem;
