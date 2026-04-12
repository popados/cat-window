export function createBlogView() {
    const container = document.createElement("section");
    container.className = "blog-view";

    const title = document.createElement("h1");
    title.textContent = "Latest Blog Posts";
    container.appendChild(title);

    const posts = [
        {
            heading: "Cats Ate the Treats",
            body: "Barnacle and Bean got into the stash of treats. The entire bag is now empty. Three different types of treats: Greenies, Temptations, and squeeze tubes."
        },
        {
            heading: "Top 5 Cat Toys of 2025",
            body: "We tested a bunch of toys and picked the ones the cats used most and did not destroy instantly."
        },
        {
            heading: "Morning Routine with Whiskers",
            body: "From breakfast demands to window bird-watching, this post follows the daily cat rhythm at home."
        }
    ];

    posts.forEach((post) => {
        const card = document.createElement("article");
        card.className = "post-card";

        const heading = document.createElement("h3");
        heading.textContent = post.heading;

        const body = document.createElement("p");
        body.textContent = post.body;

        card.appendChild(heading);
        card.appendChild(body);
        container.appendChild(card);
    });

    return container;
}
