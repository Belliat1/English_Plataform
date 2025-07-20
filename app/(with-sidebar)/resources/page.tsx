"use client";

import { useState } from "react";
import { getAllResources, getCategoriesFromResources } from "@/utils/getCategories";
import Image from "next/image";

const ResourcesPage = () => {
  const allResources = getAllResources();
  const categories = getCategoriesFromResources(allResources);

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredResources =
    selectedCategory === "Todos"
      ? allResources
      : allResources.filter((res) => {
          const component = res.component?.toLowerCase() || "";
          if (selectedCategory === "Flashcards") return component.includes("flashcard");
          if (selectedCategory === "Quiz") return component.includes("quiz");
          if (selectedCategory === "Drag & Drop") return component.includes("drag") || component.includes("drop");
          if (selectedCategory === "Match") return component.includes("match");
          return true;
        });

  return (
    <div className="p-6 bg-[var(--background-1)] min-h-screen text-[var(--color-neutral-600)] dark:text-[var(--color-primary-900)]">
      <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-2">
        Recursos Adicionales
      </h1>
      <p className="text-[var(--color-neutral-600)] dark:text-[var(--color-primary-900)] mb-6">
        Explora todos los recursos interactivos disponibles. Filtra por tipo:
      </p>

      {/* Chips de categorías */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["Todos", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200
              ${
                selectedCategory === cat
                  ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
                  : "bg-[var(--background-2)] text-[var(--primary-color)] border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Rejilla con tarjetas horizontales */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((res) => (
          <a
            key={res.id}
            href={res.path}
            className="flex gap-4 items-center border rounded-xl bg-[var(--background-2)] dark:bg-[var(--background-3)] border-[var(--color-neutral-200)] hover:shadow-md transition p-4"
          >
            <div className="w-20 h-20 flex-shrink-0">
              <Image
                src={res.image}
                alt={res.name}
                width={80}
                height={80}
                className="w-full h-full object-contain rounded"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--primary-color)] mb-1">
                {res.name}
              </h3>
              <p className="text-sm text-[var(--color-neutral-600)] dark:text-[var(--color-primary-900)] line-clamp-3">
                {res.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
