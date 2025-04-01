function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.log("Error loading page:", error));
}

// Load Home by default when the page loads
window.onload = () => loadPage('home.html');
