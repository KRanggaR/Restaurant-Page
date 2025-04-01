export function createContactSection() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    const section = document.createElement("section");
    section.classList.add("contact");

    section.innerHTML = `
        <h1>Contact Us</h1>
        <p>For reservations, reach us at contact@restbrook.com</p>
        <button onclick="loadPage('home')">Go Back Home</button>
    `;

    content.appendChild(section);
}
