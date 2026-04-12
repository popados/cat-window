export function createHomeView(onNavigate) {
    const container = document.createElement("section");
    container.className = "landing-view";

    const hero = document.createElement("div");
    hero.className = "landing-hero";

    const title = document.createElement("h1");
    title.textContent = "The Cat Window";

    const subtitle = document.createElement("p");
    subtitle.textContent = "A panel landing page for every section in the original cat-gallery site.";

    hero.appendChild(title);
    hero.appendChild(subtitle);
    container.appendChild(hero);

    const sectionGrid = document.createElement("div");
    sectionGrid.className = "section-panel-grid";

    const sections = [
        {
            page: "../index.html",
            name: "Home",
            summary: "Hero banner with intro, profile image, and site welcome."
        },
        {
            page: "../index.html",
            name: "About",
            summary: "Background and personality notes about Barnacle and Bean."
        },
        {
            page: "gallery.html",
            name: "Gallery",
            summary: "Photo grid with lightbox support for cat pictures."
        },
        {
            page: "blog.html",
            name: "Blog",
            summary: "Latest post list with single-post reading view."
        },
        {
            page: "articles.html",
            name: "Articles",
            summary: "Curated external cat-care reads with personal reactions."
        },
        {
            page: "facts.html",
            name: "Facts",
            summary: "Short, fun cat facts section for quick reading."
        },
        {
            page: "shop.html",
            name: "Shop",
            summary: "Favorite picks and affiliate-style cat product links."
        },
        {
            page: "events.html",
            name: "Events",
            summary: "Upcoming cat events and date highlights."
        }
    ];

    sections.forEach((section, index) => {
        const panel = document.createElement("article");
        panel.className = "section-panel";

        const badge = document.createElement("span");
        badge.className = "section-panel-index";
        badge.textContent = `${String(index + 1).padStart(2, "0")}`;

        const heading = document.createElement("h2");
        heading.textContent = section.name;

        const text = document.createElement("p");
        text.textContent = section.summary;

        const jumpLink = document.createElement("a");
        jumpLink.href = `./sections/${section.page}`;
        jumpLink.textContent = "Go to section";

        if (section.name === "About") {
            jumpLink.href = "#about";
            jumpLink.onclick = (event) => {
                event.preventDefault();
                if (typeof onNavigate === "function") {
                    onNavigate("about");
                }
            };
        }

        panel.appendChild(badge);
        panel.appendChild(heading);
        panel.appendChild(text);
        panel.appendChild(jumpLink);
        sectionGrid.appendChild(panel);
    });

    container.appendChild(sectionGrid);

    return container;
}
