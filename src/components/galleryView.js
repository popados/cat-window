const images = [
    { src: "/img/cat-pictures/EAAF34D7-31D1-47B5-B01F-7F4860EBEF0F_1_105_c.jpeg", alt: "Cat 1" },
    { src: "/img/cat-pictures/1243D6C6-D4DA-4AAE-ABE0-E6FC14D0C409_1_105_c.jpeg", alt: "Cat 2" },
    { src: "/img/cat-pictures/B4F712CE-54A5-4221-AC3D-D432816D6D00_1_105_c.jpeg", alt: "Cat 3" },
    { src: "/img/cat-pictures/19E6B226-4A54-49FC-81E7-8C56C3AC92B4_1_105_c.jpeg", alt: "Cat 4" },
    { src: "/img/cat-pictures/955B83BF-D906-47E2-8E58-69A2C34B2674_1_105_c.jpeg", alt: "Cat 5" },
    { src: "/img/cat-pictures/063447B0-D6D1-40B6-97CC-F8056CF8B3AA_1_105_c.jpeg", alt: "Cat 6" },
];

export function createGalleryView() {
    const container = document.createElement("section");
    container.className = "gallery-view";

    const title = document.createElement("h1");
    title.textContent = "Gallery";
    container.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "gallery-view-grid";

    images.forEach(({ src, alt }) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.loading = "lazy";
        grid.appendChild(img);
    });

    container.appendChild(grid);

    return container;
}
