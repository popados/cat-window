
export function createAboutView() {
    const container = document.createElement("section");
    container.className = "about-view";

    const title = document.createElement("h1");
    title.textContent = "About";
    container.appendChild(title);

    const paragraphs = [
        "Visitors can explore a personal photo collection, read stories and tributes, discover helpful articles about feline behavior, and browse curated affiliate products for cat owners.",
        "The site also features fun trivia, educational insights, and a regularly updated list of local cat-related events, such as adoptions, shows, and cat café hours—bringing together community, knowledge, and remembrance in one place.",
        "My cats names are Barnacle and Bean. The orange one is Barnacle, the calico one is Bean.",
        "I like cats. Stories of cats. Pictures of my cats. Just cats, cat facts, and cat stuff.",
        "Barnacle headbutts, nips, and will do tricks in the bathroom. Bean is more sassy, and drinks from the tap to be as bougie as possible. They both love to sit by the window."
    ];

    paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        container.appendChild(paragraph);
    });

    return container;
}

