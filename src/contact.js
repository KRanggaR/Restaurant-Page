export function createContactSection() {
    const section = document.createElement("section");
    section.classList.add("contact");


    section.classList.add("contact-details");

    const title = document.createElement("p");
    title.textContent = "Contact Us :";
    title.style.fontWeight = "500";
    title.style.fontStyle = "italic";
    title.style.fontSize = "30px";


    const info = document.createElement("p");
    info.textContent = "Visit us or call at +91 80801 80801.";
    info.style.fontWeight = "600";
    info.style.fontStyle = "bold";
    info.style.fontSize = "40px";

    section.append(title, info);

    return section;
}
