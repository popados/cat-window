
export function createContactView() {
    const container = document.createElement("div");
    container.className = "contact-view";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    container.appendChild(title);

    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    const messageDiv = document.createElement("div");
    messageDiv.className = "message-field";
    form.appendChild(messageDiv);
    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageDiv.appendChild(messageLabel);

    form.appendChild(messageInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send";
    form.appendChild(submitButton);

    container.appendChild(form);

    return container;
}


