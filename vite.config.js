import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Is path se shuru hone wali requests ko proxy karega
      "/api": {
        // Aapka actual API server
        target: "https://travbizz.online/crmv4/API/",
        // Origin ko badalna zaroori hai
        changeOrigin: true,
        // '/api' ko path se hata dega
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
