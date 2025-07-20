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
