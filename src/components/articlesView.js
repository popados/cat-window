import { fetchArticles, fetchImpressions, saveImpression } from "../api/api.js";

export function createArticlesView() {
    const container = document.createElement("section");
    container.className = "articles-view";

    const title = document.createElement("h1");
    title.textContent = "Cat Articles";
    container.appendChild(title);

    const state = document.createElement("p");
    state.className = "articles-view-state";
    state.textContent = "Loading articles...";
    container.appendChild(state);

    const list = document.createElement("div");
    list.className = "articles-view-list";
    container.appendChild(list);

    loadArticles(list, state);

    return container;
}

async function loadArticles(list, state) {
    try {
        const [articles, impressions] = await Promise.all([
            fetchArticles(),
            fetchImpressions().catch(() => ({}))
        ]);

        state.remove();

        articles.forEach((article) => {
            const card = document.createElement("article");
            card.className = "item-card";

            const heading = document.createElement("h3");
            const link = document.createElement("a");
            link.href = article.href;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = article.title;
            heading.appendChild(link);

            const reaction = document.createElement("p");
            reaction.className = "item-card-reaction";
            reaction.textContent = article.reaction;

            card.appendChild(heading);
            card.appendChild(reaction);

            // Impression block
            const impressionBlock = document.createElement("div");
            impressionBlock.className = "item-card-impression";

            const impressionLabel = document.createElement("span");
            impressionLabel.className = "item-card-impression-label";
            impressionLabel.textContent = "Impression";

            const savedText = impressions[article.href] || "";

            const display = document.createElement("p");
            display.className = "item-card-impression-display";
            display.textContent = savedText || "No impression written yet.";
            if (!savedText) display.classList.add("is-empty");

            const textarea = document.createElement("textarea");
            textarea.className = "item-card-impression-input";
            textarea.rows = 3;
            textarea.placeholder = "Write your impression of this article...";
            textarea.value = savedText;
            textarea.hidden = true;
            textarea.disabled = true;

            const editBtn = document.createElement("button");
            editBtn.className = "item-card-impression-btn";
            editBtn.textContent = "Edit";

            const saveBtn = document.createElement("button");
            saveBtn.className = "item-card-impression-btn is-save";
            saveBtn.textContent = "Save";
            saveBtn.hidden = true;

            const cancelBtn = document.createElement("button");
            cancelBtn.className = "item-card-impression-btn is-cancel";
            cancelBtn.textContent = "Cancel";
            cancelBtn.hidden = true;

            editBtn.addEventListener("click", () => {
                display.hidden = true;
                editBtn.hidden = true;
                textarea.hidden = false;
                textarea.disabled = false;
                saveBtn.hidden = false;
                cancelBtn.hidden = false;
                textarea.focus();
            });

            cancelBtn.addEventListener("click", () => {
                textarea.value = display.textContent === "No impression written yet." ? "" : display.textContent;
                textarea.hidden = true;
                textarea.disabled = true;
                saveBtn.hidden = true;
                cancelBtn.hidden = true;
                display.hidden = false;
                editBtn.hidden = false;
            });

            saveBtn.addEventListener("click", async () => {
                const text = textarea.value.trim();
                saveBtn.textContent = "Saving…";
                saveBtn.disabled = true;
                try {
                    await saveImpression(article.href, text);
                    display.textContent = text || "No impression written yet.";
                    display.classList.toggle("is-empty", !text);
                } catch {
                    display.textContent = "Save failed — server may not be running.";
                    display.classList.add("is-empty");
                }
                textarea.hidden = true;
                textarea.disabled = true;
                saveBtn.hidden = true;
                saveBtn.textContent = "Save";
                saveBtn.disabled = false;
                cancelBtn.hidden = true;
                display.hidden = false;
                editBtn.hidden = false;
            });

            const btnRow = document.createElement("div");
            btnRow.className = "item-card-impression-btns";
            btnRow.appendChild(editBtn);
            btnRow.appendChild(saveBtn);
            btnRow.appendChild(cancelBtn);

            impressionBlock.appendChild(impressionLabel);
            impressionBlock.appendChild(display);
            impressionBlock.appendChild(textarea);
            impressionBlock.appendChild(btnRow);

            card.appendChild(impressionBlock);
            list.appendChild(card);
        });
    } catch (_error) {
        state.textContent = "Could not load articles — make sure the server is running (npm run server).";
    }
}
