import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  base: "/tttuan2703.github.io/",
  build: {
    outDir: "docs"
  }
});
