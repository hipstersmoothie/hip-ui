import type { LilconfigResult } from "lilconfig";

import { lilconfig } from "lilconfig";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export const DEFAULT_CONFIG_PATH = "hip.config.json";

// all keys are optional
const defaultOptions = {
  searchPlaces: ["package.json", DEFAULT_CONFIG_PATH],
  ignoreEmptySearchPlaces: false,
};

const config = lilconfig("hip-ui", defaultOptions);

export interface ConfigOptions {
  componentDir: string;
  packageManager: "pnpm" | "npm" | "yarn";
}

export async function getConfig() {
  return await config.search();
}

export function setConfig(config: LilconfigResult, options: ConfigOptions) {
  const configPath =
    config?.filepath || path.join(process.cwd(), DEFAULT_CONFIG_PATH);

  try {
    if (configPath.includes(DEFAULT_CONFIG_PATH)) {
      writeFileSync(configPath, JSON.stringify(options, null, 2));
      console.log(`✅ Config written to ${configPath}`);
    } else if (configPath.includes("package.json")) {
      const existingPackageJson = readFileSync(configPath, "utf8");
      const packageJson = JSON.parse(existingPackageJson) as Record<
        string,
        unknown
      >;
      packageJson["hip"] = options;
      writeFileSync(configPath, JSON.stringify(packageJson, null, 2));
      console.log(`✅ Config written to ${configPath}`);
    } else {
      throw new Error("Not implemented");
    }
  } catch (error) {
    console.error(`❌ Error writing config to ${configPath}:`, error);
  }
}
