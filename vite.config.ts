import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist', // Output folder
    rollupOptions: {
      input: './index.html', // Main entry point for Vite
    },
  },
});
