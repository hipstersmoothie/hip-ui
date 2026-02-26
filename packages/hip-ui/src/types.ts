export interface ComponentConfig {
  name: string;
  filepath: string;
  hipDependencies?: Array<string>;
  dependencies?: {
    [key: string]: string;
  };
}
