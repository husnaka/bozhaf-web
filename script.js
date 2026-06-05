document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburgerBtn.classList.toggle("active");
    });

    // Menü linklerine tıklandığında menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            hamburgerBtn.classList.remove("active");
        });
    });

    // Background image slider
    const images = [
        "image-1.jpg",
        "image-2.jpg",
        "image-3.jpg",
        "image-4.jpg"
    ];

    let currentIndex = 0;
    const homeSection = document.getElementById("home");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 3000);
});