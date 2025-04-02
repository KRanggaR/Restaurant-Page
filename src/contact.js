export function createContactSection() {
    const section = document.createElement("section");
    section.classList.add("contact");

    const title = document.createElement("h2");
    title.textContent = "Contact Us";

    const info = document.createElement("p");
    info.textContent = "Visit us or call at +123 456 7890.";

    section.append(title, info);

    return section;
}
