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

//make the project image clickable
function centerImage(img) {
    var overlay = document.getElementById("overlay");
    var scrollableBlock = document.getElementById("scrollable-block");
    if (img.classList.contains('sticky')) {
        img.classList.remove('sticky');
        scrollableBlock.style.display = "none"; 
        overlay.style.display = "none"; 
    } else {
        var existingStickyImage = document.querySelector('.sticky');
        if (existingStickyImage) {
            existingStickyImage.classList.remove('sticky');
            document.getElementById("scrollable-block").style.display = "none"; 
        }
        img.classList.add('sticky');
        scrollableBlock.style.display = "block"; 
        overlay.style.display = "block";
    }
}

function centerImage(img) {
    var modal = img.parentElement.querySelector('.modal');
    var overlay = img.parentElement.querySelector('.overlay');

    if (img.classList.contains('sticky')) {
        img.classList.remove('sticky');
        modal.classList.remove('open');
        overlay.classList.remove('open');
        document.body.classList.remove('no-scroll'); // Allow scrolling again
    } else {
        var existingStickyImage = document.querySelector('.sticky');
        if (existingStickyImage) {
            existingStickyImage.classList.remove('sticky');
            existingStickyImage.parentElement.querySelector('.modal').classList.remove('open');
            existingStickyImage.parentElement.querySelector('.overlay').classList.remove('open');
        }
        img.classList.add('sticky');
        modal.classList.add('open');
        overlay.classList.add('open');
        document.body.classList.add('no-scroll'); // Prevent scrolling
    }
}

function closeModal() {
    var stickyImage = document.querySelector('.sticky');
    if (stickyImage) {
        stickyImage.classList.remove('sticky');
        var modal = stickyImage.parentElement.querySelector('.modal');
        var overlay = stickyImage.parentElement.querySelector('.overlay');
        modal.classList.remove('open');
        overlay.classList.remove('open');
        document.body.classList.remove('no-scroll'); // Allow scrolling again
    }
}