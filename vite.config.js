// vite.config.js app2
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const BASE_URL = "/app2/";

export default defineConfig(({ mode }) => {
  const useDevUrls = mode === "development";

  const remoteUrls = useDevUrls
    ? { "main-app": "http://localhost:5000/main-app/assets/remoteEntry.js" }
    : {
        "main-app":
          "https://alihaider1998.github.io/main-app/assets/remoteEntry.js",
      };

  console.log("Mode:", mode);
  console.log("Using URLs:", remoteUrls);
  return {
    plugins: [
      react(),
      federation({
        name: "app2",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App",
        },
        remotes: remoteUrls,
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    base: BASE_URL,
    build: {
      target: "esnext",
      modulePreload: false,
      minify: false,
      cssCodeSplit: false,
    },
    preview: {
      port: 5002,
    },
  };
});
