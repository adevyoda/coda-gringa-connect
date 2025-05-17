import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  //base: "/cng/", // 👈 ESSENCIAL para GitHub Pages em subdiretório
  //base: mode === 'development' ? '/cng/' : '/coda-gringa-connect/cng/',
  base: process.env.NODE_ENV === 'production' ? '/' : '/cng/',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
