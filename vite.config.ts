import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      nodePolyfills(),
      react(),
      svgr({
        svgrOptions: {
          exportType: "default",
        },
        include: "**/*.svg",
      }),
    ],
    build: {
      outDir: "./dist",
    },
    base: env.VITE_BASE_URL || "/",
  };
});
