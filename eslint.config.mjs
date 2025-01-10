import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add custom rule modifications here
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars warning
      "no-console": "warn", // Example: Change console rule to 'warn' instead of 'error'
    },
  },
];

export default eslintConfig;
