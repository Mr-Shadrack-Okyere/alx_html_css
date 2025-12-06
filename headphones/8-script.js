const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');

    // Animate hamburger icon
    hamburger.classList.toggle('active');
});
