// types.ts

export type LevelTitle = "Principiante" | "Intermedio" | "Avanzado";
export type ModuleStatus = "completed" | "active" | "locked";

export interface Resource {
  id: number;
  name: string;
  path: string;
  component: string;
  description: string;
  image: string;
}

export interface ExtraText {
  downloads: {
    label: string;
    url: string;
  }[];
}

export interface Module {
  id: number;
  title: string;
  status: ModuleStatus;
  description: string;
  subtitle: string;
  videoUrl: string;
  extraText?: ExtraText;
  resources: Resource[];
}

export interface Level {
  id: number;
  title: LevelTitle;
  subtitle: string;
  progress: number;
  modules: Module[];
}
