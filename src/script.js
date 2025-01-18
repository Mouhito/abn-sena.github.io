let slideIndex = 1; // Initial slide
let scrollDebounce = false; // To prevent excessive scrolling
showSlides(slideIndex);

// Function to show the current slide
function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) slideIndex = 1; // Loop back to the first slide
    if (n < 1) slideIndex = slides.length; // Loop back to the last slide

    slides.forEach((slide) => (slide.style.display = "none")); // Hide all slides
    dots.forEach((dot) => dot.classList.remove("active")); // Remove active class from dots

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    dots[slideIndex - 1]?.classList.add("active"); // Activate the corresponding dot
}

// Function to change slides manually (e.g., with arrows or scrolling)
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function for autoplay
function autoPlaySlides() {
    changeSlide(1); // Move to the next slide
}

// Set up autoplay with a 5-second interval
setInterval(autoPlaySlides, 5000); // Change every 5 seconds

// Add mouse scrolling functionality
document.querySelector(".slideshow-container").addEventListener("wheel", (event) => {
    if (scrollDebounce) return; // Prevent excessive scrolling
    scrollDebounce = true;

    if (event.deltaY > 0) {
        changeSlide(1); // Scroll down to next slide
    } else {
        changeSlide(-1); // Scroll up to previous slide
    }

    setTimeout(() => (scrollDebounce = false), 100); // Add a delay between scrolls
});
