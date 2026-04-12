import { marked } from "marked";

const rawPosts = import.meta.glob("/posts/*.md", { query: "?raw", import: "default", eager: true });

function parseFrontmatter(raw) {
    const lines = raw.split("\n");
    if (lines[0].trim() !== "---") return { meta: {}, body: raw };
    const endIdx = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
    if (endIdx === -1) return { meta: {}, body: raw };
    const fmLines = lines.slice(1, endIdx);
    const body = lines.slice(endIdx + 1).join("\n").trim();
    const meta = {};
    let currentKey = null;
    let inList = false;
    fmLines.forEach((line) => {
        const kv = line.match(/^([\w-]+):\s*(.*)/);
        if (kv) {
            currentKey = kv[1];
            const val = kv[2].trim();
            if (val) {
                meta[currentKey] = val;
                inList = false;
            } else {
                meta[currentKey] = [];
                inList = true;
            }
        } else if (inList && currentKey && line.trim().startsWith("- ")) {
            meta[currentKey].push(line.trim().slice(2).trim());
        }
    });
    return { meta, body };
}

export function createBlogView() {
    const container = document.createElement("section");
    container.className = "blog-view";

    const title = document.createElement("h1");
    title.textContent = "Latest Blog Posts";
    container.appendChild(title);

    const posts = Object.entries(rawPosts)
        .map(([path, raw]) => {
            const slug = path.replace(/^.*\/(.+)\.md$/, "$1");
            const { meta, body } = parseFrontmatter(raw);
            return { slug, meta, body };
        })
        .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));

    if (posts.length === 0) {
        const empty = document.createElement("p");
        empty.className = "post-card-empty";
        empty.textContent = "No blog posts yet.";
        container.appendChild(empty);
        return container;
    }

    posts.forEach(({ slug, meta, body }) => {
        const card = document.createElement("article");
        card.className = "post-card";
        card.dataset.slug = slug;

        const heading = document.createElement("h3");
        heading.textContent = meta.title || slug;
        card.appendChild(heading);

        if (meta.date) {
            const date = document.createElement("span");
            date.className = "post-card-date";
            date.textContent = meta.date;
            card.appendChild(date);
        }

        const excerpt = document.createElement("p");
        excerpt.className = "post-card-excerpt";
        excerpt.textContent = meta.excerpt || "";
        card.appendChild(excerpt);

        const full = document.createElement("div");
        full.className = "post-card-full";

        const bodyDiv = document.createElement("div");
        bodyDiv.className = "post-card-body";
        bodyDiv.innerHTML = marked.parse(body);
        full.appendChild(bodyDiv);

        const images = Array.isArray(meta.images)
            ? meta.images
            : meta.images
            ? [meta.images]
            : [];

        if (images.length > 0) {
            const imgGrid = document.createElement("div");
            imgGrid.className = "post-card-images";
            images.forEach((src) => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = meta.title || "";
                img.loading = "lazy";
                imgGrid.appendChild(img);
            });
            full.appendChild(imgGrid);
        }

        card.appendChild(full);

        const toggle = document.createElement("button");
        toggle.className = "post-card-toggle";
        toggle.textContent = "Read More";
        toggle.addEventListener("click", () => {
            const expanded = card.classList.toggle("is-expanded");
            toggle.textContent = expanded ? "Show Less" : "Read More";
        });
        card.appendChild(toggle);

        container.appendChild(card);
    });

    return container;
}
