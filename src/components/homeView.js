export function createHomeView() {
    const container = document.createElement("section");
    container.className = "landing-view";

    const hero = document.createElement("div");
    hero.className = "landing-hero";

    const title = document.createElement("h1");
    title.textContent = "The Cat Window";

    const subtitle = document.createElement("p");
    subtitle.textContent = "A panel landing page for every section in the original cat-gallery site.";

    const openSiteLink = document.createElement("a");
    openSiteLink.href = "./cat-gallery/index.html";
    openSiteLink.textContent = "Open Original Site";
    openSiteLink.className = "landing-cta";

    hero.appendChild(title);
    hero.appendChild(subtitle);
    hero.appendChild(openSiteLink);
    container.appendChild(hero);

    const sectionGrid = document.createElement("div");
    sectionGrid.className = "section-panel-grid";

    const sections = [
        {
            id: "hero",
            name: "Home",
            summary: "Hero banner with intro, profile image, and site welcome."
        },
        {
            id: "about",
            name: "About",
            summary: "Background and personality notes about Barnacle and Bean."
        },
        {
            id: "gallery",
            name: "Gallery",
            summary: "Photo grid with lightbox support for cat pictures."
        },
        {
            id: "blog",
            name: "Blog",
            summary: "Latest post list with single-post reading view."
        },
        {
            id: "articles",
            name: "Articles",
            summary: "Curated external cat-care reads with personal reactions."
        },
        {
            id: "facts",
            name: "Facts",
            summary: "Short, fun cat facts section for quick reading."
        },
        {
            id: "affiliate",
            name: "Shop",
            summary: "Favorite picks and affiliate-style cat product links."
        },
        {
            id: "events",
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
        jumpLink.href = `./cat-gallery/index.html#${section.id}`;
        jumpLink.textContent = "Go to section";

        panel.appendChild(badge);
        panel.appendChild(heading);
        panel.appendChild(text);
        panel.appendChild(jumpLink);
        sectionGrid.appendChild(panel);
    });

    container.appendChild(sectionGrid);

    return container;
}
