

export function createNavigation(onNavigate, activePage = "home") {
    const nav = document.createElement("nav");
    nav.className = "app-navigation";

    // const pages = [
    //     { id: "home", label: "Landing" },
    //     { id: "about", label: "About" },
    //     { id: "contact", label: "Contact" },
    // ];

    // pages.forEach((page) => {
    //     const button = document.createElement("button");
    //     button.textContent = page.label;
    //     if (page.id === activePage) {
    //         button.classList.add("is-active");
    //         button.setAttribute("aria-current", "page");
    //     }
    //     button.onclick = () => onNavigate(page.id);
    //     nav.appendChild(button);
    // });

    const sectionPages = [
        { href: "./sections/home.html",     label: "Home" },
        { href: "./sections/gallery.html",  label: "Gallery" },
        { href: "./sections/blog.html",     label: "Blog" },
        { href: "./sections/articles.html", label: "Articles" },
        { href: "./sections/facts.html",    label: "Facts" },
        { href: "./sections/shop.html",     label: "Shop" },
        { href: "./sections/events.html",   label: "Events" },
    ];

    sectionPages.forEach((page) => {
        const button = document.createElement("button");
        button.textContent = page.label;
        button.onclick = () => { window.location.href = page.href; };
        nav.appendChild(button);
    });

    return nav;
}


