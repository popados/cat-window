


import { createNavigation } from "./components/navigation.js";
import { createContactView } from "./components/contactView.js";
import { createAboutView } from "./components/aboutView.js";
import { createHomeView } from "./components/homeView.js";
import { createArticlesView } from "./components/articlesView.js";

const app = document.getElementById("app");

let currentPage = "home";

function renderApp(data = {}) {
    app.innerHTML = "";

    const handleNavigate = (page) => {
        currentPage = page;
        renderApp(data);
    };

    const nav = createNavigation(handleNavigate, currentPage);

    app.appendChild(nav);

    switch (currentPage) {
        case "contact":
            const contactView = createContactView();
            app.appendChild(contactView);
            break;
        case "about":
            const aboutView = createAboutView();
            app.appendChild(aboutView);
            break;
        case "articles":
            const articlesView = createArticlesView();
            app.appendChild(articlesView);
            break;
        default:
            const homeView = createHomeView(handleNavigate);
            app.appendChild(homeView);
    }

}

(async function init() {
    renderApp();
})();



