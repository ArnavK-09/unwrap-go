import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: true,
  dts: true,
  clean: true,
  treeshake: {
    preset: "smallest",
  },
  target: "esnext",
  outDir: "dist",
  sourcemap: false,
  splitting: false,
  keepNames: false,
  pure: ["console.log", "console.info", "console.debug", "console.warn"],
  esbuildOptions: (options) => {
    options.drop = ["debugger", "console"];
  },
});
