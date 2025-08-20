// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      globals: {
        React: "readonly",
      },
    },
  },
  {
    rules: {
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          caughtErrors: "all",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  ...storybook.configs["flat/recommended"],
  {
    // 👇 This should match the `stories` property in .storybook/main.js|ts
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      // 👇 Enable this rule
      "storybook/csf-component": "error",
      // 👇 Disable this rule
      "storybook/default-exports": "off",
    },
  },
];

export default eslintConfig;
