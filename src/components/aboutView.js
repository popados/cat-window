
export function createAboutView() {
    const container = document.createElement("section");
    container.className = "about-view";

    const title = document.createElement("h1");
    title.textContent = "About";
    container.appendChild(title);

    const introParagraphs = [
        "Visitors can explore a personal photo collection, read stories and tributes, discover helpful articles about feline behavior, and browse curated affiliate products for cat owners.",
        "Also featuring fun trivia, educational insights, and a regularly updated list of local cat-related event. Things like adoptions, shows, and cat café hours. Bringing together community, knowledge, and remembrance."
    ];

    introParagraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        container.appendChild(paragraph);
    });

    const catSections = [
        {
            heading: "Barnacle and Bean",
            details:
                "Barnacle is the orange one and Bean is the calico. Barnacle headbutts, nips, and will do tricks in the bathroom, while Bean keeps things sassy and drinks from the tap like a total queen. Eating regularly at exactly 7:30 AM and PM."
        },
        {
            heading: "Kashmir and Dante",
            details:
                "Kashmir and Dante bring a different kind of energy. Chaos and cuddles are on the horizon. Dante has a social bug where he will greet anyone who steps into his house. Kashmir is a chaotic and later tame cat who prefers to hide in the room."
        },
        {
            heading: "Laser and Figment",
            details:
                "Laser and Figment are playful mischief-makers with huge personalities. Their favorite activities are sprinting through the house, chasing toys, and claiming the best window spots."
        }
    ];

    catSections.forEach(({ heading, details }) => {
        const subtitle = document.createElement("h2");
        subtitle.textContent = heading;
        container.appendChild(subtitle);

        const paragraph = document.createElement("p");
        paragraph.textContent = details;
        container.appendChild(paragraph);
    });

    return container;
}

