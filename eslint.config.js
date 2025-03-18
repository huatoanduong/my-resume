import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");
// const tsconfigPath = path.resolve(__dirname, "tsconfig.json");

export default defineConfig([
  js.configs.recommended,
  includeIgnoreFile(gitignorePath),
  // globalIgnores(["local_ignore/", "dist/", "webpack/"]),
  // globalIgnores(["/", "!src/",]),
  globalIgnores([
    // "/**/*",
    "!src/**/*",
  ]),
  // globalIgnores(["/",]),
  {
    // files: ["**/*.{js,jsx,ts,tsx}"],
    // files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: ["./tsconfig.json"],
        // project: [tsconfigPath],
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "prettier": prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      // General rules
      "no-unused-vars": "warn",
      "no-empty-pattern": "warn",
      "no-console": "warn",
      "no-debugger": "error",
      eqeqeq: "error",
      curly: "error",
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],

      // // Prettier rules
      // "prettier/prettier": [
      //   "error",
      //   {
      //     endOfLine: "auto",
      //     semi: true,
      //     singleQuote: false,
      //     trailingComma: "es5",
      //     printWidth: 80,
      //     tabWidth: 2,
      //   },
      // ],
    },
  },
  prettier,
]);
