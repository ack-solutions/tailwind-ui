import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "button/index": "src/button/index.tsx",
    "theme/ThemeProvider": "src/theme/ThemeProvider.tsx",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
});
