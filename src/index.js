import "./style.css";
import { createHomeSection } from "./home.js";
import { createMenuSection } from "./menu.js";
import { createContactSection } from "./contact.js";

function loadPage(page) {
    if (page === "home") {
        createHomeSection();
    } else if (page === "menu") {
        createMenuSection();
    } else if (page === "contact") {
        createContactSection();
    }
}

// Load home page by default when the site loads
document.addEventListener("DOMContentLoaded", () => {
    createHomeSection();
});

// Make function available in the global scope
window.loadPage = loadPage;
