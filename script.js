document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "image-1.jpg",
        "image-2.jpg",
        "image-3.jpg",
        "image-4.jpg"
    ];
    
    let currentIndex = 0;
    const homeSection = document.getElementById("home");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Dizi içinde sırayla dolaş
        homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 3000); // 3 saniyede bir değiştir
});