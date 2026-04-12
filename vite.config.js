import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    server: {
        proxy: {
            "/api": "http://localhost:3000"
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(projectRoot, "index.html")
            }
        }
    }
});
