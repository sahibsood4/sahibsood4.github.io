import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Ensures Vite processes the correct entry file
      output: {
        entryFileNames: 'main.js', // ✅ This keeps `main.tsx` compiled as `main.js`
      },
    },
  },
});
