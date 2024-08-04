import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://www.vilniausfutbolas.lt",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/another-api": {
        target: "http://another-target.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/another-api/, ""),
      },
    },
  },
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  rewrites() {
    return [
      {
        source: "/*",
        destination: "",
      },
    ];
  },
});
