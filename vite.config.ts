/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./dist",
  },
  // base: "/notlot",
});
