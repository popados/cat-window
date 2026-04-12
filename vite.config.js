import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [{ src: "img", dest: "" }]
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(projectRoot, "index.html")
            }
        }
    }
});
