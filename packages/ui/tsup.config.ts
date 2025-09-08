import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/button.tsx",
    "theme/ThemeProvider": "src/theme/ThemeProvider.tsx",
  },
  format: ["esm", "cjs"],
  dts: true,
  outExtension: ({ format }) => (format === "esm" ? ".mjs" : ".cjs"),
  external: ["react", "react-dom", "tailwindcss"],
  clean: true,
});
