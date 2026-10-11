import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const commitHash = process.env.VERCEL_GIT_COMMIT_SHA
  ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7)
  : execFileSync("git", ["rev-parse", "--short=7", "HEAD"], {
      encoding: "utf8",
    }).trim();
    
const contributor = {
  name: "Maksim Marinov",
  email: "mg.marinov@gmx.es",
  github: "https://github.com/mks1313",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "expose-commit-hash",
      transformIndexHtml() {
        return {
          tags: [
            {
              tag: "script",
              children: `window.__HASH__ = ${JSON.stringify(commitHash)}; window.__CONTRIBUTOR__ = ${JSON.stringify(contributor)};`,
              injectTo: "head",
            },
          ],
        };
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
