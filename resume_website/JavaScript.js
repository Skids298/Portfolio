//fetch the languages-profitiency file with the languages-container and put on home.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('/resume_website/Languages-profitiency.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('languages-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});

//fetch the tools-profitiency file with the tools-container and put on home.html
document.addEventListener("DOMContentLoaded", function() {
    fetch('/resume_website/tools-profitiency.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tools-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});