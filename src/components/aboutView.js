
export function createAboutView() {
    const container = document.createElement("section");
    container.className = "about-view";

    const title = document.createElement("h1");
    title.textContent = "About";
    container.appendChild(title);

    const paragraphs = [
        "My cats names are Barnacle and Bean. The orange one is Barnacle, the calico one is Bean.",
        "I like cats. Stories of cats. Pictures of my cats. Just cats, cat facts, and cat stuff.",
        "Barnacle headbutts, nips, and will do tricks in the bathroom. Bean is more sassy, and drinks from the tap as bougie as possible. They both love to sit by the window."
    ];

    paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        container.appendChild(paragraph);
    });

    return container;
}

