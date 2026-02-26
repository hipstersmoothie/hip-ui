import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslintJs from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { importX } from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import turboPlugin from "eslint-plugin-turbo";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = defineConfig([
  { ignores: ["**/routeTree.gen.ts"] },
  gitignore(),
  eslintConfigPrettier,
  eslintJs.configs.recommended,
  comments.recommended,
  importX.flatConfigs.recommended,
  {
    rules: {
      "import-x/no-unresolved": ["error", { ignore: ["^virtual:"] }],
    },
  },
  {
    extends: [eslintPluginUnicorn.configs.recommended],
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/no-nested-ternary": "off",
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
        },
      ],
    },
  },
  {
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    extends: [tseslint.configs.strictTypeChecked],

    rules: {
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
]);
