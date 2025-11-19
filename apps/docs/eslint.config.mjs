import { config as reactInternalConfig } from "@repo/eslint-config/react-internal";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  ...reactInternalConfig,
  {
    settings: {
      "import-x/resolver": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: path.resolve(__dirname, "./tsconfig.json"),
        }),
      ],
    },
  },
]);
