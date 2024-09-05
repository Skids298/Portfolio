//fetch the languages-profitiency file with the languages-container and put on home.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('/resume_website/HTML/Languages-profitiency.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('languages-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});

//fetch the tools-profitiency file with the tools-container and put on home.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('/resume_website/HTML/tools-profitiency.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tools-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});

//fetch the Projects file with the projects-container and put on home.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('/resume_website/HTML/Projects.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('PROJECTS').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});


function centerImage(img) {
    var overlay = document.getElementById("overlay");

    if (img.classList.contains('sticky')) {
        // Remove the sticky class to return to the original position
        img.classList.remove('sticky');
        overlay.style.display = "none"; // Hide the overlay
    } else {
        // Remove any previously sticky images
        var existingStickyImage = document.querySelector('.sticky');
        if (existingStickyImage) {
            existingStickyImage.classList.remove('sticky');
        }

        // Add sticky class to the clicked image
        img.classList.add('sticky');
        overlay.style.display = "block"; // Show the overlay
    }
}