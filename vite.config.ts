import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep small images as separate files instead of base64 inside the JS bundle:
    // they are lazy-loaded, so inlining them would only slow down the critical JS.
    assetsInlineLimit: 0,
  },
});
