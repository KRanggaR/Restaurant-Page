import "./style.css";
import { createHomeSection } from "./home.js";
import { createMenuSection } from "./menu.js";
import { createContactSection } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    function renderPage(page) {
        content.innerHTML = "";
        let section;
        if (page == "home") {
            section = createHomeSection();
        }
        else if (page == "contact") {
            section = createContactSection();
        }
        else if (page == "menu") {
            section = createMenuSection();
        }

        if (section) {
            content.appendChild(section)
        }
    }

    renderPage("home");



    document.querySelector(".nav-links").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const page = event.target.dataset.page;
            renderPage(page);
        }

    });
});
