import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(projectRoot, "index.html"),
                home: resolve(projectRoot, "sections/home.html"),
                about: resolve(projectRoot, "sections/about.html"),
                gallery: resolve(projectRoot, "sections/gallery.html"),
                blog: resolve(projectRoot, "sections/blog.html"),
                articles: resolve(projectRoot, "sections/articles.html"),
                facts: resolve(projectRoot, "sections/facts.html"),
                shop: resolve(projectRoot, "sections/shop.html"),
                events: resolve(projectRoot, "sections/events.html")
            }
        }
    }
});
