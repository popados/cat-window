
export function createContactView() {
    const container = document.createElement("section");
    container.className = "contact-view";

    const title = document.createElement("h1");
    title.textContent = "Contact";
    container.appendChild(title);

    const intro = document.createElement("p");
    intro.className = "contact-view-intro";
    intro.textContent = "Questions, collab ideas, or cat stories? Send a note and we will get back to you.";
    container.appendChild(intro);

    const form = document.createElement("form");
    form.className = "contact-form";

    const nameField = document.createElement("div");
    nameField.className = "contact-field";
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "contact-name";
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "contact-name";
    nameInput.name = "name";
    nameInput.required = true;
    nameInput.placeholder = "Your name";
    nameField.appendChild(nameLabel);
    nameField.appendChild(nameInput);
    form.appendChild(nameField);

    const emailField = document.createElement("div");
    emailField.className = "contact-field";
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "contact-email";
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "contact-email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.placeholder = "you@example.com";
    emailField.appendChild(emailLabel);
    emailField.appendChild(emailInput);
    form.appendChild(emailField);

    const messageField = document.createElement("div");
    messageField.className = "contact-field message-field";
    const messageLabel = document.createElement("label");
    messageLabel.htmlFor = "contact-message";
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");
    messageInput.id = "contact-message";
    messageInput.name = "message";
    messageInput.required = true;
    messageInput.rows = 5;
    messageInput.placeholder = "Tell us what is on your mind...";
    messageField.appendChild(messageLabel);
    messageField.appendChild(messageInput);
    form.appendChild(messageField);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";
    form.appendChild(submitButton);

    container.appendChild(form);

    return container;
}


