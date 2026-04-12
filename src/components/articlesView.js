import { fetchArticles } from "../api/api.js";

export function createArticlesView() {
    const container = document.createElement("section");
    container.className = "articles-view";

    const title = document.createElement("h1");
    title.textContent = "Cat Articles";
    container.appendChild(title);

    const state = document.createElement("p");
    state.className = "articles-view-state";
    state.textContent = "Loading articles from server...";
    container.appendChild(state);

    const list = document.createElement("div");
    list.className = "articles-view-list";
    container.appendChild(list);

    loadArticles(list, state);

    return container;
}

async function loadArticles(list, state) {
    try {
        const articles = await fetchArticles();

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
            reaction.textContent = article.reaction;

            card.appendChild(heading);
            card.appendChild(reaction);
            list.appendChild(card);
        });
    } catch (_error) {
        state.textContent = "Could not load articles from server.";
    }
}
