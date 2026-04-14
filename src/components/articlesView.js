import { fetchArticles, fetchImpressions, saveImpression } from "../api/api.js";

const REACTION_OPTIONS = [
    { key: "heart-eyes", emoji: "😻", label: "Loved it" },
    { key: "smile", emoji: "😸", label: "Helpful" },
    { key: "thinking", emoji: "🤔", label: "Interesting" },
    { key: "paws", emoji: "🐾", label: "Saving this" },
];

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
            impressionLabel.textContent = "Impressions";

            let selectedReaction = impressions[article.href] || null;

            const display = document.createElement("p");
            display.className = "item-card-impression-display";

            const btnRow = document.createElement("div");
            btnRow.className = "item-card-impression-btns";

            const buttons = [];

            function renderSummary() {
                if (!selectedReaction) {
                    display.textContent = "Choose one impression for this article on this browser.";
                    display.classList.add("is-empty");
                    return;
                }

                const selectedOption = REACTION_OPTIONS.find((option) => option.key === selectedReaction);
                display.textContent = `Your impression: ${selectedOption?.emoji || ""} ${selectedOption?.label || ""}`.trim();
                display.classList.remove("is-empty");
            }

            function syncButtons() {
                buttons.forEach(({ button, option, count }) => {
                    const isSelected = selectedReaction === option.key;
                    button.disabled = false;
                    button.classList.toggle("is-selected", isSelected);
                    count.textContent = isSelected ? "1" : "0";
                });
            }

            REACTION_OPTIONS.forEach((option) => {
                const button = document.createElement("button");
                button.className = "item-card-impression-reaction";
                button.type = "button";
                button.setAttribute("aria-label", `${option.label} reaction`);

                const emoji = document.createElement("span");
                emoji.className = "item-card-impression-reaction-emoji";
                emoji.textContent = option.emoji;

                const label = document.createElement("span");
                label.className = "item-card-impression-reaction-label";
                label.textContent = option.label;

                const count = document.createElement("span");
                count.className = "item-card-impression-reaction-count";
                count.textContent = selectedReaction === option.key ? "1" : "0";

                button.appendChild(emoji);
                button.appendChild(label);
                button.appendChild(count);

                button.addEventListener("click", async () => {
                    if (selectedReaction === option.key) {
                        return;
                    }

                    button.disabled = true;

                    try {
                        await saveImpression(article.href, option.key);
                        selectedReaction = option.key;
                        syncButtons();
                        renderSummary();
                    } catch {
                        display.textContent = "Could not save reaction right now.";
                        display.classList.add("is-empty");
                    } finally {
                        button.disabled = false;
                    }
                });

                buttons.push({ button, option, count });
                btnRow.appendChild(button);
            });

            syncButtons();
            renderSummary();

            impressionBlock.appendChild(impressionLabel);
            impressionBlock.appendChild(display);
            impressionBlock.appendChild(btnRow);

            card.appendChild(impressionBlock);
            list.appendChild(card);
        });
    } catch (_error) {
        state.textContent = "Could not load articles — make sure the server is running (npm run server).";
    }
}
