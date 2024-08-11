const navLinks = document.querySelectorAll('.navbar a', '.menu-burger');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});