export interface ComponentConfig {
  name: string;
  filepath: string;
  hipDependencies?: string[];
  dependencies?: {
    [key: string]: string;
  };
}
