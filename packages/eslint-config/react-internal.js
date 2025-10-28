import * as stylex from "@stylexjs/eslint-plugin";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintReact from "@eslint-react/eslint-plugin";
import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = defineConfig([
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "react-hooks": pluginReactHooks,
      "@stylexjs": stylex,
    },

    extends: [
      eslintReact.configs["strict-type-checked"],
      jsxA11y.flatConfigs.recommended,
      reactRefresh.configs.recommended,
    ],

    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,

      "@stylexjs/valid-styles": [
        "error",
        {
          propLimits: {
            transitionDuration: {
              reason:
                "Use the animationDuration tokens from the animations.stylex.tsx file",
              limit: [
                "animationDuration.fast",
                "animationDuration.default",
                "animationDuration.slow",
                "animationDuration.verySlow",
              ],
            },
            animationDuration: {
              reason:
                "Use the animationDuration tokens from the animations.stylex.tsx file",
              limit: [
                "animationDuration.fast",
                "animationDuration.default",
                "animationDuration.slow",
                "animationDuration.verySlow",
              ],
            },
          },
        },
      ],
      "@stylexjs/sort-keys": ["error", { allowLineSeparatedGroups: true }],
      "@stylexjs/valid-shorthands": "error",
      "@stylexjs/enforce-extension": "error",
      "@stylexjs/no-unused": "error",
      "@stylexjs/no-legacy-contextual-styles": "error",
      "@stylexjs/no-lookahead-selectors": "error",
    },
  },
]);
