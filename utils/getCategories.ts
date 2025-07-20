// utils/getAllResources.ts
import levels from "../app/(with-sidebar)/progress/module/[id]/data/modules";

export const getAllResources = () => {
  const allResources: any[] = [];

  levels.forEach((level) => {
    level.modules.forEach((module) => {
      if (module.resources) {
        allResources.push(...module.resources);
      }
    });
  });

  return allResources;
};

export const getCategoriesFromResources = (resources: any[]) => {
  const categories = new Set<string>();

  resources.forEach((res) => {
    if (res.component?.toLowerCase().includes("flashcard")) categories.add("Flashcards");
    else if (res.component?.toLowerCase().includes("quiz")) categories.add("Quiz");
    else if (res.component?.toLowerCase().includes("drag") || res.component?.toLowerCase().includes("drop")) categories.add("Drag & Drop");
    else if (res.component?.toLowerCase().includes("match")) categories.add("Match");
    else categories.add("Otro");
  });

  return Array.from(categories);
};