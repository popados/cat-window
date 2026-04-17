const footerPages = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "articles", label: "Articles" },
    { id: "blog", label: "Blog" },
    { id: "gallery", label: "Gallery" },
    { id: "shop", label: "Shop" },
    { id: "facts", label: "Facts" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Contact" },
];

export function createFooter(onNavigate, activePage = "home") {
    const footer = document.createElement("div");
    footer.className = "site-footer";

    const branding = document.createElement("section");
    branding.className = "site-footer-block";

    const logoSlot = document.createElement("div");
    logoSlot.className = "footer-logo-slot";
    logoSlot.setAttribute("aria-label", "Logo placeholder");

    const logoLabel = document.createElement("span");
    logoLabel.textContent = "Logo";
    logoSlot.appendChild(logoLabel);

    const brandTitle = document.createElement("h2");
    brandTitle.textContent = "Cat Window";

    const brandCopy = document.createElement("p");
    brandCopy.textContent = "A cozy place for cat stories, photo drops, and daily updates from the window crew.";

    branding.appendChild(logoSlot);
    branding.appendChild(brandTitle);
    branding.appendChild(brandCopy);

    const contact = document.createElement("section");
    contact.className = "site-footer-block";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact";

    const contactList = document.createElement("ul");
    contactList.className = "footer-contact-list";

    [
        "hello@catwindow.example",
        "(555) 555-0199",
        "Cat Window Studio, Window Seat Lane",
    ].forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        contactList.appendChild(listItem);
    });

    contact.appendChild(contactTitle);
    contact.appendChild(contactList);

    const links = document.createElement("section");
    links.className = "site-footer-block";

    const linksTitle = document.createElement("h2");
    linksTitle.textContent = "Views";

    const linksList = document.createElement("div");
    linksList.className = "footer-links";

    footerPages.forEach((page) => {
        const link = document.createElement("a");
        link.href = `#${page.id}`;
        link.textContent = page.label;
        if (page.id === activePage) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "page");
        }
        link.addEventListener("click", (event) => {
            event.preventDefault();
            onNavigate(page.id);
        });
        linksList.appendChild(link);
    });

    links.appendChild(linksTitle);
    links.appendChild(linksList);

    const footerNote = document.createElement("p");
    footerNote.className = "site-footer-note";
    footerNote.textContent = `© ${new Date().getFullYear()} Cat Window`;

    footer.appendChild(branding);
    footer.appendChild(contact);
    footer.appendChild(links);
    footer.appendChild(footerNote);

    return footer;
}