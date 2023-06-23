import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      host: true,
      strictPort: true,
      port: 5173,
    },
  };

  if (command !== "serve") {
    config.base = "/ss_frontend/";
  }

  return config;
});
