// Function to load an HTML file into a container
function loadHTML(containerId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(error => console.error("Error loading file:", error));
}

// Load each section
loadHTML("navbar", "nav.html");
loadHTML("intro", "body.html");
loadHTML("products", "grid.html");
loadHTML("quality-box","footer.html");
loadHTML("section","grid2.html");
loadHTML("section","grid4.html");
loadHTML("contact-section","grid5.html")
