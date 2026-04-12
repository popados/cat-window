export function createShopView() {
    const container = document.createElement("section");
    container.className = "shop-view";

    const title = document.createElement("h1");
    title.textContent = "Shop My Favorites";
    container.appendChild(title);

    const items = [
        { label: "Cat Tree", description: "A tall multi-level cat tree with scratching posts and cozy perches." },
        { label: "Automatic Feeder", description: "Scheduled portions so breakfast happens on time every day." },
        { label: "Laser Pointer Toy", description: "Keeps Barnacle sprinting across the floor for a solid 20 minutes." },
        { label: "Comfy Cat Bed", description: "Extra-plush donut bed that Bean immediately claimed as hers." },
        { label: "Extra Cat Tree", description: "Because one was not enough once they started fighting over the first one." },
        { label: "Food for good diet", description: "Vet-recommended wet and dry food blend for indoor cats." },
        { label: "Treats that taste good", description: "Greenies and Temptations — the whole bag gone in one afternoon." },
    ];

    const grid = document.createElement("div");
    grid.className = "shop-view-grid";

    items.forEach(({ label, description }) => {
        const card = document.createElement("article");
        card.className = "shop-card";

        const heading = document.createElement("h3");
        heading.textContent = label;

        const text = document.createElement("p");
        text.textContent = description;

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "View item";

        card.appendChild(heading);
        card.appendChild(text);
        card.appendChild(link);
        grid.appendChild(card);
    });

    container.appendChild(grid);

    return container;
}
