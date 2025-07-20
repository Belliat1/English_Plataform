// app/reset-password/layout.tsx
"use client";

import Image from "next/image";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white dark:bg-gray-900 text-foreground min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-6">
        
        {/* Imagen astronauta */}
        <div className="hidden lg:flex justify-center w-1/2">
          <Image
            src="/assets/astronauta.png"
            alt="Astronauta"
            width={300}
            height={300}
            className="max-w-full h-auto"
          />
        </div>

        {/* Contenedor del formulario */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex justify-end mb-4">
            <ThemeSwitcher />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
