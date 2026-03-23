import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    name: "project/ignore-generated",
    ignores: ["sketch-siblings.sketchplugin/**"],
  },
  {
    name: "project/javascript",
    files: ["src/**/*.js", "eslint.config.mjs"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      semi: ["warn", "always"],
      "block-spacing": ["warn", "always"],
      "no-console": "off",
      "no-unused-vars": ["warn", { vars: "all", args: "none" }],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "no-multiple-empty-lines": ["warn", { max: 1 }],
      "no-var": "error",
      "no-empty": "warn",
      "object-curly-spacing": ["warn", "always"],
      "operator-assignment": ["warn", "always"],
      "spaced-comment": ["warn", "always"],
      "capitalized-comments": ["warn", "always", { ignoreConsecutiveComments: true }],
      "comma-spacing": "warn",
      eqeqeq: "error",
      quotes: ["warn", "double", { allowTemplateLiterals: true }],
      "prefer-const": "warn",
    },
  },
]);
