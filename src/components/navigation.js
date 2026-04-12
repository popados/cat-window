

export function createNavigation(onNavigate, activePage = "home") {
    const nav = document.createElement("nav");
    nav.className = "app-navigation";

    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "&#9776;";
    toggle.onclick = () => {
        const isOpen = nav.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    };
    nav.appendChild(toggle);

    const linksWrapper = document.createElement("div");
    linksWrapper.className = "nav-links-wrapper";

    const pages = [
        { id: "home", label: "Landing" },
        { id: "about", label: "About" },
        { id: "articles", label: "Articles" },
        { id: "gallery", label: "Gallery" },
        { id: "blog", label: "Blog" },
        { id: "shop", label: "Shop" },
        { id: "facts", label: "Facts" },
        { id: "events", label: "Events" },
        { id: "contact", label: "Contact" },
    ];

    pages.forEach((page) => {
        const button = document.createElement("button");
        button.textContent = page.label;
        if (page.id === activePage) {
            button.classList.add("is-active");
            button.setAttribute("aria-current", "page");
        }
        button.onclick = () => {
            onNavigate(page.id);
            nav.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        };
        linksWrapper.appendChild(button);
    });

    nav.appendChild(linksWrapper);

    return nav;
}


