import classNameWrap from "@okoyannaya/eslint-plugin-classname-wrap";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      "classname-wrap": classNameWrap,
      tailwindcss,
    },
    settings: {
      "import/internal-regex": "^@/",
      tailwindcss: {
        cssConfigPath: "./src/app/globals.css",
      },
    },
    rules: {
      "classname-wrap/wrap-class-names": ["error", { maxLength: 100 }],
      "tailwindcss/classnames-order": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "**/*.{css,scss,sass,less,styl,png,jpg,jpeg,gif,svg,webp,avif,ico}",
              group: "unknown",
              position: "after",
            },
            { pattern: "react*{,/**}", group: "external", position: "before" },
            { pattern: "next*{,/**}", group: "external", position: "before" },
            ...["app", "providers", "pages", "widgets", "features", "entities", "shared"].map(
              (layer) => ({
                pattern: `@/${layer}{,/**}`,
                group: "internal",
                position: "before",
              }),
            ),
            { pattern: "@/**", group: "internal" },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "object"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          named: true,
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
