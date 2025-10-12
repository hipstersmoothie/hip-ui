import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { config as baseConfig } from "./base.js";
import * as stylex from "@stylexjs/eslint-plugin";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@stylexjs": stylex,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",

      "@stylexjs/valid-styles": "error",
      "@stylexjs/valid-styles": "error",
      "@stylexjs/sort-keys": "error",
      "@stylexjs/valid-shorthands": "error",
      "@stylexjs/enforce-extension": "error",
      "@stylexjs/no-unused": "error",
      "@stylexjs/no-legacy-contextual-styles": "error",
      "@stylexjs/no-lookahead-selectors": "error",
    },
  },
];
