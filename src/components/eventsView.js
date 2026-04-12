export function createEventsView() {
    const container = document.createElement("section");
    container.className = "events-view";

    const title = document.createElement("h1");
    title.textContent = "Upcoming Cat Events";
    container.appendChild(title);

    const events = [
        { date: "Oct 12", description: "Local Cat Adoption Fair at City Park" },
        { date: "Nov 3",  description: "Virtual Cat Care Webinar with Dr. Whiskers" },
        { date: "Dec 18", description: "Holiday Cat Costume Contest (online)" },
        { date: "Jan 9",  description: "Cat Breed Showcase at the Community Center" },
        { date: "Feb 14", description: "Valentine's Kitty Calendar Fundraiser (online)" },
    ];

    const list = document.createElement("ul");
    list.className = "events-view-list";

    events.forEach(({ date, description }) => {
        const item = document.createElement("li");

        const dateTag = document.createElement("strong");
        dateTag.textContent = `${date}:`;

        item.appendChild(dateTag);
        item.append(` ${description}`);
        list.appendChild(item);
    });

    container.appendChild(list);

    return container;
}
