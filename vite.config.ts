import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist', // Output folder
    rollupOptions: {
      input: './index.html', // Main entry point
      output: {
        entryFileNames: 'assets/main.js', // Force files into /assets/
        chunkFileNames: 'assets/[name]-[hash].js', // For code splitting
        assetFileNames: 'assets/[name]-[hash].[ext]', // For other assets
      },
    },
  },
});
