export function createHomeView(onNavigate) {
    const container = document.createElement("section");
    container.className = "landing-view";

    const hero = document.createElement("div");
    hero.className = "landing-hero";

    const title = document.createElement("h1");
    title.textContent = "The Cat Window";

    const subtitle = document.createElement("p");
    subtitle.textContent = "The Cat Window is a heartfelt blend of fact, personality, and resourcefulness. Aiming to provide a comprehensive view of feline friends through various sections.";
    
    hero.appendChild(title);
    hero.appendChild(subtitle);
    container.appendChild(hero);

    const sectionGrid = document.createElement("div");
    sectionGrid.className = "section-panel-grid";

    const sections = [
        {
            name: "Home",
            summary: "Hero banner and panels showing each page."
        },
        {
            name: "About",
            summary: "Background and personality notes about my cats. Includes information on the site."
        },
        {
            name: "Articles",
            summary: "Curated external cat-care reads with personal reactions."
        },
        {
            name: "Blog",
            summary: "Single-post reading view that includes a history of posts."
        },
        {
            name: "Gallery",
            summary: "Photo grid with lightbox support for cat pictures."
        },
        {
            name: "Shop",
            summary: "Favorite picks and affiliate-style cat product links."
        },
        {
            name: "Facts",
            summary: "Short cat facts section for quick reading."
        },
        {
            name: "Events",
            summary: "Upcoming cat events and date highlights."
        },
        {
            name: "Contact",
            summary: "Contact and social media links to connect."
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
        jumpLink.textContent = "Go to section";

        const spaPages = { Home: "home", About: "about", Gallery: "gallery", Blog: "blog", Articles: "articles", Facts: "facts", Shop: "shop", Events: "events", Contact: "contact" };
        const spaTarget = spaPages[section.name];
        jumpLink.href = `#${spaTarget}`;
        jumpLink.onclick = (event) => {
            event.preventDefault();
            if (typeof onNavigate === "function") onNavigate(spaTarget);
        };

        panel.appendChild(badge);
        panel.appendChild(heading);
        panel.appendChild(text);
        panel.appendChild(jumpLink);
        sectionGrid.appendChild(panel);
    });

    container.appendChild(sectionGrid);

    return container;
}
