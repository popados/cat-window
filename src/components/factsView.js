export function createFactsView() {
    const container = document.createElement("section");
    container.className = "facts-view";

    const title = document.createElement("h1");
    title.textContent = "Fun Cat Facts";
    container.appendChild(title);

    const facts = [
        "Cats sleep for 12 to 16 hours a day.",
        "A group of cats is called a clowder.",
        "Cats have over 20 muscles that control their ears.",
        "The oldest known pet cat was found in a 9,500-year-old grave in Cyprus.",
        "A cat's purr vibrates at a frequency of 25 to 150 Hz — the same range shown to promote bone healing.",
        "Cats cannot taste sweetness because they lack the taste receptor gene for it.",
        "A cat can jump up to six times its own body length in a single leap.",
    ];

    const list = document.createElement("ul");
    list.className = "facts-view-list";

    facts.forEach((fact) => {
        const item = document.createElement("li");
        item.textContent = fact;
        list.appendChild(item);
    });

    container.appendChild(list);

    return container;
}
