
export function createAboutView() {
    const container = document.createElement("div");
    container.className = "about-view";

    const title = document.createElement("h1");
    title.textContent = "About Us";
    container.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "We are a company dedicated to providing the best services to our customers.";
    container.appendChild(description);

    return container;
}

