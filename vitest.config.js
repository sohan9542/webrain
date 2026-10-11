import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.{test,spec}.{js,jsx}"],
    exclude: ["node_modules", ".next", "out"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
});
