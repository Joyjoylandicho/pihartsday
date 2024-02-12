let currentSlide = 0;
const slides = document.querySelectorAll('.flower-img');

function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

document.getElementById('slide-toggle').addEventListener('click', nextSlide);
