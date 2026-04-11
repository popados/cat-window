


import { createNavigation } from "./components/navigation.js";
import { createContactView } from "./components/contactView.js";
import { createAboutView } from "./components/aboutView.js";

const app = document.getElementById("app");

let currentPage = "home";

function renderApp(data = {}) {
    app.innerHTML = "";

    const nav = createNavigation((page) => {
        currentPage = page;
        renderApp(data);
    }, currentPage);

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
        default:
            const homeView = document.createElement("div");
            homeView.textContent = "Welcome to the Home Page!";
            app.appendChild(homeView);
    }

}

(async function init() {
    renderApp();
})();



