


import { createNavigation } from "./components/navigation.js";
import { createContactView } from "./components/contactView.js";
import { createAboutView } from "./components/aboutView.js";
import { createHomeView } from "./components/homeView.js";
import { createArticlesView } from "./components/articlesView.js";
import { createBlogView } from "./components/blogView.js";
import { createGalleryView } from "./components/galleryView.js";
import { createFactsView } from "./components/factsView.js";
import { createShopView } from "./components/shopView.js";
import { createEventsView } from "./components/eventsView.js";

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
        case "about":
            const aboutView = createAboutView();
            app.appendChild(aboutView);
            break;
        case "articles":
            const articlesView = createArticlesView();
            app.appendChild(articlesView);
            break;
        case "blog":
            const blogView = createBlogView();
            app.appendChild(blogView);
            break;
        case "gallery":
            const galleryView = createGalleryView();
            app.appendChild(galleryView);
            break;
        case "facts":
            const factsView = createFactsView();
            app.appendChild(factsView);
            break;
        case "shop":
            const shopView = createShopView();
            app.appendChild(shopView);
            break;
        case "events":
            const eventsView = createEventsView();
            app.appendChild(eventsView);
            break;
        case "contact":
            const contactView = createContactView();
            app.appendChild(contactView);
            break;
        default:
            const homeView = createHomeView(handleNavigate);
            app.appendChild(homeView);
    }

}

(async function init() {
    renderApp();
})();



