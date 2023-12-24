// src/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM has loaded

    // Get all the navigation links
    let navLinks = document.querySelectorAll('nav ul li a');

    // Add event listener to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the section id from the clicked link
            let sectionId = this.getAttribute('href').split('/')[1].split('.')[0];

            // Scroll to the section
            document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
        });
    });
});
