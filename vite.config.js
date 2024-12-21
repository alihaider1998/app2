// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "app2",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./App": "./src/App",
//       },
//       shared: ["react", "react-dom"],
//     }),
//   ],
//   build: {
//     target: "esnext",
//     modulePreload: false,
//     minify: false,
//     cssCodeSplit: false,
//   },
//   preview: {
//     port: 5002,
//     strictPort: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   },
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const BASE_URL = "/app2/";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      remotes: {
        host: "https://alihaider1998.github.io/main-app/assets/remoteEntry.js",
      },
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
});
