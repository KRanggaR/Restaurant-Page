export function createHomeSection() {

    const section = document.createElement("section");
    section.classList.add("home");

    const homeIntro = document.createElement("div");
    homeIntro.classList.add("home-intro");

    const span1 = document.createElement("span");
    span1.style.letterSpacing = "2px";
    span1.style.fontWeight = "400";
    span1.style.fontSize = "26px";
    span1.textContent = ".....";

    const span2 = document.createElement("span");
    span2.style.fontWeight = "500";
    span2.style.fontStyle = "italic";
    span2.style.fontSize = "14px";
    span2.textContent = "Top Services and Premium Food";

    const paragraph = document.createElement("p");
    paragraph.style.fontWeight = "800";
    paragraph.style.fontStyle = "bold";
    paragraph.style.fontSize = "40px";
    paragraph.textContent = "Welcome to Restbrook Restaurant.";

    const button = document.createElement("button");
    button.style.hover = "pointer";
    button.textContent = "Check out our Menu";
    button.onclick = function () {
        loadPage("menu");
    };

    homeIntro.appendChild(span1);
    homeIntro.appendChild(span2);
    homeIntro.appendChild(paragraph);
    homeIntro.appendChild(button);
    section.appendChild(homeIntro);

    return section;
    // content.appendChild(section);
}
