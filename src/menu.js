export function createMenuSection() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const section = document.createElement("section");
    section.classList.add("menu");

    section.innerHTML = `
        <h1>Our Menu</h1>
        <p>Explore our delicious dishes!</p>
        <button onclick="loadPage('home')">Go Back Home</button>
    `;

    content.appendChild(section);
}
