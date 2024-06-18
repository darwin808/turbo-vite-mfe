import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const port = 3001
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_vite_react",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./page": "./src/App.tsx",
        "./component": "./src/Button.tsx",
      },
      shared: [],
    }),
  ],
  server: {
    port
  },
  preview: {
    port
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
