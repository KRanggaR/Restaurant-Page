export function createMenuSection() {
    const section = document.createElement("section");
    section.classList.add("menu");

    const title = document.createElement("h2");
    title.textContent = "Our Menu";

    const description = document.createElement("p");
    description.textContent = "Delicious meals crafted by expert chefs.";

    section.append(title, description);

    return section;
}
