import esjs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react/index.js";
import globals from "globals";

// import { FlatCompat } from "@eslint/eslintrc";
// import * as url from "url";

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
// const compat = new FlatCompat({
//   baseDirectory: __dirname, // optional; default: process.cwd()
//   resolvePluginsRelativeTo: __dirname, // optional
// });

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  esjs.configs.recommended,
  {
    rules: {
      ...esjs.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
    },
  },
  {
    ignores: [
      "node_modules",
      "dist",

      "package*",
      ".tsconfig*",

      ".vscode",

      ".eslintrc",
      ".eslintrc.json",
      ".eslintrc.jsonc",

      ".eslignore",

      ".git",
      ".prettierignore",
    ],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parserOptions: {
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
        ...globals.commonjs,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      // parserOptions: {
      //   project: "./tsconfig.json",
      //   sourceType: "module",
      //   ecmaVersion: 2020,
      // },
      globals: {
        ...globals.node,
        ...globals.es2020,
        ...globals.worker,
        ...globals.jest,
      },
    },
    // ...esjs.configs.recommended,

    // rules: {
    //   ...prettierPlugin.configs.recommended.rules,
    //   ...eslintConfigPrettier.rules,
    // },
  },
];
